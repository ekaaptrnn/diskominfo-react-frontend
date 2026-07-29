// src/components/sections/HelpSection.jsx
import React, { useState, useEffect } from 'react'; // 1. Tambahkan import hooks

export default function HelpSection() {
  // 2. State untuk angka statistik (dimulai dari angka yang ada di gambar)
  const [stats, setStats] = useState({
    hariIni: 243,
    kemarin: 831,
    bulanIni: 19083,
    total: 28040
  });

  // 3. Logika Aktivasi Real-time
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulasi pengunjung baru masuk (0-1 orang setiap 5 detik)
      const visitorIn = Math.floor(Math.random() * 2);
      
      if (visitorIn > 0) {
        setStats(prev => ({
          ...prev,
          hariIni: prev.hariIni + visitorIn,
          total: prev.total + visitorIn
        }));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white text-accent-700 px-4 py-1.5 rounded-full mb-4 font-bold text-[10px] uppercase border border-accent-100 shadow-sm">
             <span className="w-1.5 h-1.5 bg-accent-600 rounded-full animate-bounce"></span> Pusat Bantuan
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-2 tracking-tight">Pusat Bantuan & Interaksi</h2>
          <p className="text-slate-400 font-medium">Temukan jawaban atau hubungi asisten virtual kami</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* 1. Chat BOT MONIKS (Tetap Sama) */}
          <div className="bg-white rounded-2xl border border-accent-100 shadow-md overflow-hidden flex flex-col h-[450px]">
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
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-[11px] text-slate-600 border border-accent-50 leading-relaxed max-w-[85%]">
                   Halo! Saya MONIKS, asisten virtual Diskominfo SP Surakarta. Ada yang bisa saya bantu hari ini?
                </div>
                <div className="bg-primary p-4 rounded-2xl rounded-tr-none shadow-sm text-[11px] text-white leading-relaxed max-w-[80%] ml-auto font-medium">
                   Bagaimana cara permohonan informasi PPID?
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-[11px] text-slate-600 border border-accent-50 leading-relaxed max-w-[85%]">
                   Kunjungi menu <strong>PPID</strong> di website ini atau Anda bisa datang langsung ke Gedung Bale Upakari Lantai 3. 😊
                </div>
             </div>
             
             <div className="p-4 border-t border-accent-50 bg-white flex gap-2">
                <input className="flex-1 bg-slate-100 border-none rounded-xl px-4 text-xs font-medium focus:ring-1 focus:ring-primary/20 transition-all" placeholder="Ketik pertanyaan Anda..." />
                <button className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 active:scale-90 transition"><i className="bi bi-send-fill text-sm"></i></button>
             </div>
          </div>

          {/* 2. FAQ & SKM Link (Tetap Sama) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
             <div className="bg-white p-6 rounded-xl border border-accent-100 flex justify-between items-center group cursor-pointer hover:bg-accent-50 transition">
                <div className="flex items-center gap-6">
                   <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center text-xl"><i className="bi bi-question-circle-fill"></i></div>
                   <div>
                      <h4 className="font-bold text-slate-800 text-sm uppercase tracking-tight">FAQ</h4>
                      <p className="text-[10px] text-slate-400 font-bold">Pertanyaan yang sering diajukan</p>
                   </div>
                </div>
                <i className="bi bi-chevron-down text-slate-300 group-hover:text-primary transition"></i>
             </div>

             <div className="space-y-3">
                {['Layanan apa saja yang tersedia di Diskominfo?', 'Apakah layanan informasi publik dikenakan biaya?', 'Bagaimana cara melaporkan aduan melalui ULAS?'].map((q, i) => (
                   <div key={i} className="bg-white p-5 px-8 rounded-2xl border border-accent-50 text-[11px] font-bold text-slate-600 flex justify-between items-center hover:border-primary/20 transition-colors cursor-pointer group">
                      {q} <i className="bi bi-plus-lg text-slate-300 group-hover:text-primary"></i>
                   </div>
                ))}
             </div>

             <a href="/skm" className="bg-emerald-500 p-8 rounded-2xl text-white flex justify-between items-center mt-4 shadow-sm group">
                <div className="flex items-center gap-6">
                   <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-3xl"><i className="bi bi-hand-thumbs-up-fill"></i></div>
                   <div>
                      <h4 className="font-bold text-lg tracking-tight leading-none">Survei Kepuasan Masyarakat (SKM)</h4>
                      <p className="text-[10px] opacity-80 mt-2 font-bold uppercase tracking-widest">Berikan penilaian terhadap layanan kami</p>
                   </div>
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-2 transition relative z-10">
                   <i className="bi bi-arrow-right"></i>
                </div>
             </a>
          </div>
        </div>

        {/* 3. STATISTIK PENGUNJUNG - AKTIF REAL-TIME SEKARANG */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-10 rounded-2xl border border-accent-100 shadow-sm text-center">
           <div className="group">
              <h3 className="text-4xl font-bold text-primary tracking-tight group-hover:scale-110 transition tabular-nums">
                {stats.hariIni.toLocaleString('id-ID')}
              </h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-3">Hari Ini</p>
           </div>
           <div className="border-l border-slate-100 group">
              <h3 className="text-4xl font-bold text-primary tracking-tight group-hover:scale-110 transition tabular-nums">
                {stats.kemarin.toLocaleString('id-ID')}
              </h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-3">Kemarin</p>
           </div>
           <div className="border-l border-slate-100 group">
              <h3 className="text-4xl font-bold text-primary tracking-tight group-hover:scale-110 transition tabular-nums">
                {stats.bulanIni.toLocaleString('id-ID')}
              </h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-3">Bulan Ini</p>
           </div>
           <div className="border-l border-slate-100 group">
              <h3 className="text-4xl font-bold text-primary tracking-tight group-hover:scale-110 transition tabular-nums">
                {stats.total.toLocaleString('id-ID')}
              </h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-3">Total Pengunjung</p>
           </div>
        </div>
      </div>
    </section>
  );
}