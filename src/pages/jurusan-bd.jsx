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
              {/* Logo BD */}
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-center justify-center relative bg-white p-2 border-4 border-white overflow-hidden animate-float">
                <img
                  src="/2 BISNIS DIGITAL.png"
                  alt="Logo BD"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Text inside Ribbon */}
            <div className="absolute top-1/2 -translate-y-1/2 right-8 md:right-16 z-10 text-right flex flex-col items-end">
              <h2 className="text-slate-900 text-3xl md:text-5xl font-black mb-1">TUK</h2>
              <h3 className="text-slate-900 text-xl md:text-2xl font-bold mb-1">Bisnis Digital</h3>
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
          <div className="text-center flex flex-col items-center max-w-2xl mx-auto animate-fade-up">
            <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-slate-900 mb-4 leading-tight">
              Bisnis Digital<br />
              (BD)
            </h1>
            <p className="text-slate-600 text-[15px] md:text-base leading-relaxed mb-8">
              Menguasai bisnis di era digital. Diharapkan untuk ilmu bisnis yang 
              lebih efektif serta ampuh di pasar global.
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
            className="w-full h-auto object-cover shadow-sm border border-slate-100 rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h2 className="text-2xl md:text-[28px] font-bold text-slate-900 mb-5">Tentang Jurusan</h2>
          <p className="text-slate-500 text-[14px] md:text-[15px] leading-relaxed mb-8 text-justify">
            Jurusan Bisnis Digital mengajarkan siswa bagaimana menjalankan dan mengembangkan bisnis berbasis teknologi. Siswa akan mempelajari strategi pemasaran digital, pengelolaan toko online, analisis pasar, serta pembuatan konten yang menarik untuk media sosial. Selain itu, siswa juga dilatih untuk berpikir kreatif dan inovatif dalam menghadapi persaingan bisnis modern. Jurusan ini sangat cocok bagi siswa yang ingin menjadi entrepreneur atau bekerja di bidang pemasaran digital.
          </p>
          <div className="flex gap-5">
            {/* Twitter Icon */}
            <a href="#" className="text-slate-800 hover:text-blue-500 transition-colors">
              <svg className="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
            </a>
            {/* YouTube Icon */}
            <a href="#" className="text-slate-800 hover:text-red-600 transition-colors">
              <svg className="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Apa yang Dipelajari Section */}
      <section className="w-full bg-gradient-to-b from-[#99790b] to-[#facc15] py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-16 tracking-wide">Apa yang Dipelajari ?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {/* Card 1 */}
            <div className="bg-white rounded-lg py-12 px-6 flex flex-col items-center justify-center shadow-xl hover-lift">
              <div className="w-16 h-16 bg-[#eab308] rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              </div>
              <span className="font-bold text-slate-800 text-sm tracking-tight">E-Commerce</span>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-lg py-12 px-6 flex flex-col items-center justify-center shadow-xl hover-lift">
              <div className="w-16 h-16 bg-[#eab308] rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
              </div>
              <span className="font-bold text-slate-800 text-sm tracking-tight">Digital Marketing</span>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-lg py-12 px-6 flex flex-col items-center justify-center shadow-xl hover-lift">
              <div className="w-16 h-16 bg-[#eab308] rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
              </div>
              <span className="font-bold text-slate-800 text-sm tracking-tight">Business Analytics</span>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-lg py-12 px-6 flex flex-col items-center justify-center shadow-xl hover-lift">
              <div className="w-16 h-16 bg-[#eab308] rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <span className="font-bold text-slate-800 text-sm tracking-tight">Creative Content</span>
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
