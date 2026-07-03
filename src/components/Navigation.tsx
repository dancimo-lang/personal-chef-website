'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  const handleServicesEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
    setDropdownTimeout(timeout);
  };

  return (
    <nav className="shadow-md sticky top-0 z-50" style={{backgroundColor: '#d7e1c7'}}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/planted slo Logo v2.png"
              alt="PLANTED SLO Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-2xl font-bold" style={{color: '#002b00'}}>PLANTED SLO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="transition-colors font-medium hover:opacity-80"
              style={{color: '#002b00'}}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="transition-colors font-medium hover:opacity-80"
              style={{color: '#002b00'}}
            >
              About
            </Link>
            <div 
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <Link 
                href="/menu"
                className="transition-colors font-medium hover:opacity-80 flex items-center space-x-1"
                style={{color: '#002b00'}}
              >
                Services
                <ChevronDown size={16} />
              </Link>
              <div 
                className={`absolute top-full left-0 mt-1 w-44 sm:w-48 rounded-lg shadow-lg transition-all duration-200 ${
                  isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                style={{backgroundColor: '#d7e1c7'}}
              >
                <Link 
                  href="/meal-prep-services" 
                  className="block px-4 py-3 transition-colors hover:opacity-80"
                  style={{color: '#002b00'}}
                >
                  Meal Prep Services
                </Link>
                <Link 
                  href="/private-dinners" 
                  className="block px-4 py-3 transition-colors hover:opacity-80"
                  style={{color: '#002b00'}}
                >
                  Private Dinners
                </Link>
              </div>
            </div>
                                    <Link 
              href="/contact" 
              className="transition-colors font-medium hover:opacity-80"
              style={{color: '#002b00'}}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="hover:opacity-80 focus:outline-none"
              style={{color: '#002b00'}}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md-hidden block w-full">
            <div className="px-2 pt-2 pb-3 border-t block w-full" style={{borderColor: '#002b00', backgroundColor: '#d7e1c7'}}>
              <a href="/" onClick={() => setIsOpen(false)} className="block w-full" style={{color: '#002b00', textDecoration: 'none', marginBottom: '16px', display: 'block'}}>Home</a>
              <a href="/about" onClick={() => setIsOpen(false)} className="block w-full" style={{color: '#002b00', textDecoration: 'none', marginBottom: '16px', display: 'block'}}>About</a>
              <button onClick={toggleServices} className="block w-full text-left" style={{color: '#002b00', background: 'none', border: 'none', cursor: 'pointer', marginBottom: '16px', display: 'block'}}>
                Services <ChevronDown size={16} className={`transform transition-transform ${isServicesOpen ? 'rotate-180' : ''} ml-2`} />
              </button>
              {isServicesOpen && (
                <div style={{marginLeft: '16px', marginTop: '8px'}}>
                  <a href="/meal-prep-services" onClick={() => setIsOpen(false)} className="block w-full" style={{color: '#002b00', textDecoration: 'none', marginBottom: '12px', display: 'block'}}>Meal Prep Services</a>
                  <a href="/private-dinners" onClick={() => setIsOpen(false)} className="block w-full" style={{color: '#002b00', textDecoration: 'none', marginBottom: '12px', display: 'block'}}>Private Dinners</a>
                </div>
              )}
              <a href="/contact" onClick={() => setIsOpen(false)} className="block w-full" style={{color: '#002b00', textDecoration: 'none', display: 'block'}}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
