import React, { useState, useEffect } from 'react'
import './index.css'
import Navbar from './components/navbar'
import Home from './pages/home'
import About from './pages/about'
import Kontak from './pages/kontak'
import Footer from './components/footer'
import JurusanRpl from './pages/jurusan-rpl'
import JurusanMp from './pages/jurusan-mp'
import JurusanBd from './pages/jurusan-bd'
import JurusanAkl from './pages/jurusan-akl'
import JurusanDkv from './pages/jurusan-dkv'
import JurusanKriya from './pages/jurusan-kriya'



function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Fungsi untuk membaca hash URL dan mengubah state halaman
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
      window.scrollTo(0, 0); // Scroll ke atas setiap pindah halaman
    };

    // Dengarkan perubahan hash
    window.addEventListener('hashchange', handleHashChange);
    
    // Setel halaman awal saat pertama kali dimuat
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 selection:bg-blue-500/30 flex flex-col">
      <Navbar />
      
      {/* Conditional Rendering berdasarkan halaman aktif */}
      <div className="flex-grow">
        {currentPage === 'home' && <Home />}
        {currentPage === 'about' && <About />}
        {currentPage === 'kontak' && <Kontak />}
        
        {/* Render Halaman Jurusan */}
        {(currentPage === 'jurusan' || currentPage === 'jurusan-rpl') && <JurusanRpl />}
        {currentPage === 'jurusan-mp' && <JurusanMp />}
        {currentPage === 'jurusan-bd' && <JurusanBd />}
        {currentPage === 'jurusan-akl' && <JurusanAkl />}
        {currentPage === 'jurusan-dkv' && <JurusanDkv />}
        {currentPage === 'jurusan-kriya' && <JurusanKriya />}
      </div>



      <Footer />
    </div>
  )
}

export default App