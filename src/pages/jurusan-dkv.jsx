import React from 'react';

const JurusanDkv = () => {
  return (
    <div className="w-full bg-white font-sans flex flex-col">
      
      {/* Hero Section */}
      <section className="w-full min-h-screen pt-28 pb-16 flex flex-col items-center justify-center bg-gradient-to-b from-[#b4b4b4] via-[#d6d6d6] to-[#f5f5f5] text-slate-800 relative overflow-hidden">
        
        {/* Decorative Blur Backgrounds */}
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
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-32 md:h-40 bg-[#1a1a1a] flex items-center justify-between z-0">
              {/* The black block itself is the background */}
            </div>

            {/* Emblem Overlapping */}
            <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-16 z-10 flex items-center">
              {/* Logo DKV */}
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-center justify-center relative bg-white p-2 border-4 border-white overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=400&q=80" 
                    alt="Logo DKV Placeholder" 
                    className="w-full h-full object-cover" 
                  />
              </div>
            </div>

            {/* Text inside Ribbon */}
            <div className="absolute top-1/2 -translate-y-1/2 right-8 md:right-16 z-10 text-right flex flex-col items-end">
              <h2 className="text-white text-3xl md:text-5xl font-black mb-1 drop-shadow-md">TUK</h2>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-1 drop-shadow-md">Desain Komunikasi Visual</h3>
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
              Desain Komunikasi Visual<br/>
              (DKV)
            </h1>
            <p className="text-slate-600 text-[15px] md:text-base leading-relaxed mb-8">
              Mengekspresikan ide melalui karya visual yang kreatif, inovatif, dan komunikatif 
              untuk menjawab tantangan industri kreatif masa depan.
            </p>
            <button className="bg-[#1a1a1a] hover:bg-slate-800 text-white font-semibold py-3 px-8 rounded-md shadow-lg transition-colors">
              Tanya Jurusan
            </button>
          </div>

        </div>
      </section>

      {/* Tentang Jurusan Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 md:gap-20 bg-white">
        <div className="w-full md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" 
            alt="Kegiatan Belajar Jurusan DKV" 
            className="w-full h-auto object-cover border-4 border-white shadow-sm rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h2 className="text-2xl md:text-[28px] font-bold text-slate-900 mb-5">Tentang Jurusan</h2>
          <p className="text-slate-500 text-[14px] md:text-[15px] leading-relaxed mb-8 text-justify">
            Desain Komunikasi Visual (DKV) adalah program keahlian yang mempelajari cara mengomunikasikan 
            pesan menggunakan elemen visual seperti gambar, tipografi, dan warna. Siswa diajarkan 
            berbagai teknik mulai dari ilustrasi manual, desain grafis digital, fotografi, videografi, 
            hingga animasi. Fokus utama adalah menciptakan karya yang tidak hanya estetis, tetapi 
            juga efektif dalam menyampaikan informasi kepada audiens.
          </p>
        </div>
      </section>

      {/* Prospek Kerja Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-10">
        <div className="w-full bg-gradient-to-r from-[#1a1a1a] to-[#4a4a4a] rounded-sm py-16 px-8 md:px-12 shadow-md text-white">
          <h2 className="text-2xl md:text-[28px] font-semibold mb-10 tracking-wide">Prospek Kerja</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 flex flex-col shadow-sm hover:bg-white/20 transition-all">
              <h3 className="font-bold text-white text-[17px] md:text-xl mb-3">Graphic Designer</h3>
              <p className="text-white/80 text-[13px] md:text-sm leading-relaxed">Merancang identitas visual, logo, dan materi promosi kreatif.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 flex flex-col shadow-sm hover:bg-white/20 transition-all">
              <h3 className="font-bold text-white text-[17px] md:text-xl mb-3">Photographer</h3>
              <p className="text-white/80 text-[13px] md:text-sm leading-relaxed">Menangkap momen dan menciptakan visual berkualitas tinggi.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 flex flex-col shadow-sm hover:bg-white/20 transition-all">
              <h3 className="font-bold text-white text-[17px] md:text-xl mb-3">Videographer</h3>
              <p className="text-white/80 text-[13px] md:text-sm leading-relaxed">Memproduksi dan menyunting konten video untuk berbagai media.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 flex flex-col shadow-sm hover:bg-white/20 transition-all">
              <h3 className="font-bold text-white text-[17px] md:text-xl mb-3">Illustrator</h3>
              <p className="text-white/80 text-[13px] md:text-sm leading-relaxed">Menciptakan karya seni visual unik untuk buku, web, dan media digital.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default JurusanDkv;
