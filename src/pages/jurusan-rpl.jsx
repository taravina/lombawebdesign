import React from 'react';

const JurusanRpl = () => {
  return (
    <div className="w-full bg-white font-sans flex flex-col">
      
      {/* Hero Section */}
      <section className="w-full min-h-screen pt-28 pb-16 flex flex-col items-center justify-center bg-gradient-to-b from-[#e0a8a8] via-[#f7d9d9] to-[#ffebeb] text-slate-800 relative overflow-hidden">
        
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
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-32 md:h-40 bg-[#ba1c1c] flex items-center justify-between z-0">
              {/* The red block itself is the background */}
            </div>

            {/* Emblem Overlapping */}
            <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-16 z-10 flex items-center">
              {/* Logo RPL Asli */}
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-center justify-center relative bg-white p-2 border-4 border-white">
                  <img 
                    src="/logorpl.png" 
                    alt="Logo RPL SMKN 6 Jember" 
                    className="w-full h-full object-contain drop-shadow-sm" 
                  />
              </div>
            </div>

            {/* Text inside Ribbon */}
            <div className="absolute top-1/2 -translate-y-1/2 right-8 md:right-16 z-10 text-right flex flex-col items-end">
              <h2 className="text-white text-3xl md:text-5xl font-black mb-1 drop-shadow-md">TUK</h2>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-1 drop-shadow-md">Rekayasa Perangkat Lunak</h3>
              <p className="text-white text-sm md:text-base font-medium drop-shadow">1 Skema Okupasi</p>
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
              Rekayasa Perangkat Lunak<br/>
              (RPL)
            </h1>
            <p className="text-slate-600 text-[15px] md:text-base leading-relaxed mb-8">
              Mencetak tenaga ahli profesional di bidang pengembangan perangkat lunak, 
              aplikasi web, dan mobile dengan standar industri global.
            </p>
            <button className="bg-[#ba1c1c] hover:bg-red-800 text-white font-semibold py-3 px-8 rounded-md shadow-lg transition-colors">
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
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80" 
            alt="Kegiatan Belajar Jurusan RPL" 
            className="w-full h-auto object-cover border-4 border-white shadow-sm"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h2 className="text-2xl md:text-[28px] font-bold text-slate-900 mb-5">Tentang Jurusan</h2>
          <p className="text-slate-500 text-[14px] md:text-[15px] leading-relaxed mb-8 text-justify">
            Program keahlian Rekayasa Perangkat Lunak menitikberatkan pada kompetensi analisis, 
            desain, pengodean, pengujian, dan pemeliharaan perangkat lunak. Siswa dibekali dengan 
            pemahaman logika pemrograman yang kuat untuk menyelesaikan masalah di berbagai platform 
            teknologi masa kini.
          </p>
          <div className="flex gap-5">
             {/* Twitter Icon */}
             <a href="#" className="text-slate-800 hover:text-blue-500 transition-colors">
                <svg className="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
             </a>
             {/* YouTube Icon */}
             <a href="#" className="text-slate-800 hover:text-red-600 transition-colors">
                <svg className="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
             </a>
          </div>
        </div>
      </section>

      {/* Apa yang Dipelajari Section */}
      <section className="w-full bg-[#8c1e1e] py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 tracking-wide">Apa yang Dipelajari ?</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 w-full">
            {/* Card 1 */}
            <div className="bg-white py-10 px-4 flex flex-col items-center justify-center shadow-lg border border-transparent hover:border-red-500 hover:-translate-y-1 transition-all duration-300">
              <div className="w-[45px] h-[45px] bg-[#d33a3a] rounded-full flex items-center justify-center text-white mb-4 shadow-md">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <span className="font-bold text-slate-800 text-[13px] md:text-[14px]">Programming</span>
            </div>
            {/* Card 2 */}
            <div className="bg-white py-10 px-4 flex flex-col items-center justify-center shadow-lg border border-transparent hover:border-red-500 hover:-translate-y-1 transition-all duration-300">
              <div className="w-[45px] h-[45px] bg-[#d33a3a] rounded-full flex items-center justify-center text-white mb-4 shadow-md">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
              </div>
              <span className="font-bold text-slate-800 text-[13px] md:text-[14px]">Database</span>
            </div>
            {/* Card 3 */}
            <div className="bg-white py-10 px-4 flex flex-col items-center justify-center shadow-lg border border-transparent hover:border-red-500 hover:-translate-y-1 transition-all duration-300">
              <div className="w-[45px] h-[45px] bg-[#d33a3a] rounded-full flex items-center justify-center text-white mb-4 shadow-md">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              </div>
              <span className="font-bold text-slate-800 text-[13px] md:text-[14px]">Web</span>
            </div>
            {/* Card 4 */}
            <div className="bg-white py-10 px-4 flex flex-col items-center justify-center shadow-lg border border-transparent hover:border-red-500 hover:-translate-y-1 transition-all duration-300">
              <div className="w-[45px] h-[45px] bg-[#d33a3a] rounded-full flex items-center justify-center text-white mb-4 shadow-md">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
              <span className="font-bold text-slate-800 text-[13px] md:text-[14px]">Mobile</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sekilas Informasi Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-20 bg-white">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Sekilas Informasi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden shadow-sm">
            {/* Menggunakan placeholder gambar, Anda dapat menggantinya nanti */}
            <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80" alt="Penyerahan Sertifikat" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden shadow-sm border border-slate-100/50">
            {/* Menggunakan placeholder gambar, Anda dapat menggantinya nanti */}
            <img src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=600&q=80" alt="Sertifikat BNSP" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden shadow-sm">
            {/* Menggunakan placeholder gambar, Anda dapat menggantinya nanti */}
            <img src="https://images.unsplash.com/photo-1523580494112-071d16940a28?auto=format&fit=crop&w=600&q=80" alt="Kunjungan Industri" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* Prospek Kerja Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-10">
        <div className="w-full bg-gradient-to-r from-[#cc2b2b] to-[#601414] rounded-sm py-16 px-8 md:px-12 shadow-md">
          <h2 className="text-2xl md:text-[28px] font-semibold text-white mb-10 tracking-wide">Prospek Kerja</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {/* Card 1 */}
            <div className="bg-white p-6 md:p-8 flex flex-col shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-slate-900 text-[17px] md:text-xl mb-3">Web Dev</h3>
              <p className="text-slate-600 text-[13px] md:text-sm leading-relaxed">Membangun website responsif dan fungsional untuk kebutuhan bisnis.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-6 md:p-8 flex flex-col shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-slate-900 text-[17px] md:text-xl mb-3">Mobile Dev</h3>
              <p className="text-slate-600 text-[13px] md:text-sm leading-relaxed">Mengembangkan aplikasi Android dan iOS yang inovatif.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-6 md:p-8 flex flex-col shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-slate-900 text-[17px] md:text-xl mb-3">UI/UX</h3>
              <p className="text-slate-600 text-[13px] md:text-sm leading-relaxed">Merancang antarmuka dan pengalaman pengguna yang optimal.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white p-6 md:p-8 flex flex-col shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-slate-900 text-[17px] md:text-xl mb-3">Freelancer</h3>
              <p className="text-slate-600 text-[13px] md:text-sm leading-relaxed">Bekerja secara mandiri pada berbagai proyek perangkat lunak.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-20 bg-white mb-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Left Column: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start pl-0 md:pl-4">
            <div className="bg-[#a22f2f] text-white text-[10px] md:text-[11px] font-bold tracking-widest px-4 py-1.5 rounded-full mb-6 uppercase">
              RPL / TIK
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-slate-900 mb-6 leading-tight tracking-tight">
              Software Engineering<br/>Lab
            </h2>
            <p className="text-slate-600 text-[14px] md:text-[15px] leading-relaxed mb-8">
              A high-tech facility featuring high-performance servers, 
              advanced networking equipment, and modern 
              development stations optimized for coding, testing, and 
              deploying complex software systems.
            </p>
            <a href="#" className="flex items-center gap-2 text-[#cc2b2b] font-bold text-[13px] md:text-sm hover:text-red-800 transition-colors">
              Pusat Teknologi 
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6a2 2 0 012-2h2l2 2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
              </svg>
            </a>
          </div>

          {/* Right Column: Image */}
          <div className="w-full md:w-1/2 pr-0 md:pr-4">
            <div className="rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-slate-100/50 relative">
               {/* Placeholder for the blue dark server lab image. We use a stock image that closely resembles it. */}
               <img 
                 src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" 
                 alt="Software Engineering Lab" 
                 className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
               />
               {/* Optional subtle blue tint to match the design's mood */}
               <div className="absolute inset-0 bg-blue-900/10 pointer-events-none mix-blend-overlay"></div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default JurusanRpl;
