import React from 'react';

// Aset logo layanan
import iconLaporSP4N from "../../assets/layanan/lapor-sp4n.png";
import iconLaporGub from "../../assets/layanan/lapor-gub.png";
import iconUlas from "../../assets/layanan/ulas.png";
import iconLaporMasWali from "../../assets/layanan/lapor-mas-wali.png";
import iconKonata from "../../assets/layanan/konata.png";
import iconSoloData from "../../assets/layanan/solo-data.png";
import iconPpidPelaksana from "../../assets/layanan/ppid-pelaksana.png";
import iconFasilitasPublik from "../../assets/layanan/fasilitas-publik.png";

// Data Layanan Terintegrasi
const services = [
  { 
    name: "LAPOR SP4N", 
    sub: "Aduan Nasional", 
    icon: iconLaporSP4N, 
    color: "bg-rose-500",
    url: "https://www.lapor.go.id/" 
  },
  { 
    name: "Lapor Gub", 
    sub: "Aduan Provinsi", 
    icon: iconLaporGub, 
    color: "bg-orange-500",
    url: "https://laporgub.jatengprov.go.id/" 
  },
  { 
    name: "ULAS", 
    sub: "Aduan Kota Solo", 
    icon: iconUlas, 
    color: "bg-emerald-500",
    url: "https://ulas.surakarta.go.id/" 
  },
  { 
    name: "Lapor Mas Wali", 
    sub: "Aduan WhatsApp", 
    icon: iconLaporMasWali, 
    color: "bg-primary",
    url: "https://wa.me/6281225067171" 
  },
  { 
    name: "KONATA", 
    icon: iconKonata, 
    sub: "Layanan Disabilitas", 
    color: "bg-purple-600",
    url: "https://konata.surakarta.go.id/" 
  },
  { 
    name: "Solo Data", 
    sub: "Portal Data Terbuka", 
    icon: iconSoloData, 
    color: "bg-sky-500",
    url: "https://data.surakarta.go.id/" 
  },
  { 
    name: "PPID Pelaksana", 
    sub: "Informasi Publik", 
    icon: iconPpidPelaksana, 
    color: "bg-pink-600",
    url: "https://ppid.surakarta.go.id/" 
  },
  { 
    name: "Fasilitas Publik", 
    sub: "Akses Sarpras", 
    icon: iconFasilitasPublik, 
    color: "bg-indigo-600",
    url: "https://surakarta.go.id" 
  },
];

export default function LayananCepat() {
  return (
    <section id="layanan-cepat-section" className="py-24 font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 dark:bg-white/[0.07] text-primary dark:text-accent-300 px-4 py-1.5 rounded-full mb-4 font-bold text-xs uppercase border border-accent/20 dark:border-white/[0.13] shadow-sm">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span> 
            One Stop Digital Services
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary-900 dark:text-white tracking-tight uppercase">Layanan Cepat</h2>
          <p className="text-slate-500 dark:text-white/50 font-medium text-sm mt-3 max-w-lg mx-auto leading-relaxed">
            Akses langsung ke berbagai kanal aduan dan layanan publik Pemerintah Kota Surakarta secara terintegrasi.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((item, i) => (
            <a 
              key={i} 
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl border border-primary/15 bg-white/80 backdrop-blur-xl shadow-[0_4px_20px_rgba(30,79,146,0.10)] hover:bg-white/95 hover:border-accent/40 hover:shadow-[0_8px_28px_rgba(41,168,224,0.18)] hover:-translate-y-1 dark:border-white/[0.13] dark:bg-white/[0.07] dark:shadow-[0_4px_20px_rgba(0,0,0,0.30)] dark:hover:bg-white/[0.12] dark:hover:border-white/[0.24] transition-all duration-500 flex flex-col items-center text-center cursor-pointer relative overflow-hidden"
            >
              {/* Efek Glow Background, warna asli tiap layanan tetap dipakai di sini */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${item.color}`}></div>

              {/* Box Logo: putih/glass supaya logo PNG tampil natural, ring tipis pakai warna asli layanan */}
              <div className={`w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center bg-white dark:bg-white/90 ring-2 ring-offset-2 ring-offset-white/80 dark:ring-offset-white/[0.07] mb-6 shadow-md group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}>
                <img src={item.icon} alt={item.name} className="w-full h-full object-cover" />
              </div>
              
              <h4 className="font-black text-primary-900 dark:text-white text-xs md:text-sm uppercase tracking-tight leading-tight flex items-center gap-2">
                {item.name}
                <i className="bi bi-arrow-up-right text-xs opacity-0 group-hover:opacity-100 transition-all"></i>
              </h4>
              <p className="text-xs font-bold text-slate-400 dark:text-white/40 mt-2 uppercase tracking-[0.2em] opacity-70 group-hover:text-primary dark:group-hover:text-accent-300 transition-colors">
                {item.sub}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}