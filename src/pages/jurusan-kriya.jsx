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
                    src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=400&q=80" 
                    alt="Logo Kriya Placeholder" 
                    className="w-full h-full object-cover" 
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
              Kriya Kreatif Batik Dan Tekstil<br/>
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

    </div>
  );
};

export default JurusanKriya;
