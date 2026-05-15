import React from 'react';

const About = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section of About */}
      <section id="about" className="relative min-h-screen w-full flex items-center bg-gradient-to-br from-[#779cb5] to-[#cedce6] overflow-hidden py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8 md:px-16 w-full flex flex-col lg:flex-row items-center gap-16 relative z-10">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start reveal">
            {/* Badge */}
            <div className="bg-[#e4effc] text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 shadow-sm animate-fade-in delay-300">
              Established 1995
            </div>

            {/* Heading */}
            <div className="mb-6 flex flex-col items-start animate-slide-right">
              <h2 className="text-5xl md:text-6xl md:text-[4.5rem] font-bold text-white mb-2 leading-tight">
                Kami siap
              </h2>
              <div className="bg-[#b33a3a] px-4 py-2 inline-block">
                <h2 className="text-5xl md:text-6xl md:text-[4.5rem] font-bold text-white leading-none">
                  Menempah
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/90 text-lg leading-relaxed max-w-lg mb-12 animate-fade-up delay-500">
              SMKN 6 Jember has been at the forefront of vocational education for nearly three decades, shaping the future of Indonesia's industrial workforce through rigorous training and academic integrity.
            </p>

            {/* Stats Cards */}
            <div className="flex flex-wrap gap-4 w-full">
              <div className="bg-white rounded-2xl p-6 flex-1 min-w-[120px] flex flex-col items-center justify-center shadow-lg hover-lift animate-scale delay-700">
                <h3 className="text-3xl font-bold text-slate-800 mb-1">30+</h3>
                <p className="text-slate-500 text-xs text-center font-medium">Tahun pengalaman</p>
              </div>
              <div className="bg-white rounded-2xl p-6 flex-1 min-w-[120px] flex flex-col items-center justify-center shadow-lg hover-lift animate-scale delay-[800ms]">
                <h3 className="text-3xl font-bold text-slate-800 mb-1">5k+</h3>
                <p className="text-slate-500 text-xs text-center font-medium">Alumni Sukses</p>
              </div>
              <div className="bg-white rounded-2xl p-6 flex-1 min-w-[120px] flex flex-col items-center justify-center shadow-lg hover-lift animate-scale delay-[900ms]">
                <h3 className="text-3xl font-bold text-slate-800 mb-1">A+</h3>
                <p className="text-slate-500 text-xs text-center font-medium">Akreditasi</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="w-full lg:w-1/2 relative animate-fade-in delay-500">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/20 hover-scale duration-500">
              {/* Placeholder Image for the building */}
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80" 
                alt="Gedung SMKN 6 Jember" 
                className="w-full h-auto object-cover aspect-[4/3] animate-float"
              />
              {/* Soft overlay if needed */}
              <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>
            </div>
            
            {/* Decorative blur behind image */}
            <div className="absolute -inset-4 bg-white/20 blur-2xl -z-10 rounded-full"></div>
          </div>

        </div>
      </section>

      {/* Visi & Misi Section */}
      <section className="w-full py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col gap-24 md:gap-32">
          
          {/* Visi */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 reveal">
            {/* Visi Text */}
            <div className="w-full md:w-1/2 flex flex-col items-start px-4 md:px-0 reveal delay-100">
              <h3 className="text-4xl md:text-[2.5rem] font-bold text-gray-900 mb-6 tracking-tight">Visi</h3>
              <p className="text-gray-700 leading-relaxed text-[15px] md:text-base font-medium">
                Menjadi lembaga pendidikan menengah yang bereputasi di tingkat internasional dengan tetap menjunjung tinggi budaya nasional untuk menghasilkan calon pemimpin bangsa yang beriman, cerdas, kreatif, mandiri, dan berwawasan kedirgantaraan.
              </p>
            </div>
            {/* Visi Image */}
            <div className="w-full md:w-5/12 flex justify-center md:justify-end reveal delay-300">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80" 
                alt="Siswa Belajar dengan Laptop" 
                className="w-full max-w-[350px] aspect-[4/5] object-cover rounded-[2rem] shadow-lg hover-scale transition-transform duration-500"
              />
            </div>
          </div>

          {/* Misi */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 md:gap-16 reveal">
            {/* Misi Text */}
            <div className="w-full md:w-1/2 flex flex-col items-start px-4 md:px-0 reveal delay-100">
              <h3 className="text-4xl md:text-[2.5rem] font-bold text-gray-900 mb-6 tracking-tight">Misi</h3>
              <p className="text-gray-700 leading-relaxed text-[15px] md:text-base font-medium">
                Menjadi lembaga pendidikan menengah yang bereputasi di tingkat internasional dengan tetap menjunjung tinggi budaya nasional untuk menghasilkan calon pemimpin bangsa yang beriman, cerdas, kreatif, mandiri, dan berwawasan kedirgantaraan.
              </p>
            </div>
            {/* Misi Image */}
            <div className="w-full md:w-5/12 flex justify-center md:justify-start reveal delay-300">
              <img 
                src="https://images.unsplash.com/photo-1523580494112-071d4581563e?auto=format&fit=crop&w=600&q=80" 
                alt="Siswa Menerima Penghargaan" 
                className="w-full max-w-[350px] aspect-[4/5] object-cover rounded-[2rem] shadow-lg hover-scale transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </section>
      {/* Quote Section (Waka Kesiswaan) */}
      <section className="relative w-full h-[400px] md:h-[450px] overflow-hidden flex items-center mt-12">
        {/* Background Image with Blue Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1500&q=80')" }}
        >
          <div className="absolute inset-0 bg-[#547e9e]/80 backdrop-saturate-150 mix-blend-multiply"></div>
          {/* A gradient to match the screenshot's soft light */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 md:px-16 w-full relative z-10 flex flex-col md:flex-row items-center justify-between h-full">
          {/* Quote Text */}
          <div className="w-full md:w-3/5 text-white pr-4">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight flex items-start gap-4">
              <span className="text-5xl md:text-7xl opacity-50 font-serif leading-none mt-2">"</span>
              Menjadi sesuatu yang berguna tentu dimulai dari niat dan usaha
              <span className="text-5xl md:text-7xl opacity-50 font-serif leading-none mt-2">"</span>
            </h2>
          </div>

          {/* Person Image & Name */}
          <div className="w-full md:w-2/5 h-full relative flex justify-end items-end">
            {/* The person's cutout image. Ganti URL ini dengan path ke file PNG transparan Anda */}
            <div className="relative w-64 md:w-[350px] h-[110%] flex items-end justify-center">
              
              {/* PLACEHOLDER: Ini adalah foto sementara karena file PNG asli Ibu Erni belum di-upload. */}
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" 
                alt="Waka Kesiswaan Placeholder" 
                className="w-[80%] h-[90%] object-cover object-top rounded-2xl shadow-2xl"
              />

              <div className="absolute bottom-6 md:bottom-12 -left-4 md:-left-16 text-white drop-shadow-md z-20">
                <p className="text-sm md:text-base font-medium opacity-90">Waka kesiswaan</p>
                <p className="text-lg md:text-xl font-bold">Erni Sumarliah, S.Pd.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prestasi Section */}
      <section className="w-full py-20 bg-[#8baec5] flex flex-col items-center relative overflow-hidden reveal">
        {/* Section Title */}
        <div className="bg-[#da2929] px-8 py-2 mb-16 shadow-lg z-10 animate-fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">Prestasi</h2>
        </div>

        {/* Carousel Container */}
        <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-center gap-6 relative z-10">
          
          {/* Left Arrow */}
          <button className="hidden md:flex w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg hover:bg-gray-50 transition-colors z-20 shrink-0">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards Wrapper */}
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x hide-scrollbar reveal delay-200">
            
            {/* Card 1 */}
            <div className="w-[300px] md:w-[320px] bg-white rounded-xl overflow-hidden shadow-xl shrink-0 snap-center flex flex-col hover-lift">
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80" alt="Prestasi 1" className="w-full h-56 object-cover" />
              <div className="p-6 flex flex-col grow">
                <h4 className="font-bold text-slate-800 text-[15px] mb-3 leading-snug">Rapat Antar Sekola SMK Se-Indonesia</h4>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  Smamda.sch.id — SMA Muhammadiyah 2 (SMAMDA) Sidoarjo menggelar Rapat Kelulusan Murid Kelas X...alu Untuk Rapat Klulusan ini di dasari oleh...
                </p>
                <div className="mt-auto">
                  <button className="bg-[#da2929] hover:bg-red-700 text-white text-xs font-semibold px-5 py-2 rounded-full transition-colors">
                    Lihat selengkap nya
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-[300px] md:w-[320px] bg-white rounded-xl overflow-hidden shadow-xl shrink-0 snap-center flex flex-col hover-lift delay-100">
              <img src="https://images.unsplash.com/photo-1546410531-bea5aad104ea?auto=format&fit=crop&w=600&q=80" alt="Prestasi 2" className="w-full h-56 object-cover" />
              <div className="p-6 flex flex-col grow">
                <h4 className="font-bold text-slate-800 text-[15px] mb-3 leading-snug">Rapat Antar Sekola SMK Se-Indonesia</h4>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  Smamda.sch.id — SMA Muhammadiyah 2 (SMAMDA) Sidoarjo menggelar Rapat Kelulusan Murid Kelas X...alu Untuk Rapat Klulusan ini di dasari oleh...
                </p>
                <div className="mt-auto">
                  <button className="bg-[#da2929] hover:bg-red-700 text-white text-xs font-semibold px-5 py-2 rounded-full transition-colors">
                    Lihat selengkap nya
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-[300px] md:w-[320px] bg-white rounded-xl overflow-hidden shadow-xl shrink-0 snap-center flex flex-col hover-lift delay-200">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" alt="Prestasi 3" className="w-full h-56 object-cover" />
              <div className="p-6 flex flex-col grow">
                <h4 className="font-bold text-slate-800 text-[15px] mb-3 leading-snug">Rapat Antar Sekola SMK Se-Indonesia</h4>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  Smamda.sch.id — SMA Muhammadiyah 2 (SMAMDA) Sidoarjo menggelar Rapat Kelulusan Murid Kelas X...alu Untuk Rapat Klulusan ini di dasari oleh...
                </p>
                <div className="mt-auto">
                  <button className="bg-[#da2929] hover:bg-red-700 text-white text-xs font-semibold px-5 py-2 rounded-full transition-colors">
                    Lihat selengkap nya
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button className="hidden md:flex w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg hover:bg-gray-50 transition-colors z-20 shrink-0">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
        </div>

        {/* Carousel Indicators */}
        <div className="flex gap-2 mt-8 z-10">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white/60"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white/60"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white/60"></div>
        </div>

      </section>

      {/* Staf Pengajar dan Management Section */}
      <section className="w-full bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Section Title */}
          <div className="flex justify-center items-center gap-2 mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-wide">Staf Pengajar dan</h2>
            <div className="bg-[#b33a3a] px-3 py-1 rounded shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">Management</h2>
            </div>
          </div>

          {/* Grid of Staff */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 reveal">
            {/* Array of staff mapped manually to match the exact order and placeholders */}
            {[
              "Pokja PKL", "Waka Humas", "Waka Kesiswaan",
              "Waka PSDM", "Waka Sarpras", "Pokja BKK",
              "Manajement Bank mini", "Manajement Kosmeta", "Pokja Matematika",
              "Pokja IPAS", "Pokja B.Ing", "Pokja B.Ind",
              "Pokja Produktif", "Pokja PKN", "Pokja B.Jawa"
            ].map((role, index) => (
              <div key={index} className={`relative w-full aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden shadow-lg group reveal delay-[${(index % 3) * 100}ms]`}>
                {/* Image Placeholder (You can replace src with real images later) */}
                <img 
                  src={`https://images.unsplash.com/photo-${1500000000000 + index * 10000}?auto=format&fit=crop&w=400&q=80`} 
                  alt={role} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 bg-gray-200"
                  onError={(e) => {
                    // Fallback to a random portrait if the specific ID fails
                    e.target.src = "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80";
                  }}
                />
                
                {/* Dark Gradient Overlay for Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="p-4 md:p-5 w-full">
                    <h3 className="text-white font-bold text-sm md:text-base leading-tight drop-shadow-md">
                      {role}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
