export default function MediaSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Kolom Dokumen (2/3) */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 tracking-tight">Dokumen & Data Publik</h2>
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
            <div className="flex gap-4 p-2 mb-4 border-b border-slate-100">
               <button className="text-xs font-bold text-primary border-b-2 border-primary pb-2 px-2">Rilis Data</button>
               <button className="text-xs font-bold text-slate-400 pb-2 px-2">LKJIP</button>
               <button className="text-xs font-bold text-slate-400 pb-2 px-2">Statistik</button>
            </div>
            <div className="space-y-2">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition group">
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 bg-accent-100 text-primary-700 rounded-xl flex items-center justify-center"><i className="bi bi-file-earmark-pdf"></i></div>
                    <div>
                      <h4 className="text-[11px] font-bold text-slate-700">Laporan Statistik Sektoral Surakarta 2026</h4>
                      <p className="text-[9px] text-slate-400 uppercase font-medium">1.4 MB — PDF</p>
                    </div>
                  </div>
                  <button className="w-8 h-8 rounded-full flex items-center justify-center text-primary-700 bg-accent-50 opacity-0 group-hover:opacity-100 transition"><i className="bi bi-download"></i></button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Kolom Media/Podcast (1/3) */}
        <div>
          <h2 className="text-3xl font-black text-slate-800 mb-8 tracking-tighter">KOMINPOD</h2>
          <div className="bg-primary rounded-[2.5rem] p-8 text-white shadow-xl shadow-primary/20 relative overflow-hidden">
             <i className="bi bi-mic-fill absolute -right-4 -bottom-4 text-9xl opacity-10 rotate-12"></i>
             <h4 className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Podcast Terbaru</h4>
<<<<<<< Updated upstream
             
             {/* Render dinamis judul podcast pertama (jika ada) */}
             <p className="font-bold text-lg leading-tight mb-8">
               {featured?.judul || "Ep. 25 — Masa Depan AI di Pemerintahan Solo"}
             </p>
             
=======
             <p className="font-bold text-lg leading-tight mb-8">Ep. 25 — Masa Depan AI di Pemerintahan Solo</p>
>>>>>>> Stashed changes
             <div className="space-y-4">
                {[1, 2].map((_, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/10 p-3 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <div className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center text-xs"><i className="bi bi-play-fill"></i></div>
                    <span className="text-[10px] font-bold opacity-80">Edisi {24-i} — Teknologi Inklusif</span>
                  </div>
                ))}
<<<<<<< Updated upstream

                <a
                  href={featured?.url_audio || "#"} /* Tambahkan tanda tanya (?) agar aman saat data masih kosong */
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full mt-8 py-3 bg-white text-primary rounded-xl font-bold text-xs hover:bg-slate-50 transition"
                >
                  Dengarkan Semua
                </a>
             </div>
=======
             </div>
             <button className="w-full mt-8 py-3 bg-white text-primary rounded-xl font-bold text-xs">Dengarkan Semua</button>
>>>>>>> Stashed changes
          </div>
        </div>
        
      </div>
    </section>
  );
}