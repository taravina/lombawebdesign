import React from 'react';

const JurusanBd = () => {
  return (
    <div className="w-full bg-white font-sans flex flex-col">
      
      {/* Hero Section */}
      <section className="w-full min-h-screen pt-28 pb-16 flex flex-col items-center justify-center bg-gradient-to-b from-[#d8ceb4] via-[#ebe3d0] to-[#fbfaf6] text-slate-800 relative overflow-hidden">
        
        {/* Decorative Blur Backgrounds if needed */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-white/20 blur-[100px] pointer-events-none"></div>

        {/* Main Container */}
        <div className="max-w-4xl w-full px-6 flex flex-col items-center relative z-10">
          
          {/* Certificate / ID Card Style */}
          <div className="w-full bg-white rounded-xl shadow-2xl overflow-hidden relative border border-white/50 mb-12 aspect-[16/9] md:aspect-[21/9] flex flex-col">
            
            {/* Top Section */}
            <div className="flex justify-between items-start px-8 pt-8">
              {/* Dotted Pattern */}
              <div className="grid grid-cols-5 gap-1">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                ))}
              </div>
              
              {/* LSP Text */}
              <div className="font-bold text-slate-800 text-sm md:text-base tracking-wide">
                LSP-P1 SMKN 6 JEMBER
              </div>
            </div>

            {/* Middle Ribbon Section */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-32 md:h-40 bg-[#facc15] flex items-center justify-between z-0">
              {/* The yellow block itself is the background */}
            </div>

            {/* Emblem Overlapping */}
            <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-16 z-10 flex items-center">
              {/* Logo BD Asli */}
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-center justify-center relative bg-white p-2 border-4 border-white">
                  <img 
                    src="/2 BISNIS DIGITAL.png" 
                    alt="Logo Bisnis Digital SMKN 6 Jember" 
                    className="w-full h-full object-contain drop-shadow-sm" 
                  />
              </div>
            </div>

            {/* Text inside Ribbon */}
            <div className="absolute top-1/2 -translate-y-1/2 right-8 md:right-16 z-10 text-right flex flex-col items-end">
              <h2 className="text-slate-900 text-3xl md:text-5xl font-black mb-1">TUK</h2>
              <h3 className="text-slate-900 text-xl md:text-2xl font-bold mb-1">Pemasaran</h3>
              <p className="text-slate-900 text-sm md:text-base font-semibold">2 Skema Okupasi</p>
            </div>

            {/* Bottom Section */}
            <div className="absolute bottom-8 right-8 md:right-16 z-10">
              <div className="text-4xl md:text-5xl font-black text-slate-900 drop-shadow-sm">
                2025
              </div>
            </div>

          </div>

          {/* Text Content */}
          <div className="text-center flex flex-col items-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-slate-900 mb-4 leading-tight">
              Bisnis Digital Dan Pemasaran<br/>
              (BDP)
            </h1>
            <p className="text-slate-600 text-[15px] md:text-base leading-relaxed mb-8">
              Menguasai bisnis di era digital. Diharapkan untuk ilmu bisnis yang 
              lebih efektif serta ampuh.
            </p>
            <button className="bg-[#facc15] hover:bg-yellow-500 text-white font-bold py-3 px-10 rounded-sm shadow-lg transition-colors">
              Tanya Jurusan
            </button>
          </div>

        </div>
      </section>

      {/* Tentang Jurusan Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 md:gap-20 bg-white">
        <div className="w-full md:w-1/2">
          {/* Placeholder for the classroom activity image */}
          <img 
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80" 
            alt="Kegiatan Belajar Jurusan Bisnis Digital" 
            className="w-full h-auto object-cover shadow-sm border border-slate-100"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h2 className="text-2xl md:text-[28px] font-bold text-slate-900 mb-5">Tentang Jurusan</h2>
          <p className="text-slate-500 text-[14px] md:text-[15px] leading-relaxed text-justify">
            Jurusan Bisnis Digital mengajarkan siswa bagaimana menjalankan dan mengembangkan bisnis berbasis teknologi. Siswa akan mempelajari strategi pemasaran digital, pengelolaan toko online, analisis pasar, serta pembuatan konten yang menarik untuk media sosial. Selain itu, siswa juga dilatih untuk berpikir kreatif dan inovatif dalam menghadapi persaingan bisnis modern. Jurusan ini sangat cocok bagi siswa yang ingin menjadi entrepreneur atau bekerja di bidang pemasaran digital.
          </p>
        </div>
      </section>

      {/* Apa yang Dipelajari Section */}
      <section className="w-full bg-gradient-to-b from-[#99790b] to-[#facc15] py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-16 tracking-wide">Apa yang Dipelajari ?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {/* Card 1 */}
            <div className="bg-white rounded-lg py-12 px-6 flex flex-col items-center justify-center shadow-xl transform transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-[#facc15] rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
              </div>
              <span className="font-bold text-slate-800 text-sm tracking-tight">Digital Marketing</span>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-lg py-12 px-6 flex flex-col items-center justify-center shadow-xl transform transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-[#facc15] rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
              </div>
              <span className="font-bold text-slate-800 text-sm tracking-tight">Social Media</span>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-lg py-12 px-6 flex flex-col items-center justify-center shadow-xl transform transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-[#facc15] rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <span className="font-bold text-slate-800 text-sm tracking-tight">E-Commerce</span>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-lg py-12 px-6 flex flex-col items-center justify-center shadow-xl transform transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-[#facc15] rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              </div>
              <span className="font-bold text-slate-800 text-sm tracking-tight">Content Creator</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sekilas Informasi Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center md:text-left">Sekilas Informasi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden shadow-lg rounded-xl group">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80" alt="Sekilas Info 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden shadow-lg rounded-xl group border border-slate-100/50">
            <img src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=600&q=80" alt="Sekilas Info 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden shadow-lg rounded-xl group">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80" alt="Sekilas Info 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* Prospek Kerja Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="w-full bg-[#99790b] rounded-xl py-20 px-8 md:px-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 tracking-wide relative z-10 text-center md:text-left">Prospek Kerja</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {/* Card 1 */}
            <div className="bg-white p-8 flex flex-col shadow-lg rounded-lg border-b-4 border-transparent hover:border-[#facc15] transition-all">
              <h3 className="font-bold text-slate-900 text-lg mb-3">Entrepreneur</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Membangun dan mengembangkan bisnis digital mandiri di berbagai sektor.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-8 flex flex-col shadow-lg rounded-lg border-b-4 border-transparent hover:border-[#facc15] transition-all">
              <h3 className="font-bold text-slate-900 text-lg mb-3">Digital Marketer</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Merancang strategi pemasaran online untuk meningkatkan penjualan produk.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-8 flex flex-col shadow-lg rounded-lg border-b-4 border-transparent hover:border-[#facc15] transition-all">
              <h3 className="font-bold text-slate-900 text-lg mb-3">Social Media Spec</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Mengelola konten dan pertumbuhan komunitas di berbagai platform sosial.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white p-8 flex flex-col shadow-lg rounded-lg border-b-4 border-transparent hover:border-[#facc15] transition-all">
              <h3 className="font-bold text-slate-900 text-lg mb-3">Marketplace Admin</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Mengelola operasional toko online di berbagai platform e-commerce.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 bg-white mb-10">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          {/* Left Column: Image */}
          <div className="w-full md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100 relative group">
               <img 
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
                 alt="Laboratorium Bisnis Digital" 
                 className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-yellow-900/10 pointer-events-none mix-blend-overlay"></div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <div className="bg-[#facc15] text-slate-900 text-[10px] font-bold tracking-widest px-4 py-1.5 rounded-full mb-6 uppercase">
              BENGKEL BISNIS
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-slate-900 mb-6 leading-tight">
              Pusat Inovasi Digital
            </h2>
            <p className="text-slate-600 text-[14px] md:text-[15px] leading-relaxed mb-8 text-justify">
              Laboratorium Bisnis Digital kami dilengkapi dengan peralatan produksi konten multimedia, 
              studio foto produk, serta area kolaborasi untuk pengembangan ide bisnis kreatif siswa.
            </p>
            <a href="#" className="flex items-center gap-2 text-[#d6a50e] font-bold text-sm hover:text-[#99790b] transition-colors group">
              Lihat Bengkel 
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};

export default JurusanBd;

