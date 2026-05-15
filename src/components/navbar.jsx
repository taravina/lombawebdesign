import React, { useState, useEffect } from 'react';
import { Link } from '../router';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 transition-all duration-300 ${scrolled ? 'glass-nav shadow-lg' : 'bg-transparent'}`}>
      {/* Left side: Logo */}
      <div className="flex items-center gap-3 w-1/4">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-white/30 overflow-hidden shadow-lg shrink-0">
          <img src="/logosmk.jpg" alt="Logo SMKN 6 Jember" className="w-full h-full object-contain p-1" />
        </div>
        <div className="flex flex-col">
          <span className={`font-bold text-lg leading-none tracking-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>SMKN 6 JEMBER</span>
          <span className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors ${scrolled ? 'text-slate-600' : 'text-white/80'}`}>Berenergi Untuk Bisa Hebat</span>
        </div>
      </div>

      {/* Center side: Links */}
      <div className="hidden md:flex items-center justify-center gap-8 flex-1">
        <Link to="/" className={`font-medium hover:text-blue-600 transition-colors ${scrolled ? 'text-slate-700' : 'text-white'}`}>Beranda</Link>
        <Link to="/about" className={`font-medium hover:text-blue-600 transition-colors ${scrolled ? 'text-slate-700' : 'text-white/80'}`}>Tentang</Link>
        
        {/* Jurusan Dropdown */}
        <div className="relative group">
          <button className={`font-medium transition-colors flex items-center gap-1.5 py-2 ${scrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white/80 hover:text-white'}`}>
            Jurusan
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Dropdown Menu */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 origin-top">
            <div className="bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-100 py-3 w-64 flex flex-col text-left">
              <Link to="/jurusan-rpl" className="px-5 py-2.5 text-[14px] font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 transition-colors">Rekayasa Perangkat Lunak</Link>
              <Link to="/jurusan-mp" className="px-5 py-2.5 text-[14px] font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 transition-colors">Manajemen Perkantoran</Link>
              <Link to="/jurusan-bd" className="px-5 py-2.5 text-[14px] font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 transition-colors">Bisnis Digital dan Pemasaran</Link>
              <Link to="/jurusan-dkv" className="px-5 py-2.5 text-[14px] font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 transition-colors">Desain Komunikasi Visual</Link>
              <Link to="/jurusan-akl" className="px-5 py-2.5 text-[14px] font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 transition-colors">Akuntansi dan Keuangan Lembaga</Link>
              <Link to="/jurusan-kriya" className="px-5 py-2.5 text-[14px] font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 transition-colors">Kriya Kreatif Batik dan Tekstil</Link>
            </div>
          </div>
        </div>

        <Link to="/kontak" className={`font-medium hover:text-blue-600 transition-colors ${scrolled ? 'text-slate-700' : 'text-white/80'}`}>Kontak</Link>
      </div>

      {/* Right side: Empty for balance (or CTA later) */}
      <div className="hidden md:flex w-1/4 justify-end">
        {/* You can add a button here later */}
      </div>
    </nav>
  );
};

export default Navbar;
