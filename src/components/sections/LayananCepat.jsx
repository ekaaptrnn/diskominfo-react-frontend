import React from 'react';

// 1. Data Layanan Spesifik Diskominfo (8 Item)
const services = [
  { name: "LAPOR SP4N", sub: "Aduan Nasional", icon: "bi-megaphone-fill", color: "bg-rose-500" },
  { name: "Lapor Gub", sub: "Aduan Provinsi", icon: "bi-bank2", color: "bg-orange-500" },
  { name: "ULAS", sub: "Aduan Kota Solo", icon: "bi-chat-left-text-fill", color: "bg-emerald-500" },
  { name: "Lapor Mas Wali", sub: "Aduan Langsung", icon: "bi-person-badge-fill", color: "bg-blue-600" },
  { name: "KONATA", icon: "bi-headset", sub: "Layanan Disabilitas", color: "bg-purple-600" },
  { name: "Solo Data", sub: "Portal Data Terbuka", icon: "bi-bar-chart-line-fill", color: "bg-sky-500" },
  { name: "PPID Pelaksana", sub: "Informasi Publik", icon: "bi-file-earmark-lock-fill", color: "bg-pink-600" },
  { name: "Fasilitas Publik", sub: "Akses Sarpras", icon: "bi-building-fill-check", color: "bg-indigo-600" },
];

export default function LayananCepat() {
  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          {/* Label Kecil Profesional */}
          <div className="inline-flex items-center gap-2 bg-slate-50 text-primary px-4 py-1.5 rounded-full mb-4 font-bold text-[10px] uppercase border border-slate-100 shadow-sm">
            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Layanan Digital Terintegrasi
          </div>
          <h2 className="text-3xl font-extrabold text-slate-800 tracking-tighter">Layanan Cepat</h2>
          <p className="text-slate-400 font-medium text-sm mt-2">Akses cepat layanan Pemerintah Kota Surakarta dalam satu genggaman</p>
        </div>

        {/* 8 Grid: 4 di baris atas, 4 di baris bawah (pada layar desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {services.map((item, i) => (
            <div 
              key={i} 
              className="group p-8 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
            >
              {/* Box Ikon - Bulat melingkar sesuai permintaan desain Fresh */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg group-hover:rotate-6 transition duration-300 ${item.color}`}>
                <i className={`bi ${item.icon}`}></i>
              </div>
              
              {/* Text Content - Jakarta Sans */}
              <h4 className="font-extrabold text-slate-800 text-xs md:text-sm uppercase tracking-tight leading-tight">
                {item.name}
              </h4>
              <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-widest opacity-80">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}