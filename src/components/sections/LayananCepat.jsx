import React from 'react';

// 1. Data Layanan (Bisa dipindah ke src/data.js nantinya agar bisa dikelola Admin)
const services = [
  { name: "LAPOR SP4N", sub: "Aduan Nasional", icon: "bi-megaphone-fill", color: "bg-rose-500" },
  { name: "Lapor Gub", sub: "Aduan Provinsi", icon: "bi-bank2", color: "bg-orange-500" },
  { name: "ULAS", sub: "Aduan Kota Solo", icon: "bi-chat-left-text-fill", color: "bg-emerald-500" },
  { name: "Lapor Mas Wali", sub: "Aduan Langsung", icon: "bi-person-badge-fill", color: "bg-primary" },
  { name: "KONATA", icon: "bi-headset", sub: "Layanan Disabilitas", color: "bg-purple-600" },
  { name: "Solo Data", sub: "Portal Data Terbuka", icon: "bi-bar-chart-line-fill", color: "bg-accent-500" },
  { name: "PPID Pelaksana", sub: "Informasi Publik", icon: "bi-file-earmark-lock-fill", color: "bg-pink-600" },
  { name: "Fasilitas Publik", sub: "Akses Sarpras", icon: "bi-building-fill-check", color: "bg-indigo-600" },
];

export default function LayananCepat() {
  return (
    // TAMBAHKAN ID DI SINI agar Navbar bisa scroll ke sini
    <section id="layanan-cepat-section" className="py-24 bg-white font-sans scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-50 text-primary px-4 py-1.5 rounded-full mb-4 font-bold text-[10px] uppercase border border-slate-100 shadow-sm">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span> 
            Layanan Digital Terintegrasi
          </div>
          <h2 className="text-4xl font-black text-slate-800 tracking-tighter uppercase">Layanan Cepat</h2>
          <p className="text-slate-400 font-medium text-sm mt-3 max-w-lg mx-auto leading-relaxed">
            Akses cepat layanan Pemerintah Kota Surakarta dalam satu genggaman untuk masyarakat Solo yang lebih maju.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {services.map((item, i) => (
            <div 
              key={i} 
              className="group p-8 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-[0_20px_50px_rgba(30,79,146,0.1)] hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center cursor-pointer"
            >
              {/* Box Ikon - Dibuat Bulat Lembut (Squircle) */}
              <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-white text-3xl mb-6 shadow-lg shadow-current/20 group-hover:rotate-12 transition-all duration-500 ${item.color}`}>
                <i className={`bi ${item.icon}`}></i>
              </div>
              
              <h4 className="font-black text-slate-800 text-[11px] md:text-[13px] uppercase tracking-tighter leading-tight">
                {item.name}
              </h4>
              <p className="text-[9px] font-bold text-slate-400 mt-2 uppercase tracking-[0.2em] opacity-70 group-hover:text-primary transition-colors">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}