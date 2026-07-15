export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Service Hub */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <button className="bg-white/5 border border-white/10 p-6 rounded-[2rem] flex items-center gap-6 hover:bg-primary transition group">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl font-black group-hover:bg-white group-hover:text-primary">P</div>
            <div className="text-left">
              <h4 className="font-black text-sm uppercase tracking-tighter leading-none">PPID Kota Surakarta</h4>
              <p className="text-[9px] opacity-60 mt-2">Pejabat Pengelola Informasi & Dokumentasi</p>
            </div>
          </button>
          <button className="bg-white/5 border border-white/10 p-6 rounded-[2rem] flex items-center gap-6 hover:bg-sky-500 transition group">
            <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-2xl font-black group-hover:bg-white group-hover:text-sky-500">S</div>
            <div className="text-left">
              <h4 className="font-black text-sm uppercase tracking-tighter leading-none">SoloData</h4>
              <p className="text-[9px] opacity-60 mt-2">Portal Data Terbuka Kota Surakarta</p>
            </div>
          </button>
          <button className="bg-white/5 border border-white/10 p-6 rounded-[2rem] flex items-center gap-6 hover:bg-emerald-500 transition group">
            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-2xl font-black group-hover:bg-white group-hover:text-emerald-500">P</div>
            <div className="text-left">
              <h4 className="font-black text-sm uppercase tracking-tighter leading-none">Pemerintah Kota Surakarta</h4>
              <p className="text-[9px] opacity-60 mt-2">Portal Resmi Kota Bengawan</p>
            </div>
          </button>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 pb-20">
          {/* Kolom 1: Alamat & Map */}
          <div>
            <h5 className="font-black text-xs uppercase tracking-widest mb-8 flex items-center gap-2">
              <i className="bi bi-geo-alt text-sky-400"></i> Lokasi
            </h5>
            <div className="rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition duration-700 h-40 bg-white/10 mb-6">
               <img src="/map-placeholder.png" className="w-full h-full object-cover" alt="Map" />
            </div>
            <p className="text-[11px] leading-relaxed opacity-60">
              Gedung Bale Upakari Lantai 3, Jl. Jenderal Sudirman No. 2, Kompleks Balaikota Surakarta 57133
            </p>
          </div>

          {/* Kolom 2: Info Publik */}
          <div>
            <h5 className="font-black text-xs uppercase tracking-widest mb-8 flex items-center gap-2">
              <i className="bi bi-info-circle text-sky-400"></i> Informasi Publik
            </h5>
            <ul className="text-[11px] space-y-4 font-bold opacity-60 uppercase tracking-tighter">
              <li className="hover:text-sky-400 cursor-pointer transition flex items-center gap-3">
                <i className="bi bi-chevron-right text-[8px]"></i> Informasi Berkala
              </li>
              <li className="hover:text-sky-400 cursor-pointer transition flex items-center gap-3">
                <i className="bi bi-chevron-right text-[8px]"></i> Informasi Setiap Saat
              </li>
              <li className="hover:text-sky-400 cursor-pointer transition flex items-center gap-3">
                <i className="bi bi-chevron-right text-[8px]"></i> Informasi Serta Merta
              </li>
              <li className="hover:text-sky-400 cursor-pointer transition flex items-center gap-3">
                <i className="bi bi-chevron-right text-[8px]"></i> Informasi Dikecualikan
              </li>
            </ul>
          </div>

          {/* Kolom 3: Link Terkait */}
          <div>
            <h5 className="font-black text-xs uppercase tracking-widest mb-8 flex items-center gap-2">
              <i className="bi bi-link-45deg text-sky-400"></i> Link Terkait
            </h5>
            <ul className="text-[11px] space-y-4 font-bold opacity-60 uppercase tracking-tighter">
              <li className="hover:text-sky-400 cursor-pointer transition flex items-center gap-3">
                <i className="bi bi-chevron-right text-[8px]"></i> Pemerintah Kota Surakarta
              </li>
              <li className="hover:text-sky-400 cursor-pointer transition flex items-center gap-3">
                <i className="bi bi-chevron-right text-[8px]"></i> PPID Kota Surakarta
              </li>
              <li className="hover:text-sky-400 cursor-pointer transition flex items-center gap-3">
                <i className="bi bi-chevron-right text-[8px]"></i> Solo Data
              </li>
              <li className="hover:text-sky-400 cursor-pointer transition flex items-center gap-3">
                <i className="bi bi-chevron-right text-[8px]"></i> Kominfo RI
              </li>
            </ul>
          </div>

          {/* Kolom 4: Statistik Pengunjung - Sesuai Gambar V23 */}
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
  <h5 className="font-bold text-[10px] uppercase tracking-widest text-sky-400 mb-6">Statistik Pengunjung</h5>
  <div className="space-y-4">
    <div className="flex justify-between items-center py-2 border-b border-white/5">
      <span className="text-[11px] font-medium opacity-60">Hari Ini</span>
      <span className="text-xl font-extrabold tracking-tighter text-white">243</span>
    </div>
    <div className="flex justify-between items-center py-2 border-b border-white/5">
      <span className="text-[11px] font-medium opacity-60">Bulan Ini</span>
      <span className="text-xl font-extrabold tracking-tighter text-white">19,083</span>
    </div>
    <div className="flex justify-between items-center py-2">
      <span className="text-[11px] font-extrabold text-sky-400">TOTAL</span>
      <span className="text-xl font-extrabold tracking-tighter text-sky-400">28,040</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="py-8 border-t border-white/5 flex justify-between items-center text-[9px] font-bold opacity-40 uppercase tracking-widest">
           <p>© 2026 — Pemerintah Kota Surakarta. Hak cipta dilindungi undang-undang.</p>
           <p>Dinas Komunikasi Informatika dan Persandian Kota Surakarta</p>
        </div>
      </div>
    </footer>
  );
}