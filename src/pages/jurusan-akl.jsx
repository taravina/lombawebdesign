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
              AKUNTANSI<br />
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
              <svg className="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
            </a>
            <a href="#" className="text-slate-800 hover:text-red-600 transition-colors">
              <svg className="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            </a>
          </div>
        </div>
      </section>
      {/* Apa yang Dipelajari Section */}
      <section className="w-full bg-gradient-to-b from-[#166534] to-[#22c55e] py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-16 tracking-wide">Apa yang Dipelajari ?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {/* Card 1 */}
            <div className="bg-white rounded-lg py-12 px-6 flex flex-col items-center justify-center shadow-xl transform transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-[#22c55e] rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <span className="font-bold text-slate-800 text-sm tracking-tight">Jurnal Umum</span>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-lg py-12 px-6 flex flex-col items-center justify-center shadow-xl transform transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-[#22c55e] rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
              </div>
              <span className="font-bold text-slate-800 text-sm tracking-tight">Akuntansi Bank</span>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-lg py-12 px-6 flex flex-col items-center justify-center shadow-xl transform transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-[#22c55e] rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <span className="font-bold text-slate-800 text-sm tracking-tight">Perpajakan</span>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-lg py-12 px-6 flex flex-col items-center justify-center shadow-xl transform transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-[#22c55e] rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <span className="font-bold text-slate-800 text-sm tracking-tight">MYOB Accounting</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sekilas Informasi Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center md:text-left">Sekilas Informasi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden shadow-lg rounded-xl group">
            <img src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=600&q=80" alt="Sekilas Info 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden shadow-lg rounded-xl group border border-slate-100/50">
            <img src="https://images.unsplash.com/photo-1454165833767-02a6ed8a687a?auto=format&fit=crop&w=600&q=80" alt="Sekilas Info 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden shadow-lg rounded-xl group">
            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80" alt="Sekilas Info 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* Prospek Kerja Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="w-full bg-[#166534] rounded-xl py-20 px-8 md:px-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 tracking-wide relative z-10 text-center md:text-left">Prospek Kerja</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {/* Card 1 */}
            <div className="bg-white p-8 flex flex-col shadow-lg rounded-lg border-b-4 border-transparent hover:border-[#22c55e] transition-all">
              <h3 className="font-bold text-slate-900 text-lg mb-3">Staff Akuntansi</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Mengelola pencatatan keuangan dan laporan laba rugi perusahaan.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-8 flex flex-col shadow-lg rounded-lg border-b-4 border-transparent hover:border-[#22c55e] transition-all">
              <h3 className="font-bold text-slate-900 text-lg mb-3">Teller Bank</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Melayani transaksi perbankan nasabah dengan teliti dan ramah.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-8 flex flex-col shadow-lg rounded-lg border-b-4 border-transparent hover:border-[#22c55e] transition-all">
              <h3 className="font-bold text-slate-900 text-lg mb-3">Internal Auditor</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Melakukan verifikasi dan pemeriksaan kepatuhan keuangan organisasi.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white p-8 flex flex-col shadow-lg rounded-lg border-b-4 border-transparent hover:border-[#22c55e] transition-all">
              <h3 className="font-bold text-slate-900 text-lg mb-3">Wirausaha</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Membuka jasa konsultan keuangan atau usaha mandiri yang terorganisir.</p>
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
                 src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80" 
                 alt="Laboratorium Akuntansi" 
                 className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-green-900/10 pointer-events-none mix-blend-overlay"></div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <div className="bg-[#22c55e] text-white text-[10px] font-bold tracking-widest px-4 py-1.5 rounded-full mb-6 uppercase">
              BANK MINI & LAB
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-slate-900 mb-6 leading-tight">
              Pusat Praktik Akuntansi
            </h2>
            <p className="text-slate-600 text-[14px] md:text-[15px] leading-relaxed mb-8 text-justify">
              Laboratorium AKL dilengkapi dengan sistem perbankan mini yang mensimulasikan lingkungan kerja nyata, 
              serta komputer berspesifikasi tinggi untuk pengoperasian software akuntansi modern.
            </p>
            <a href="#" className="flex items-center gap-2 text-[#22c55e] font-bold text-sm hover:text-[#166534] transition-colors group">
              Eksplorasi Lab 
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

        </div>
      </section>

      {/* Apa yang Dipelajari Section */}
      <section className="w-full bg-gradient-to-b from-[#22C55E] to-[#106931] py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-16 tracking-wide">Apa yang Dipelajari ?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {/* Card 1 */}
            <div className="bg-white rounded-lg py-12 px-6 flex flex-col items-center justify-center shadow-xl transform transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-[#22C55E] rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <span className="font-bold text-slate-800 text-sm tracking-tight">Programming</span>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-lg py-12 px-6 flex flex-col items-center justify-center shadow-xl transform transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-[#22C55E] rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
              </div>
              <span className="font-bold text-slate-800 text-sm tracking-tight">Database</span>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-lg py-12 px-6 flex flex-col items-center justify-center shadow-xl transform transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-[#22C55E] rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              </div>
              <span className="font-bold text-slate-800 text-sm tracking-tight">Web</span>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-lg py-12 px-6 flex flex-col items-center justify-center shadow-xl transform transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-[#22C55E] rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
              <span className="font-bold text-slate-800 text-sm tracking-tight">Mobile</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sekilas Informasi Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center md:text-left">Sekilas Informasi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden shadow-lg rounded-xl group">
            <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80" alt="Sekilas Info 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden shadow-lg rounded-xl group border border-slate-100/50">
            <img src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=600&q=80" alt="Sekilas Info 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden shadow-lg rounded-xl group">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80" alt="Sekilas Info 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* Prospek Kerja Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="w-full bg-[#22C55E] rounded-xl py-20 px-8 md:px-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 tracking-wide relative z-10 text-center md:text-left">Prospek Kerja</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {/* Card 1 */}
            <div className="bg-white p-8 flex flex-col shadow-lg rounded-lg border-b-4 border-transparent hover:border-[#164e63] transition-all">
              <h3 className="font-bold text-slate-900 text-lg mb-3">Graphic Designer</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Mengedit video untuk konten kreatif atau profesional.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-8 flex flex-col shadow-lg rounded-lg border-b-4 border-transparent hover:border-[#164e63] transition-all">
              <h3 className="font-bold text-slate-900 text-lg mb-3">Video Editor</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Mengedit video untuk konten kreatif atau profesional.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-8 flex flex-col shadow-lg rounded-lg border-b-4 border-transparent hover:border-[#164e63] transition-all">
              <h3 className="font-bold text-slate-900 text-lg mb-3">Photographer</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Menghasilkan foto untuk kebutuhan komersial atau media.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white p-8 flex flex-col shadow-lg rounded-lg border-b-4 border-transparent hover:border-[#164e63] transition-all">
              <h3 className="font-bold text-slate-900 text-lg mb-3">Creative Designer</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Mengembangkan konsep visual untuk branding dan promosi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lab/Studio Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 bg-white mb-10">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">

          {/* Right Column: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <div className="bg-[#22C55E] text-white text-[10px] font-bold tracking-widest px-4 py-1.5 rounded-full mb-6 uppercase">
              DESAIN KOMUNIKASI VISUAL
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-slate-900 mb-6 leading-tight">
              Studio Kreatif DKV
            </h2>
            <p className="text-slate-600 text-[14px] md:text-[15px] leading-relaxed mb-8 text-justify">
              Our DKV facilities include high-end iMac labs for digital design,
              a professional photography studio with lighting kits,
              and professional-grade digital drawing tablets to support student creativity.
            </p>
            <a href="#" className="flex items-center gap-2 text-[#164e63] font-bold text-sm hover:text-cyan-800 transition-colors group">
              Eksplorasi Studio
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Left Column: Image */}
          <div className="w-full md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100 relative group">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
                alt="Studio Kreatif DKV"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-cyan-900/10 pointer-events-none mix-blend-overlay"></div>
            </div>
          </div>



        </div>
      </section>

    </div>
  );
};

export default JurusanAkl;
