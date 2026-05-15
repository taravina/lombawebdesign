import React from 'react';

const JurusanAkl = () => {
  return (
    <div className="w-full bg-white font-sans flex flex-col">
      
      {/* Hero Section */}
      <section className="w-full min-h-screen pt-28 pb-16 flex flex-col items-center justify-center bg-gradient-to-b from-[#b8e6c4] via-[#d4f1db] to-[#f4fbf6] text-slate-800 relative overflow-hidden">
        
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
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-32 md:h-40 bg-[#22c55e] flex items-center justify-between z-0">
              {/* The green block itself is the background */}
            </div>

            {/* Emblem Overlapping */}
            <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-16 z-10 flex items-center">
              {/* Logo AKL Placeholder */}
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-center justify-center relative bg-white p-2 border-4 border-white">
                  <div className="w-full h-full rounded-full border-2 border-green-600 flex items-center justify-center bg-slate-50 overflow-hidden relative">
                    <img 
                      src="1 AKUNTANSI.png" 
                      alt="Logo AKL Placeholder" 
                      className="w-full h-full object-cover opacity-80" 
                    />
                  </div>
              </div>
            </div>

            {/* Text inside Ribbon */}
            <div className="absolute top-1/2 -translate-y-1/2 right-8 md:right-16 z-10 text-right flex flex-col items-end text-white">
              <h2 className="text-3xl md:text-5xl font-black mb-1 drop-shadow-md">TUK</h2>
              <h3 className="text-xl md:text-2xl font-bold mb-1 drop-shadow-md">Akuntansi dan Keuangan Lembaga</h3>
              <p className="text-sm md:text-base font-semibold drop-shadow">2 Skema Cluster</p>
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
              AKUNTANSI<br/>
              (AKL)
            </h1>
            <p className="text-slate-600 text-[15px] md:text-base leading-relaxed mb-8">
              Jurusan AKL mempelajari pencatatan, pengelolaan, dan analisis 
              keuangan untuk perusahaan maupun instansi.
            </p>
            <button className="bg-[#22c55e] hover:bg-green-600 text-white font-bold py-3 px-10 rounded-sm shadow-lg transition-colors">
              Tanya Jurusan
            </button>
          </div>

        </div>
      </section>

      {/* Tentang Jurusan Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 md:gap-20 bg-white">
        <div className="w-full md:w-1/2">
          {/* Placeholder for the accounting work image */}
          <img 
            src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80" 
            alt="Kegiatan Belajar Jurusan AKL" 
            className="w-full h-auto object-cover border-4 border-white shadow-sm"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h2 className="text-2xl md:text-[28px] font-bold text-slate-900 mb-5">Tentang Jurusan</h2>
          <p className="text-slate-500 text-[14px] md:text-[15px] leading-relaxed mb-8 text-justify">
            Jurusan Akuntansi dan Keuangan Lembaga (AKL) membekali siswa dengan kemampuan dalam mencatat, mengelola, dan menganalisis keuangan secara sistematis dan akurat. Siswa akan belajar bagaimana menyusun laporan keuangan, memahami alur transaksi bisnis, serta menggunakan berbagai software akuntansi yang digunakan di dunia kerja. Jurusan ini juga menanamkan ketelitian, tanggung jawab, dan integritas yang tinggi, sehingga lulusan siap bekerja di bidang keuangan, perbankan, maupun instansi lainnya.
          </p>
          <div className="flex gap-5">
             <a href="#" className="text-slate-800 hover:text-blue-500 transition-colors">
                <svg className="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
             </a>
             <a href="#" className="text-slate-800 hover:text-red-600 transition-colors">
                <svg className="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
             </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default JurusanAkl;
