import React from 'react';

const JurusanKriya = () => {
  return (
    <div className="w-full bg-white font-sans flex flex-col">

      {/* Hero Section */}
      <section className="w-full min-h-screen pt-28 pb-16 flex flex-col items-center justify-center bg-gradient-to-b from-[#e2d1c3] via-[#f2e6db] to-[#faf7f2] text-slate-800 relative overflow-hidden">

        {/* Decorative Blur Backgrounds */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-white/20 blur-[100px] pointer-events-none"></div>

        {/* Main Container */}
        <div className="max-w-4xl w-full px-6 flex flex-col items-center relative z-10">

          {/* Certificate / ID Card Style */}
          <div className="w-full bg-white rounded-xl shadow-2xl overflow-hidden relative border border-white/50 mb-12 aspect-[16/9] md:aspect-[21/9] flex flex-col">

            {/* Top Section */}
            <div className="flex justify-between items-start px-8 pt-8">
              <div className="grid grid-cols-5 gap-1">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                ))}
              </div>

              <div className="font-bold text-slate-800 text-sm md:text-base tracking-wide">
                LSP-P1 SMKN 6 JEMBER
              </div>
            </div>

            {/* Middle Ribbon Section */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-32 md:h-40 bg-[#8b4513] flex items-center justify-between z-0">
              {/* Brown block */}
            </div>

            {/* Emblem Overlapping */}
            <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-16 z-10 flex items-center">
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-center justify-center relative bg-white p-2 border-4 border-white overflow-hidden">
                <img
                  src="/7 KKBT.png"
                  alt="Logo Kriya"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>


            {/* Text inside Ribbon */}
            <div className="absolute top-1/2 -translate-y-1/2 right-8 md:right-16 z-10 text-right flex flex-col items-end">
              <h2 className="text-white text-3xl md:text-5xl font-black mb-1 drop-shadow-md">TUK</h2>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-1 drop-shadow-md">Kriya Kreatif Batik & Tekstil</h3>
              <p className="text-white text-sm md:text-base font-medium drop-shadow">1 Skema Okupasi</p>
            </div>

            {/* Bottom Section */}
            <div className="absolute bottom-8 right-8 md:right-16 z-10">
              <div className="text-4xl md:text-5xl font-black text-slate-900 drop-shadow-sm">
                2026
              </div>
            </div>

          </div>

          {/* Text Content */}
          <div className="text-center flex flex-col items-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-slate-900 mb-4 leading-tight">
              Kriya Kreatif Batik Dan Tekstil<br />
              (KKBT)
            </h1>
            <p className="text-slate-600 text-[15px] md:text-base leading-relaxed mb-8">
              Melestarikan budaya bangsa melalui kreativitas seni batik dan kerajinan tekstil
              bernilai seni tinggi dan berdaya saing ekonomi kreatif.
            </p>
            <button className="bg-[#8b4513] hover:bg-[#6b3410] text-white font-semibold py-3 px-8 rounded-md shadow-lg transition-colors">
              Tanya Jurusan
            </button>
          </div>

        </div>
      </section>

      {/* Tentang Jurusan Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 md:gap-20 bg-white">
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1511211022447-7bc97017ba5e?auto=format&fit=crop&w=800&q=80"
            alt="Kegiatan Membatik"
            className="w-full h-auto object-cover border-4 border-white shadow-sm rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h2 className="text-2xl md:text-[28px] font-bold text-slate-900 mb-5">Tentang Jurusan</h2>
          <p className="text-slate-500 text-[14px] md:text-[15px] leading-relaxed mb-8 text-justify">
            Jurusan Kriya Kreatif Batik dan Tekstil membekali siswa dengan kompetensi desain dan pembuatan
            produk kerajinan berbahan tekstil, khususnya batik. Siswa akan mempelajari teknik membatik
            mulai dari desain motif, mencanting, pewarnaan, hingga pelodoran. Selain batik, siswa juga
            mempelajari teknik tenun, rajut, dan kriya tekstil lainnya untuk menciptakan produk fungsional
            maupun dekoratif yang memiliki nilai jual tinggi.
          </p>
        </div>
      </section>
      {/* Apa yang Dipelajari Section */}
      <section className="w-full bg-gradient-to-b from-[#5d2e0c] to-[#8b4513] py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-16 tracking-wide">Apa yang Dipelajari ?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {/* Card 1 */}
            <div className="bg-white rounded-lg py-12 px-6 flex flex-col items-center justify-center shadow-xl transform transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-[#8b4513] rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
              </div>
              <span className="font-bold text-slate-800 text-sm tracking-tight">Desain Motif</span>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-lg py-12 px-6 flex flex-col items-center justify-center shadow-xl transform transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-[#8b4513] rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </div>
              <span className="font-bold text-slate-800 text-sm tracking-tight">Mencanting</span>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-lg py-12 px-6 flex flex-col items-center justify-center shadow-xl transform transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-[#8b4513] rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343" /></svg>
              </div>
              <span className="font-bold text-slate-800 text-sm tracking-tight">Pewarnaan</span>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-lg py-12 px-6 flex flex-col items-center justify-center shadow-xl transform transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-[#8b4513] rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
              </div>
              <span className="font-bold text-slate-800 text-sm tracking-tight">Finishing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sekilas Informasi Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center md:text-left">Sekilas Informasi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden shadow-lg rounded-xl group">
            <img src="https://images.unsplash.com/photo-1511211022447-7bc97017ba5e?auto=format&fit=crop&w=600&q=80" alt="Sekilas Info 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden shadow-lg rounded-xl group border border-slate-100/50">
            <img src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=600&q=80" alt="Sekilas Info 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden shadow-lg rounded-xl group">
            <img src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=600&q=80" alt="Sekilas Info 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* Prospek Kerja Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="w-full bg-[#5d2e0c] rounded-xl py-20 px-8 md:px-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 tracking-wide relative z-10 text-center md:text-left">Prospek Kerja</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {/* Card 1 */}
            <div className="bg-white p-8 flex flex-col shadow-lg rounded-lg border-b-4 border-transparent hover:border-[#8b4513] transition-all">
              <h3 className="font-bold text-slate-900 text-lg mb-3">Wirausaha Batik</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Membangun usaha mandiri di bidang produksi kain batik dan produk turunannya.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-8 flex flex-col shadow-lg rounded-lg border-b-4 border-transparent hover:border-[#8b4513] transition-all">
              <h3 className="font-bold text-slate-900 text-lg mb-3">Desainer Tekstil</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Bekerja di industri tekstil untuk merancang motif dan struktur kain modern.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-8 flex flex-col shadow-lg rounded-lg border-b-4 border-transparent hover:border-[#8b4513] transition-all">
              <h3 className="font-bold text-slate-900 text-lg mb-3">Kreator Souvenir</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Menciptakan berbagai produk kerajinan tekstil untuk kebutuhan pariwisata.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white p-8 flex flex-col shadow-lg rounded-lg border-b-4 border-transparent hover:border-[#8b4513] transition-all">
              <h3 className="font-bold text-slate-900 text-lg mb-3">Konsultan Seni</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Menjadi ahli dalam kurasi dan pelestarian motif-motif tradisional.</p>
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
                src="https://images.unsplash.com/photo-1520038410233-7141f77e49aa?auto=format&fit=crop&w=800&q=80"
                alt="Laboratorium Kriya"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-orange-900/10 pointer-events-none mix-blend-overlay"></div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <div className="bg-[#8b4513] text-white text-[10px] font-bold tracking-widest px-4 py-1.5 rounded-full mb-6 uppercase">
              KRIYA KREATIF
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-slate-900 mb-6 leading-tight">
              Bengkel Kriya Batik
            </h2>
            <p className="text-slate-600 text-[14px] md:text-[15px] leading-relaxed mb-8 text-justify">
              Fasilitas bengkel kriya kami dilengkapi dengan peralatan lengkap untuk proses membatik tulis maupun cap,
              tungku pewarnaan modern, serta area desain yang luas untuk eksplorasi kreativitas siswa.
            </p>
            <a href="#" className="flex items-center gap-2 text-[#8b4513] font-bold text-sm hover:text-[#5d2e0c] transition-colors group">
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

export default JurusanKriya;
