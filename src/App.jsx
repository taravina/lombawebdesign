import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
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

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-900 selection:bg-blue-500/30 flex flex-col">
        <Navbar />
        <main className="flex-grow">
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
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App