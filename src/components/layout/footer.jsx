export default function Footer() {
  return (
    <footer className="bg-white pt-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Help Center Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-sky-500 p-8 rounded-[2.5rem] text-white flex flex-col justify-between h-56">
            <i className="bi bi-chat-dots text-4xl"></i>
            <div>
              <h4 className="font-black text-xl leading-none">Tanya MONIKS</h4>
              <p className="text-xs opacity-80 mt-2 font-medium">Asisten Virtual Diskominfo SP</p>
            </div>
          </div>
          <div className="bg-emerald-500 p-8 rounded-[2.5rem] text-white flex flex-col justify-between h-56">
            <i className="bi bi-star text-4xl"></i>
            <div>
              <h4 className="font-black text-xl leading-none">Survei (SKM)</h4>
              <p className="text-xs opacity-80 mt-2 font-medium">Nilai kepuasan layanan kami</p>
            </div>
          </div>
          {/* Visitor Stats */}
          <div className="lg:col-span-2 bg-slate-900 p-8 rounded-[2.5rem] text-white grid grid-cols-3 gap-4 text-center">
             <div><h5 className="text-4xl font-black tracking-tighter">243</h5><p className="text-[9px] uppercase font-bold opacity-40 mt-2">Hari Ini</p></div>
             <div className="border-x border-white/10"><h5 className="text-4xl font-black tracking-tighter">8.4k</h5><p className="text-[9px] uppercase font-bold opacity-40 mt-2">Bulan Ini</p></div>
             <div><h5 className="text-4xl font-black tracking-tighter">1.2m</h5><p className="text-[9px] uppercase font-bold opacity-40 mt-2">Total</p></div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 pb-20 border-b border-slate-100">
           <div className="lg:col-span-2">
              <h1 className="font-black text-primary text-2xl tracking-tighter">DISKOMINFO SP</h1>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-md">
                Dinas Komunikasi, Informatika, Statistik dan Persandian Kota Surakarta. Wujudkan Solo sebagai Smart City yang inklusif dan transparan.
              </p>
           </div>
           <div>
              <h4 className="font-bold text-slate-800 mb-6 text-sm">Navigasi</h4>
              <ul className="text-slate-400 text-xs space-y-4 font-medium">
                <li><a href="#">Dokumen PPID</a></li>
                <li><a href="#">Layanan Sektoral</a></li>
                <li><a href="#">Informasi Berkala</a></li>
                <li><a href="#">Struktur Organisasi</a></li>
              </ul>
           </div>
           <div>
              <h4 className="font-bold text-slate-800 mb-6 text-sm">Lokasi</h4>
              <p className="text-slate-400 text-xs leading-loose font-medium">
                Jl. Jenderal Sudirman No. 2,<br />
                Gedung Bale Upakari Lt. 3,<br />
                Kota Surakarta 57133
              </p>
           </div>
        </div>

        <div className="py-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
           <p>&copy; 2026 Pemerintah Kota Surakarta</p>
           <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
}