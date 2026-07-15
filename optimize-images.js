const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const stats = fs.statSync(filePath);
  const originalSize = stats.size;
  
  // Skip if file is already small enough
  if (originalSize < 500000) { // Skip files under 500KB
    console.log(`Skipping: ${path.basename(filePath)} (${(originalSize / 1024).toFixed(2)} KB) - already optimized`);
    return;
  }
  
  console.log(`Processing: ${path.basename(filePath)} (${(originalSize / 1024).toFixed(2)} KB)`);
  
  try {
    let sharpInstance = sharp(filePath);
    
    if (ext === '.png') {
      // Compress PNG with quality 80
      const outputPath = filePath + '.temp';
      await sharpInstance
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(outputPath);
      
      const newStats = fs.statSync(outputPath);
      const newSize = newStats.size;
      const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
      
      console.log(`  → Compressed: ${(newSize / 1024).toFixed(2)} KB (${savings}% reduction)`);
      
      // Replace original
      fs.unlinkSync(filePath);
      fs.renameSync(outputPath, filePath);
      console.log(`  → Replaced original`);
      
    } else if (ext === '.jpg' || ext === '.jpeg') {
      // Compress JPEG with quality 80
      const outputPath = filePath + '.temp';
      await sharpInstance
        .jpeg({ quality: 80 })
        .toFile(outputPath);
      
      const newStats = fs.statSync(outputPath);
      const newSize = newStats.size;
      const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
      
      console.log(`  → Compressed: ${(newSize / 1024).toFixed(2)} KB (${savings}% reduction)`);
      
      // Replace original
      fs.unlinkSync(filePath);
      fs.renameSync(outputPath, filePath);
      console.log(`  → Replaced original`);
    }
    
  } catch (error) {
    console.error(`  → Error processing ${path.basename(filePath)}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('Starting image optimization...\n');
  
  const files = fs.readdirSync(imagesDir);
  const imageFiles = files.filter(file => 
    file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')
  );
  
  console.log(`Found ${imageFiles.length} images to optimize\n`);
  
  for (const file of imageFiles) {
    const filePath = path.join(imagesDir, file);
    await optimizeImage(filePath);
  }
  
  console.log('\n✅ Image optimization complete!');
}

optimizeAllImages().catch(console.error);
