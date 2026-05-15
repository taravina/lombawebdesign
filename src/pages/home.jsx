import React from 'react';
import { Link } from '../router';

const Home = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const audioRef = React.useRef(null);

  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const m = Math.floor(time / 60).toString().padStart(2, '0');
    const s = Math.floor(time % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const togglePlayPause = () => {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    if (nextIsPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    const dur = audioRef.current.duration;
    setCurrentTime(current);
    setProgress((current / dur) * 100 || 0);
  };

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  };

  const handleSeek = (e) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = (clickX / rect.width);
    audioRef.current.currentTime = newProgress * duration;
    setProgress(newProgress * 100);
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center px-8 md:px-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
          style={{ backgroundImage: "url('/fotodepansmk.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-brightness-75"></div>
        </div>

        {/* Decorative Shapes */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            SMKN 6 Jember – <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              Sekolah Vokasi Siap Kerja & Berprestasi
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl font-light">
            Membentuk tenaga profesional unggul dengan integritas tinggi dan keahlian industri masa depan melalui pendidikan vokasi berkualitas dunia.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/30">
              Daftar PPDB
            </button>
            <a 
              href="#kompetensi-keahlian"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all border border-white/30 backdrop-blur-md hover:scale-105 active:scale-95 inline-block"
            >
              Lihat Jurusan
            </a>
          </div>

        </div>

        {/* Floating Indicator (Optional but nice) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <div className="w-1 h-8 rounded-full bg-white/50"></div>
        </div>
      </section>

      {/* Sambutan & Info Section */}
      <section className="bg-white relative w-full overflow-hidden pt-20">
        
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10 flex flex-col">
          
          {/* Top Content: Headmaster and Text */}
          <div className="flex flex-col lg:flex-row justify-between mb-0">
            
            {/* Left side: Image & Name */}
            <div className="lg:w-5/12 relative flex justify-center lg:justify-start pt-8 md:pl-8">
              <div className="relative">
                {/* Replace with actual transparent image of the headmaster */}
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" 
                  alt="Kepala Sekolah" 
                  className="w-64 md:w-[320px] h-auto object-cover rounded-xl"
                />
                
                {/* Name Plate */}
                <div className="absolute top-[40%] right-[-1rem] md:right-[-4rem] translate-x-full whitespace-nowrap hidden md:block">
                  <h4 className="font-bold text-gray-800 text-sm">Kepala Sekolah</h4>
                  <p className="text-gray-700 text-xs">Evi Silviana, S.Pd., M.M.</p>
                </div>

              </div>
              {/* SMK BISA, SMK HEBAT Box */}
              {/* This box is placed overlapping the left edge of the screen in the design */}
              <div className="absolute bottom-8 -left-6 md:-left-24 bg-[#82abc9] text-white font-bold py-4 px-8 md:pr-12 md:pl-24 rounded-r-[2rem] border-b-[6px] border-[#8a2c2c] shadow-md text-lg md:text-xl whitespace-nowrap z-20 tracking-wide">
                SMK BISA, SMK HEBAT
              </div>
            </div>

            {/* Right side: Welcome Text */}
            <div className="lg:w-6/12 mt-20 lg:mt-12">
              <div className="inline-block mb-6">
                <h2 className="text-2xl md:text-[1.75rem] font-bold text-gray-900 mb-2">
                  Sambutan Kepala Sekolah
                </h2>
                <div className="w-full h-[2px] bg-red-100 flex">
                   <div className="w-24 h-full bg-red-500"></div>
                </div>
              </div>
              
              <div className="text-gray-700 leading-[1.8] space-y-6 text-[15px] md:text-base pr-0 md:pr-8">
                <p>
                  Selamat datang di Website SMK Negeri 6. Kami berkomitmen untuk melahirkan generasi yang tidak hanya kompeten secara teknis, tetapi juga memiliki karakter unggul dan daya saing global. Melalui sinergi bersama mitra industri, kami memastikan setiap siswa siap untuk Bekerja, Melanjutkan, atau Berwirausaha.
                </p>
                <p>
                  Mari bersama-sama mengukir prestasi dan mewujudkan masa depan gemilang bagi bangsa. SMK Bisa, SMK Hebat!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Arc Background Container */}
        <div className="relative w-full h-[400px] md:h-[450px] -mt-16 md:-mt-32 lg:-mt-48 overflow-hidden z-0">
          {/* The Arc */}
          <div className="absolute w-[200%] md:w-[130%] h-[1000px] bg-[#eef5ff] rounded-[50%] left-1/2 -translate-x-1/2 top-[80px] md:top-[120px] lg:top-[160px] border-t-[1.5px] border-[#b4d2f0] z-0"></div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10 h-full flex flex-col">
            {/* Logos Section */}
            <div className="w-full flex flex-wrap justify-center lg:justify-end gap-4 md:gap-6 pt-2 lg:pt-8 pr-0 lg:pr-12">
              <img src="/Kurikulum_Merdeka.png" alt="Kurikulum Merdeka" className="h-10 md:h-12 object-contain" />
              <img src="/tefa.png" alt="TEFA" className="h-10 md:h-14 object-contain" />
              <img src="/BLUD.png" alt="BLUD" className="h-10 md:h-12 object-contain" />
              <img src="/ENERGI.png" alt="Energi" className="h-10 md:h-12 object-contain" />
              <img src="/SMK BISA SMK HEBAT.png" alt="SMK Bisa Hebat" className="h-10 md:h-12 object-contain" />
            </div>

            {/* Stats Section */}
            <div className="flex flex-col md:flex-row justify-around items-center text-center gap-12 mt-16 md:mt-24 lg:mt-32 pb-8">
              <div>
                <h3 className="text-4xl md:text-5xl font-[800] text-gray-800 mb-2">1.000 +</h3>
                <p className="text-gray-700 font-bold md:text-lg">Pelajar Aktif</p>
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-[800] text-gray-800 mb-2">1.000.000 +</h3>
                <p className="text-gray-700 font-bold md:text-lg">Alumni</p>
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-[800] text-gray-800 mb-2">95%</h3>
                <p className="text-gray-700 font-bold md:text-lg">Rating Kesuksesan</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Berita Section */}
      <section className="relative w-full py-20 md:py-28 overflow-hidden mt-8 md:mt-0">
        {/* Background Image with Blue-Slate Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/fotodepansmk.jpg')" }}
        >
          {/* Overlay to match the design's muted blue/slate color */}
          <div className="absolute inset-0 bg-[#5b7a95]/90 backdrop-blur-[2px] mix-blend-multiply"></div>
          {/* Base color fallback */}
          <div className="absolute inset-0 bg-[#658ba8]/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 md:mb-16 tracking-wide drop-shadow-md">
            Berita
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-[#f4f6f8] rounded-3xl overflow-hidden shadow-2xl flex flex-col transform transition-transform hover:-translate-y-2 duration-300">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80" alt="Berita 1" className="w-full h-48 md:h-56 object-cover" />
              <div className="p-6 md:p-8 flex flex-col grow">
                <div className="flex items-center gap-2 text-[#9aa7b5] text-[11px] md:text-xs font-medium mb-3">
                  <span>12-11-2090</span>
                  <span className="w-px h-3 bg-[#9aa7b5]"></span>
                  <span>Nur Haliza</span>
                </div>
                <h3 className="font-bold text-slate-800 text-[15px] mb-3 leading-snug">Rapat Antar Sekola SMK Se-Indonesia</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-6 line-clamp-5">
                  Smamda.sch.id — SMA Muhammadiyah 2 (SMAMDA) Sidoarjo menggelar Rapat Kelulusan Murid Kelas X...alu Untuk Rapat Klulusan ini di dasari oleh munculnya isu yang beredar di masyarakat indonesiaa khususny di daerah sekitar wilayaah indonesia...
                </p>
                <div className="mt-auto">
                  <button className="bg-[#e4ebf1] hover:bg-[#d0dbe5] text-slate-600 text-[11px] font-bold px-5 py-2 rounded-full transition-colors tracking-wide">
                    Lihat selengkap nya
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#f4f6f8] rounded-3xl overflow-hidden shadow-2xl flex flex-col transform transition-transform hover:-translate-y-2 duration-300">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" alt="Berita 2" className="w-full h-48 md:h-56 object-cover" />
              <div className="p-6 md:p-8 flex flex-col grow">
                <div className="flex items-center gap-2 text-[#9aa7b5] text-[11px] md:text-xs font-medium mb-3">
                  <span>12-11-2090</span>
                  <span className="w-px h-3 bg-[#9aa7b5]"></span>
                  <span>Nur Haliza</span>
                </div>
                <h3 className="font-bold text-slate-800 text-[15px] mb-3 leading-snug">Rapat Antar Sekola SMK Se-Indonesia</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-6 line-clamp-5">
                  Smamda.sch.id — SMA Muhammadiyah 2 (SMAMDA) Sidoarjo menggelar Rapat Kelulusan Murid Kelas X...alu Untuk Rapat Klulusan ini di dasari oleh munculnya isu yang beredar di masyarakat indonesiaa khususny di daerah sekitar wilayaah indonesia...
                </p>
                <div className="mt-auto">
                  <button className="bg-[#e4ebf1] hover:bg-[#d0dbe5] text-slate-600 text-[11px] font-bold px-5 py-2 rounded-full transition-colors tracking-wide">
                    Lihat selengkap nya
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#f4f6f8] rounded-3xl overflow-hidden shadow-2xl flex flex-col transform transition-transform hover:-translate-y-2 duration-300">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80" alt="Berita 3" className="w-full h-48 md:h-56 object-cover" />
              <div className="p-6 md:p-8 flex flex-col grow">
                <div className="flex items-center gap-2 text-[#9aa7b5] text-[11px] md:text-xs font-medium mb-3">
                  <span>12-11-2090</span>
                  <span className="w-px h-3 bg-[#9aa7b5]"></span>
                  <span>Nur Haliza</span>
                </div>
                <h3 className="font-bold text-slate-800 text-[15px] mb-3 leading-snug">Rapat Antar Sekola SMK Se-Indonesia</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-6 line-clamp-5">
                  Smamda.sch.id — SMA Muhammadiyah 2 (SMAMDA) Sidoarjo menggelar Rapat Kelulusan Murid Kelas X...alu Untuk Rapat Klulusan ini di dasari oleh munculnya isu yang beredar di masyarakat indonesiaa khususny di daerah sekitar wilayaah indonesia...
                </p>
                <div className="mt-auto">
                  <button className="bg-[#e4ebf1] hover:bg-[#d0dbe5] text-slate-600 text-[11px] font-bold px-5 py-2 rounded-full transition-colors tracking-wide">
                    Lihat selengkap nya
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Kompetensi Keahlian Section */}
      <section id="kompetensi-keahlian" className="relative w-full py-24 bg-[#f4f9ff] overflow-hidden">

        {/* Decorative Background Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[400px] bg-[#e6f0fa] rounded-b-[50%] z-0"></div>
        <div className="absolute top-48 -left-20 w-80 h-80 bg-[#e6f0fa] rounded-full z-0"></div>
        <div className="absolute top-96 -right-20 w-96 h-96 bg-[#e6f0fa] rounded-full z-0"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[300px] bg-[#e6f0fa] rounded-t-[50%] z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          
          {/* Section Title */}
          <div className="flex justify-center items-center gap-2 mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-slate-900 tracking-tight">Kompetensi</h2>
            <div className="bg-[#db3232] px-4 py-1.5 shadow-sm">
              <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-white tracking-tight">Keahlian</h2>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 justify-items-center mb-24">
            {/* Bisnis Digital */}
            <Link to="/jurusan-bd">
              <img 
                src="/bdcard.png" 
                alt="Bisnis Digital" 
                className="w-72 md:w-80 object-contain rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] transform transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300"
              />
            </Link>
            {/* DKV */}
            <Link to="/jurusan-dkv">
              <img 
                src="/dkvcard.png" 
                alt="Desain Komunikasi Visual" 
                className="w-72 md:w-80 object-contain rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] transform transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300"
              />
            </Link>
            {/* RPL */}
            <Link to="/jurusan-rpl">
              <img 
                src="/rplcard.png" 
                alt="Rekayasa Perangkat Lunak" 
                className="w-72 md:w-80 object-contain rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] transform transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300"
              />
            </Link>
            {/* KKBT */}
            <Link to="/jurusan-kriya">
              <img 
                src="/kkbtcard.png" 
                alt="Kriya Kreatif Batik Dan Tekstil" 
                className="w-72 md:w-80 object-contain rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] transform transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300"
              />
            </Link>
            {/* Akuntansi */}
            <Link to="/jurusan-akl">
              <img 
                src="/aklcard.png" 
                alt="Akuntansi" 
                className="w-72 md:w-80 object-contain rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] transform transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300"
              />
            </Link>
            {/* Manajemen Perkantoran */}
            <Link to="/jurusan-mp">
              <img 
                src="/mpcard.png" 
                alt="Manajemen Perkantoran" 
                className="w-72 md:w-80 object-contain rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] transform transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300"
              />
            </Link>
          </div>


          {/* Kegiatan Siswa Title */}
          <div className="flex justify-center mt-12 pb-8">
            <div className="bg-[#8ca0b9] px-6 py-2 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">Kegiatan Siswa</h2>
            </div>
          </div>

        </div>
      </section>

      {/* Kegiatan Siswa Grid (Full Width, No Gaps) */}
      <section className="w-full relative">
        <div className="grid grid-cols-2 md:grid-cols-3">
          <img src="/foto1ks.png" alt="Kegiatan Siswa 1" className="w-full aspect-[4/3] object-cover hover:opacity-90 transition-opacity cursor-pointer" />
          <img src="/foto2ks.png" alt="Kegiatan Siswa 2" className="w-full aspect-[4/3] object-cover hover:opacity-90 transition-opacity cursor-pointer" />
          <img src="/foto3ks.png" alt="Kegiatan Siswa 3" className="w-full aspect-[4/3] object-cover hover:opacity-90 transition-opacity cursor-pointer" />
          <img src="/foto4ks.png" alt="Kegiatan Siswa 4" className="w-full aspect-[4/3] object-cover hover:opacity-90 transition-opacity cursor-pointer" />
          <img src="/foto5ks.png" alt="Kegiatan Siswa 5" className="w-full aspect-[4/3] object-cover hover:opacity-90 transition-opacity cursor-pointer" />
          <img src="/foto6ks.png" alt="Kegiatan Siswa 6" className="w-full aspect-[4/3] object-cover hover:opacity-90 transition-opacity cursor-pointer" />
          <img src="/foto7ks.png" alt="Kegiatan Siswa 7" className="w-full aspect-[4/3] object-cover hover:opacity-90 transition-opacity cursor-pointer" />
          <img src="/foto8ks.png" alt="Kegiatan Siswa 8" className="w-full aspect-[4/3] object-cover hover:opacity-90 transition-opacity cursor-pointer" />
          <img src="/foto9ks.png" alt="Kegiatan Siswa 9" className="w-full aspect-[4/3] object-cover hover:opacity-90 transition-opacity cursor-pointer" />
        </div>
        
        {/* Dark Gradient Overlay over the entire grid */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80 pointer-events-none"></div>
      </section>

      {/* Kerjasama Banner */}
      <div className="w-full bg-[#82abc9] py-3 md:py-4 flex justify-center shadow-md relative z-10">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">Kerjasama SMKN 6 JEMBER</h2>
      </div>

      {/* Kerjasama Content */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-10 lg:gap-16">
          
          {/* Left: Featured Image */}
          <div className="w-full lg:w-[65%] relative rounded-2xl overflow-hidden shadow-xl group">
            <img 
              src="/kerjasama.png" 
              alt="Kerjasama PT UBIG" 
              className="w-full h-full min-h-[350px] md:min-h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            
            {/* Dark Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end">
              <div className="p-6 md:p-10 border-l-4 border-white ml-6 md:ml-10 mb-6 md:mb-10">
                <h3 className="text-white text-xl md:text-2xl lg:text-[1.7rem] font-bold leading-snug max-w-2xl drop-shadow-lg">
                  Demi meningkatkan kualitas para siswa agar sesuai dengan keperluan industri, SMKN 6 Jember bekerja sama dengan PT.Ubig
                </h3>
              </div>
            </div>
          </div>

          {/* Right: List Items */}
          <div className="w-full lg:w-[35%] flex flex-col gap-10 justify-center">
            
            {/* Item 1 */}
            <div className="flex flex-col gap-2 group cursor-pointer">
              <span className="text-sm text-gray-500 font-medium">Jumat, 13 Mei 2026</span>
              <h4 className="font-bold text-slate-800 text-lg leading-snug group-hover:text-blue-600 transition-colors">
                Sinergi Ekosistem Pendidikan di Kabupaten Jember...
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Jember - Ada pemandangan inspirti dalam proses belajar - mengajar di SMK 6 Jember...
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col gap-2 group cursor-pointer">
              <span className="text-sm text-gray-500 font-medium">Jumat, 13 Mei 2026</span>
              <h4 className="font-bold text-slate-800 text-lg leading-snug group-hover:text-blue-600 transition-colors">
                Dalam rangka untuk menjalin hubungan internasional SMK N 6 jember bekerjasama dengan...
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Jember - Ada pemandangan inspirti dalam proses belajar - mengajar di SMK 6 Jember...
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Latest Update Section */}
      <section className="w-full bg-[#f8fafc] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          
          {/* Title */}
          <div className="flex justify-center mb-16">
            <div className="bg-[#82abc9] px-8 py-2 rounded shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">Latest Update</h2>
            </div>
          </div>
          
          {/* Grid of Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 justify-items-center">
            
            {/* Card 1: Music Player */}
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl transform transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300 group bg-slate-900">
              
              {/* Blurred Background */}
              <div className="absolute inset-0">
                <img 
                  src="/foto1lu.png" 
                  alt="Background Blur" 
                  className="w-full h-full object-cover opacity-70 blur-xl scale-[1.15]"
                />
              </div>

              {/* Main Content Container (Absolute Positioning for exact fit) */}
              <div className="absolute inset-0 z-10">
                
                {/* Top Half: Album Art (Takes upper 55% of the card) */}
                <div className="absolute top-0 left-0 w-full h-[55%] flex items-center justify-center pt-6 md:pt-8">
                  <img 
                    src="/foto1lu.png" 
                    alt="Lagu Mars SMKN 6 Jember" 
                    className="h-[85%] md:h-[90%] aspect-square object-cover rounded-[1.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                  />
                </div>

                {/* Bottom Half: Text & Player Controls (Takes lower 50% of the card to allow smooth gradient overlap) */}
                <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#121212] via-[#1c1c1c]/95 to-transparent px-6 md:px-8 pb-6 md:pb-8 flex flex-col justify-end">
                  
                  {/* Song Info */}
                  <div className="mb-4">
                    <h3 className="text-white font-bold text-[15px] md:text-[16px] leading-tight drop-shadow-md">Mars SMKN 6 Jember</h3>
                    <p className="text-[#c0c0c0] text-[13px] drop-shadow-md mt-0.5">Ivana Dwi N.</p>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4 md:mb-5">
                    <div className="text-[11px] text-[#a0a0a0] mb-2 tracking-wide font-medium">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                    <div 
                      className="w-full h-[3px] bg-[#4a4a4a] rounded-full relative cursor-pointer"
                      onClick={handleSeek}
                    >
                      <div 
                        className="h-full bg-white rounded-full relative"
                        style={{ width: `${progress}%` }}
                      >
                         {/* Handle */}
                         <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-md pointer-events-none"></div>
                      </div>
                    </div>
                  </div>

                  {/* Playback Controls */}
                  <div className="flex justify-center items-center gap-10 md:gap-12 mt-1">
                    <button className="text-white hover:text-gray-300 transition-colors">
                      {/* Previous Icon */}
                      <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
                    </button>
                    <button 
                      className="text-white hover:scale-110 transition-transform focus:outline-none"
                      onClick={togglePlayPause}
                    >
                      {/* Play/Pause Icon */}
                      {isPlaying ? (
                        <svg className="w-10 h-10 md:w-11 md:h-11 fill-current" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                      ) : (
                        <svg className="w-10 h-10 md:w-11 md:h-11 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      )}
                    </button>
                    <button className="text-white hover:text-gray-300 transition-colors">
                      {/* Next Icon */}
                      <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
                    </button>
                  </div>

                  {/* Audio Element */}
                  <audio 
                    ref={audioRef} 
                    src="/YTDown_YouTube_MARS-SMK-NEGERI-6-JEMBER_Media_RftdVPxxcYM_007_128k.mp3"
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={handleEnded}
                  />

                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="w-full max-w-sm aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl transform transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300">
              <img 
                src="/foto2lu.png" 
                alt="Latest Update 2 - SMKN 6 Jember" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card 3 */}
            <div className="w-full max-w-sm aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl transform transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300">
              <img 
                src="/foto3lu.png" 
                alt="Latest Update 3 - Logo Sekolah Kita" 
                className="w-full h-full object-cover"
              />
            </div>
            
          </div>

        </div>
      </section>

    </main>
  );
};

export default Home;
