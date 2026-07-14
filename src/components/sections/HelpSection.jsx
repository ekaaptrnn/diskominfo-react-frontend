// src/components/sections/HelpSection.jsx

export default function HelpSection() {
  return (
    <section className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white text-sky-600 px-4 py-1.5 rounded-full mb-4 font-bold text-[10px] uppercase border border-sky-100 shadow-sm">
             <span className="w-1.5 h-1.5 bg-sky-600 rounded-full animate-bounce"></span> Pusat Bantuan
          </div>
          <h2 className="text-4xl font-black text-slate-800 mb-2 tracking-tighter">Pusat Bantuan & Interaksi</h2>
          <p className="text-slate-400 font-medium">Temukan jawaban atau hubungi asisten virtual kami</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* 1. Chat BOT MONIKS (UI Only) */}
          <div className="bg-white rounded-[2.5rem] border border-sky-100 shadow-2xl overflow-hidden flex flex-col h-[450px]">
             <div className="bg-primary p-6 text-white flex justify-between items-center">
                <div className="flex gap-4 items-center">
                   <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-xl shadow-inner"><i className="bi bi-robot"></i></div>
                   <div>
                      <h4 className="font-bold text-sm tracking-tight">Tanya MONIKS</h4>
                      <p className="text-[9px] opacity-80 flex items-center gap-1 font-bold">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span> ASISTEN VIRTUAL ONLINE
                      </p>
                   </div>
                </div>
                <i className="bi bi-three-dots-vertical"></i>
             </div>
             
             <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-slate-50/50">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-[11px] text-slate-600 border border-sky-50 leading-relaxed max-w-[85%]">
                   Halo! Saya MONIKS, asisten virtual Diskominfo SP Surakarta. Ada yang bisa saya bantu hari ini?
                </div>
                <div className="bg-primary p-4 rounded-2xl rounded-tr-none shadow-sm text-[11px] text-white leading-relaxed max-w-[80%] ml-auto font-medium">
                   Bagaimana cara permohonan informasi PPID?
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-[11px] text-slate-600 border border-sky-50 leading-relaxed max-w-[85%]">
                   Kunjungi menu <strong>PPID</strong> di website ini atau Anda bisa datang langsung ke Gedung Bale Upakari Lantai 3. 😊
                </div>
             </div>
             
             <div className="p-4 border-t border-sky-50 bg-white flex gap-2">
                <input className="flex-1 bg-slate-100 border-none rounded-xl px-4 text-xs font-medium focus:ring-1 focus:ring-primary/20 transition-all" placeholder="Ketik pertanyaan Anda..." />
                <button className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 active:scale-90 transition"><i className="bi bi-send-fill text-sm"></i></button>
             </div>
          </div>

          {/* 2. FAQ & SKM Link */}
          <div className="lg:col-span-2 flex flex-col gap-4">
             {/* FAQ Accordion Preview */}
             <div className="bg-white p-6 rounded-[2rem] border border-sky-100 flex justify-between items-center group cursor-pointer hover:bg-sky-50 transition">
                <div className="flex items-center gap-6">
                   <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center text-xl"><i className="bi bi-question-circle-fill"></i></div>
                   <div>
                      <h4 className="font-black text-slate-800 text-sm uppercase tracking-tight">FAQ</h4>
                      <p className="text-[10px] text-slate-400 font-bold">Pertanyaan yang sering diajukan</p>
                   </div>
                </div>
                <i className="bi bi-chevron-down text-slate-300 group-hover:text-primary transition"></i>
             </div>

             <div className="space-y-3">
                {['Layanan apa saja yang tersedia di Diskominfo?', 'Apakah layanan informasi publik dikenakan biaya?', 'Bagaimana cara melaporkan aduan melalui ULAS?'].map((q, i) => (
                   <div key={i} className="bg-white p-5 px-8 rounded-2xl border border-sky-50 text-[11px] font-bold text-slate-600 flex justify-between items-center hover:border-primary/20 transition-colors cursor-pointer group">
                      {q} <i className="bi bi-plus-lg text-slate-300 group-hover:text-primary"></i>
                   </div>
                ))}
             </div>

             {/* SKM Banner - Sesuai Poin #9 */}
             <a href="/skm" className="bg-emerald-500 p-8 rounded-[2.5rem] text-white flex justify-between items-center mt-4 shadow-xl shadow-emerald-100 group relative overflow-hidden">
                <i className="bi bi-check2-circle absolute -right-6 -bottom-6 text-[120px] opacity-10 rotate-12"></i>
                <div className="flex items-center gap-6 relative z-10">
                   <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-3xl"><i className="bi bi-hand-thumbs-up-fill"></i></div>
                   <div>
                      <h4 className="font-black text-lg tracking-tight leading-none">Survei Kepuasan Masyarakat (SKM)</h4>
                      <p className="text-[10px] opacity-80 mt-2 font-bold uppercase tracking-widest">Berikan penilaian terhadap layanan kami</p>
                   </div>
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-2 transition relative z-10">
                   <i className="bi bi-arrow-right"></i>
                </div>
             </a>
          </div>
        </div>

        {/* 3. STATISTIK PENGUNJUNG - Sesuai Poin #17 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-10 rounded-[3rem] border border-sky-100 shadow-sm text-center">
           <div className="group">
              <h3 className="text-4xl font-black text-primary tracking-tighter group-hover:scale-110 transition">243</h3>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-3">Hari Ini</p>
           </div>
           <div className="border-l border-slate-100 group">
              <h3 className="text-4xl font-black text-primary tracking-tighter group-hover:scale-110 transition">831</h3>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-3">Kemarin</p>
           </div>
           <div className="border-l border-slate-100 group">
              <h3 className="text-4xl font-black text-primary tracking-tighter group-hover:scale-110 transition">19.083</h3>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-3">Bulan Ini</p>
           </div>
           <div className="border-l border-slate-100 group">
              <h3 className="text-4xl font-black text-primary tracking-tighter group-hover:scale-110 transition">28.040</h3>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-3">Total Pengunjung</p>
           </div>
        </div>
      </div>
    </section>
  );
}