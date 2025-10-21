"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Главная", href: "#home" },
    
    { name: "Mellstroy.club", href: "#casino" },
    { name: "Расписание", href: "#schedule" },
    { name: "Комьюнити", href: "#community" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-purple-950/80 backdrop-blur-md shadow-lg shadow-purple-900/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image 
              src="/mellog.png" 
              alt="Mellstroy Logo" 
              width={32} 
              height={32}
              className="h-8 w-8 object-contain"
            />
            <span className="text-2xl font-bold glow-text">MELLSTROY<span className="text-casino-gold">.GAME</span></span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-casino-gold transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#casino" 
              className="bg-transparent text-casino-gold border-2 border-casino-gold font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-casino-gold/50 text-sm"
            >
              Играть
            </a>
            <a href="https://kick.com/mellstroy987" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
              Смотреть Стрим
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-casino-gold"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-purple-950/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-white hover:text-casino-gold transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#casino" 
              className="bg-transparent text-casino-gold border-2 border-casino-gold font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-casino-gold/50 w-full mt-4 text-sm block text-center"
              onClick={() => setIsOpen(false)}
            >
              Играть
            </a>
            <a href="https://kick.com/mellstroy987" target="_blank" rel="noopener noreferrer" className="btn-primary w-full mt-4 text-sm block text-center">
              Смотреть Стрим
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

