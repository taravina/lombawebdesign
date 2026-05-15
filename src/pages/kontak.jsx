import React, { useState } from 'react';

const Kontak = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
    { 
      question: "Bagaimana cara mendaaftar di SMKN 6 Jember?", 
      answer: "Pendaftaran dapat dilakukan secara online melalui website resmi PPDB Provinsi Jawa Timur atau datang langsung ke sekolah untuk mendapatkan panduan dari panitia." 
    },
    { 
      question: "Apakah harus mempunyai Kartu Keluarga untuk mendaftar?", 
      answer: "Ya, Kartu Keluarga merupakan salah satu dokumen yang wajib dilampirkan untuk memverifikasi domisili calon siswa." 
    },
    { 
      question: "Apakah harus umur 15 untuk mendaftar?", 
      answer: "Tidak harus tepat 15 tahun. Batas usia pendaftaran masuk SMK pada umumnya adalah maksimal 21 tahun pada saat awal tahun pelajaran baru." 
    },
    { 
      question: "Berapa nilai yang diperlukan untuk mendaftar?", 
      answer: "Nilai yang dibutuhkan bervariasi bergantung pada jalur pendaftaran (Prestasi, Zonasi, atau Afirmasi) dan keketatan di masing-masing program keahlian." 
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/fotodepansmk.jpg')" }}
        >
          {/* Blue Overlay to make text readable */}
          <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-3xl mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-md">
            Hubungi Kami
          </h1>
          <p className="text-white/90 text-sm md:text-base leading-relaxed drop-shadow">
            Mempunyai pertanyaan tentang seputar Jurusan, Pendaftaran, Ataupun Seputar administratif? 
            Tim kami siap menjawab seluruh pertanyaan anda.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-12 flex flex-col lg:flex-row gap-12">
        
        {/* Left Column: Contact Information */}
        <div className="w-full lg:w-5/12 flex flex-col">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Informasi Kontak</h2>
          
          <div className="flex flex-col gap-6">
            {/* Card 1: Alamat */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-5 hover:shadow-md transition-shadow">
              <div className="bg-[#6b93b0] w-12 h-12 rounded-xl shrink-0 flex items-center justify-center text-white shadow-inner">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex flex-col mt-1">
                <h3 className="font-bold text-slate-800 text-[15px] mb-1">Alamat Sekolah</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Jl. Jember-Banyuwangi No. 123, Kecamatan<br />
                  Mayang, Kabupaten Jember, Jawa Timur 68182
                </p>
              </div>
            </div>

            {/* Card 2: Telepon & WA */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-5 hover:shadow-md transition-shadow">
              <div className="bg-[#6b93b0] w-12 h-12 rounded-xl shrink-0 flex items-center justify-center text-white shadow-inner">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex flex-col mt-1">
                <h3 className="font-bold text-slate-800 text-[15px] mb-1">Telepon & WhatsApp</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  (0331) 1234567<br />
                  +62 812-3456-7890
                </p>
              </div>
            </div>

            {/* Card 3: Email */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-5 hover:shadow-md transition-shadow">
              <div className="bg-[#6b93b0] w-12 h-12 rounded-xl shrink-0 flex items-center justify-center text-white shadow-inner">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex flex-col mt-1">
                <h3 className="font-bold text-slate-800 text-[15px] mb-1">Email Resmi</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  info@smkn6jember.sch.id<br />
                  ppdb@smkn6jember.sch.id
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full lg:w-7/12">
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100 h-full flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Kirim Pesan</h2>
            <p className="text-slate-500 text-sm mb-8">
              Isi formulir di bawah ini dan kami akan segera menghubungi Anda kembali.
            </p>

            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nama Lengkap */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-700 ml-1">Nama Lengkap</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="Masukkan nama Anda" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#6b93b0]/50 focus:border-[#6b93b0] transition-colors text-sm"
                  />
                </div>
                {/* Alamat Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-700 ml-1">Alamat Email</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="name@example.com" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#6b93b0]/50 focus:border-[#6b93b0] transition-colors text-sm"
                  />
                </div>
              </div>

              {/* Pesan Anda */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold text-slate-700 ml-1">Pesan Anda</label>
                <textarea 
                  id="message"
                  rows="5"
                  placeholder="Bagaimana kami bisa membantu Anda?" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#6b93b0]/50 focus:border-[#6b93b0] transition-colors text-sm resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button 
                  type="submit" 
                  className="bg-[#6b93b0] hover:bg-[#567a94] text-white font-medium py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors w-fit"
                >
                  Kirim Pesan
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <div className="relative w-full h-[250px] md:h-[300px] rounded-xl overflow-hidden shadow-sm bg-blue-50 border border-slate-200 group">
          {/* Simulated Map Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-80"
            style={{ backgroundImage: "url('https://maps.googleapis.com/maps/api/staticmap?center=-8.184486,113.668075&zoom=14&size=1200x400&maptype=roadmap&key=INVALID_KEY')" }}
          >
            {/* Fallback pattern if image fails */}
            <div className="absolute inset-0 bg-blue-100/30" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/agsquare.png')" }}></div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <a 
              href="https://goo.gl/maps/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-700 font-bold px-6 py-2.5 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] flex items-center gap-2 hover:scale-105 transition-transform z-10 text-[13px] md:text-sm"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Buka di Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-4xl mx-auto px-4 md:px-8 mb-28">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-600 mb-10 tracking-wide">FAQ</h2>
        
        <div className="bg-white rounded-md shadow-[0_2px_15px_rgba(0,0,0,0.06)] border border-slate-200 flex flex-col">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`flex flex-col border-slate-200 ${index !== faqData.length - 1 ? 'border-b' : ''}`}
            >
              <button 
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex justify-between items-center px-6 py-4 md:py-5 w-full text-left hover:bg-slate-50 transition-colors focus:outline-none"
              >
                <span className="font-semibold text-slate-600 text-[14px] md:text-[15px] pr-4">{faq.question}</span>
                <svg 
                  className={`w-4 h-4 md:w-5 md:h-5 text-slate-500 transform transition-transform duration-300 shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Answer Expansion */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-5 text-slate-500 text-[13px] md:text-sm leading-relaxed border-t border-slate-100 pt-3">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Kontak;
