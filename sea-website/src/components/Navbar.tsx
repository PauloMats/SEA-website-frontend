'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DropdownIcon from './DropdownIcon'; // Certifique-se de que este caminho está correto

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false); // Definido mas não usado, considere remover se não for usar
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);   // Definido mas não usado, considere remover se não for usar
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDesktopDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMobileLinkClick = () => {
    setMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[rgba(23,95,164,0.8)] backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center px-6 py-3 max-w-[1440px] mx-auto h-[77px]">
        <Link href="/">
          <Image
            src="/img/logo-sea.png"
            alt="Logo SEA"
            width={50}
            height={50}
          />
        </Link>

        <nav className="hidden lg:flex gap-10 items-center">
          <Link href="/#problema" className="text-white font-semibold hover:underline">Problema</Link>
          <Link href="/#mercado" className="text-white font-semibold hover:underline">Mercado</Link>
          <Link href="/#solucao" className="text-white font-semibold hover:underline">Solução</Link>
          <Link href="/#diferenciais" className="text-white font-semibold hover:underline">Diferenciais</Link>
        </nav>

        {/* Menu mobile já tava ok */}
        {/* Você pode adicionar o botão do menu mobile aqui se ele estiver faltando */}
        <button 
          className="lg:hidden text-white" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle mobile menu"
        >
          {/* Ícone de menu (ex: um SVG ou um ícone de biblioteca) */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>

      {/* Dropdown mobile (mantém branco também) */}
      {menuOpen && (
        <div className="lg:hidden px-6 pb-6 space-y-2 bg-[rgba(23,95,164,0.8)] shadow">
          <Link href="/#problema" className="block text-white font-semibold py-2" onClick={handleMobileLinkClick}>Problema</Link>
          <Link href="/#mercado" className="block text-white font-semibold py-2" onClick={handleMobileLinkClick}>Mercado</Link>
          <Link href="/#solucao" className="block text-white font-semibold py-2" onClick={handleMobileLinkClick}>Solução</Link>
          <Link href="/#diferenciais" className="block text-white font-semibold py-2" onClick={handleMobileLinkClick}>Diferenciais</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
