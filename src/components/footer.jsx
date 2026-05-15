import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-[#2f3948] text-[#aebfd0] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & About */}
          <div className="pr-0 md:pr-4">
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">SMKN 6 JEMBER</h4>
            <p className="text-sm leading-relaxed mb-8 font-medium">
              Pusat pendidikan kejuruan yang berorientasi pada kemajuan teknologi dan kebutuhan pasar kerja masa depan.
            </p>
            <div className="flex gap-4">
              {/* Medal/Award Icon */}
              <a href="#" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </a>
              {/* Globe/Web Icon */}
              <a href="#" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </a>
              {/* Mail Icon */}
              <a href="#" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Program Studi */}
          <div>
            <h4 className="text-white font-semibold mb-6">Program Studi</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/jurusan-rpl" className="hover:text-white transition-colors">Rekayasa Perangkat Lunak</Link></li>
              <li><Link to="/jurusan-dkv" className="hover:text-white transition-colors">Desain Komunikasi Visual</Link></li>
              <li><Link to="/jurusan-akl" className="hover:text-white transition-colors">Akuntansi</Link></li>
              <li><Link to="/jurusan-bd" className="hover:text-white transition-colors">Bisnis Digital Dan Pemasaran</Link></li>
              <li><Link to="/jurusan-kriya" className="hover:text-white transition-colors">Kriya Kreatif Batik Dan Tekstil</Link></li>
            </ul>
          </div>

          {/* Column 3: Tautan Cepat */}
          <div>
            <h4 className="text-white font-semibold mb-6">Tautan Cepat</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="hover:text-white transition-colors">Beranda</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Tentang</Link></li>
              <li><Link to="/kontak" className="hover:text-white transition-colors">Kontak Kami</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Berita Terkini</a></li>
            </ul>
          </div>

          {/* Column 4: Kontak */}
          <div>
            <h4 className="text-white font-semibold mb-6">Kontak</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Jl.PB Sudirman, Tekoan,<br />Tanggul Kulon</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(0331) 1234567</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <span>info@smkn6jember.sch.id</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-[#445263] pt-6 flex justify-center text-xs font-medium tracking-wide">
          <p>© 2024 SMKN 6 Jember. Excellence in Vocational Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
