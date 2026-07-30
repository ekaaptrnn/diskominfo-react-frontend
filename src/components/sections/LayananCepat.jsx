import React from 'react';

// Data Layanan Terintegrasi
const services = [
  { 
    name: "LAPOR SP4N", 
    sub: "Aduan Nasional", 
    icon: "bi-megaphone-fill", 
    color: "bg-rose-500",
    url: "https://www.lapor.go.id/" 
  },
  { 
    name: "Lapor Gub", 
    sub: "Aduan Provinsi", 
    icon: "bi-bank2", 
    color: "bg-orange-500",
    url: "https://laporgub.jatengprov.go.id/" 
  },
  { 
    name: "ULAS", 
    sub: "Aduan Kota Solo", 
    icon: "bi-chat-left-text-fill", 
    color: "bg-emerald-500",
    url: "https://ulas.surakarta.go.id/" 
  },
  { 
    name: "Lapor Mas Wali", 
    sub: "Aduan WhatsApp", 
    icon: "bi-person-badge-fill", 
    color: "bg-primary",
    url: "https://wa.me/6281225067171" 
  },
  { 
    name: "KONATA", 
    icon: "bi-headset", 
    sub: "Layanan Disabilitas", 
    color: "bg-purple-600",
    url: "https://konata.surakarta.go.id/" 
  },
  { 
    name: "Solo Data", 
    sub: "Portal Data Terbuka", 
    icon: "bi-bar-chart-line-fill", 
    color: "bg-sky-500",
    url: "https://data.surakarta.go.id/" 
  },
  { 
    name: "PPID Pelaksana", 
    sub: "Informasi Publik", 
    icon: "bi-file-earmark-lock-fill", 
    color: "bg-pink-600",
    url: "https://ppid.surakarta.go.id/" 
  },
  { 
    name: "Fasilitas Publik", 
    sub: "Akses Sarpras", 
    icon: "bi-building-fill-check", 
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
              {/* Efek Glow Background */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${item.color}`}></div>

              {/* Box Ikon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg shadow-current/30 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 ${item.color}`}>
                <i className={`bi ${item.icon}`}></i>
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