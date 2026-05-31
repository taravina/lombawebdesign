import React, { useRef, useState, useEffect } from 'react';
const About = () => {
  const [activeDot, setActiveDot] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Drag to scroll state
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeftPos(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const scrollLeft = () => {
    setActiveDot((prev) => (prev - 1 + 3) % 3);
  };

  const scrollRight = () => {
    setActiveDot((prev) => (prev + 1) % 3);
  };

  const scrollToCard = (index) => {
    setActiveDot(index);
  };



  return (
    <div className="w-full bg-white">
      {/* Hero Section of About */}
      <section id="about" className="relative min-h-screen w-full flex items-center bg-gradient-to-br from-[#779cb5] to-[#cedce6] overflow-hidden py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8 md:px-16 w-full flex flex-col lg:flex-row items-center gap-16 relative z-10">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start reveal">
            {/* Badge */}
            {/* <div className="bg-[#e4effc] text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 shadow-sm animate-fade-in delay-300">
              Established 1995
            </div> */}

            {/* Heading */}
            <div className="mb-6 flex flex-col items-start animate-slide-right">
              <h2 className="text-5xl md:text-6xl md:text-[4.5rem] font-bold text-white mb-2 leading-tight">
                Kami siap
              </h2>
              <div className="bg-blue-600 px-4 py-2 inline-block">
                <h2 className="text-5xl md:text-6xl md:text-[4.5rem] font-bold text-white leading-none">
                  Menempa
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/90 text-lg leading-relaxed max-w-lg mb-12 animate-fade-up delay-500">
              SMKN 6 Jember telah berada di garis depan pendidikan vokasi selama hampir tiga dekade, membentuk masa depan tenaga kerja industri Indonesia melalui pelatihan disiplin dan integritas akademik.
            </p>

            {/* Stats Cards */}
            <div className="flex flex-wrap gap-4 w-full">
              
              
              
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="w-full lg:w-1/2 relative animate-fade-in delay-500">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/20 hover-scale duration-500">
              {/* Placeholder Image for the building */}
              <img 
                src="smea.jpeg" 
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
                src="jakakoding 1.png" 
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
                src="fashion_show.png" 
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
              {/* <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" 
                alt="Waka Kesiswaan Placeholder" 
                className="w-[80%] h-[90%] object-cover object-top rounded-2xl shadow-2xl"
              /> */}
            </div>

          </div>
        </div>
      </section>

      {/* Prestasi Section */}
      <section className="w-full py-20 bg-[#8baec5] flex flex-col items-center relative overflow-hidden reveal">
        {/* Section Title */}
        <div className="bg-blue-600 px-8 py-2 mb-16 shadow-lg z-10 animate-fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">Prestasi</h2>
        </div>

        {/* Carousel Container */}
        <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-center gap-6 relative z-10">
          
          {/* Left Arrow */}
          {/* <button 
            onClick={scrollLeft}
            className="hidden md:flex w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg hover:bg-gray-50 active:scale-95 transition-all z-20 shrink-0 cursor-pointer"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button> */}

          {/* Cards Wrapper */}
          <div 
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={() => { setIsHovered(false); handleMouseLeave(); }}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            className="flex gap-6 overflow-x-auto pb-8 snap-x hide-scrollbar reveal delay-200 scroll-smooth cursor-grab active:cursor-grabbing select-none"
          >
            
            {/* Card 1 */}
            <div className="w-[300px] md:w-[320px] bg-white rounded-xl overflow-hidden shadow-xl shrink-0 snap-center flex flex-col hover-lift">
              <img src="Mask group.png" alt="Prestasi 1" className="w-full h-56 object-cover pointer-events-none" />
              <div className="p-6 flex flex-col grow">
                <h4 className="font-bold text-slate-800 text-[15px] mb-3 leading-snug">Juara 1 LKS Akuntansi</h4>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  Kontingen SMKN 6 Jember berhasil meraih Juara 1 Lomba Kompetensi Siswa (LKS) Dikmen 2026 bidang Akuntansi tingkat Provinsi Jawa Timur. Prestasi ini menjadi bukti kompetensi siswa dalam bidang akuntansi dan keuangan serta mampu bersaing di tingkat provinsi.
                </p>
                <div className="mt-auto">
                  {/* <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2 rounded-full transition-colors cursor-pointer">
                    Lihat selengkap nya
                  </button> */}
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-[300px] md:w-[320px] bg-white rounded-xl overflow-hidden shadow-xl shrink-0 snap-center flex flex-col hover-lift delay-75">
              <img src="Mask group2.png" alt="Prestasi 2" className="w-full h-56 object-cover pointer-events-none" />
              <div className="p-6 flex flex-col grow">
                <h4 className="font-bold text-slate-800 text-[15px] mb-3 leading-snug">Juara 2 Web Programming</h4>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  Tim Alpha dari jurusan Rekayasa Perangkat Lunak SMKN 6 Jember berhasil meraih Juara 2 Lomba Web Programming dalam rangka Dies Natalis JTI. Pencapaian ini menunjukkan kemampuan siswa dalam pengembangan web, pemecahan masalah, dan kerja sama tim yang baik.
                </p>
                <div className="mt-auto">
                  {/* <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2 rounded-full transition-colors cursor-pointer">
                    Lihat selengkap nya
                  </button> */}
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-[300px] md:w-[320px] bg-white rounded-xl overflow-hidden shadow-xl shrink-0 snap-center flex flex-col hover-lift delay-150">
              <img src="Mask group3.png" alt="Prestasi 3" className="w-full h-56 object-cover pointer-events-none" />
              <div className="p-6 flex flex-col grow">
                <h4 className="font-bold text-slate-800 text-[15px] mb-3 leading-snug">Prestasi Gemilang SMKN 6 Jember</h4>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                 Siswa SMKN 6 Jember berhasil meraih berbagai prestasi dengan memperoleh Juara 1, Juara 2, dan Juara 3 pada sejumlah kompetisi. Keberhasilan ini menjadi bukti semangat, dedikasi, dan kualitas pendidikan yang terus dikembangkan di lingkungan sekolah.
                </p>
                <div className="mt-auto">
                  {/* <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2 rounded-full transition-colors cursor-pointer">
                    Lihat selengkap nya
                  </button> */}
                </div>
              </div>
            </div>

          </div>

          {/* Right Arrow */}
          {/* <button 
            onClick={scrollRight}
            className="hidden md:flex w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg hover:bg-gray-50 active:scale-95 transition-all z-20 shrink-0 cursor-pointer"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button> */}
          
        </div>

        {/* Carousel Indicators */}
        {/* <div className="flex gap-2 mt-8 z-10">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeDot === index ? 'bg-slate-800 scale-125' : 'bg-white/60 hover:bg-white/95'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}

      </section>



    </div>
  );
};

export default About;
