import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-transparent backdrop-blur-sm">
      {/* Left side: Logo */}
      <div className="flex items-center gap-3 w-1/4">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-white/30 overflow-hidden shadow-lg shrink-0">
          <img src="/logosmk.jpg" alt="Logo SMKN 6 Jember" className="w-full h-full object-contain p-1" />
        </div>
        <div className="flex flex-col">
          <span className="text-white font-bold text-lg leading-none tracking-tight">SMKN 6 JEMBER</span>
          <span className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-medium">Berenergi Untuk Bisa Hebat</span>
        </div>
      </div>

      {/* Center side: Links */}
      <div className="hidden md:flex items-center justify-center gap-8 flex-1">
        <Link to="/" className="text-white font-medium hover:text-blue-400 transition-colors">Beranda</Link>
        <Link to="/about" className="text-white/80 font-medium hover:text-white transition-colors">Tentang</Link>
        
        {/* Jurusan Dropdown */}
        <div className="relative group">
          <button className="text-white/80 font-medium group-hover:text-white transition-colors flex items-center gap-1.5 py-2">
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

        <Link to="/kontak" className="text-white/80 font-medium hover:text-white transition-colors">Kontak</Link>
      </div>

      {/* Right side: Empty for balance (or CTA later) */}
      <div className="hidden md:flex w-1/4 justify-end">
        {/* You can add a button here later */}
      </div>
    </nav>
  );
};

export default Navbar;
