import { BrowserRouter, Routes, Route, useLocation } from "./router"
import { useEffect } from "react"

import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about'
import Kontak from './pages/kontak'
import JurusanRpl from './pages/jurusan-rpl'
import JurusanMp from './pages/jurusan-mp'
import JurusanBd from './pages/jurusan-bd'
import JurusanAkl from './pages/jurusan-akl'
import JurusanDkv from './pages/jurusan-dkv'
import JurusanKriya from './pages/jurusan-kriya'

import './index.css'

function PageWrapper({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Scroll Reveal Intersection Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div key={pathname} className="animate-fade-in">
      {children}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white selection:bg-blue-600 selection:text-white flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/kontak" element={<Kontak />} />
              <Route path="/jurusan" element={<JurusanRpl />} />
              <Route path="/jurusan-rpl" element={<JurusanRpl />} />
              <Route path="/jurusan-mp" element={<JurusanMp />} />
              <Route path="/jurusan-bd" element={<JurusanBd />} />
              <Route path="/jurusan-akl" element={<JurusanAkl />} />
              <Route path="/jurusan-dkv" element={<JurusanDkv />} />
              <Route path="/jurusan-kriya" element={<JurusanKriya />} />
            </Routes>
          </PageWrapper>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App