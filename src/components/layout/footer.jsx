import React, { useState, useEffect } from "react";
import { MapPin, Info, ExternalLink, Users, ChevronRight } from "lucide-react";
import { api } from "../../services/api";

// PASTIKAN PATH IMPORT INI SUDAH BENAR SESUAI FOLDER ANDA
import logoPPID from "../../assets/footer/logo-ppid.png"; 
import logoSoloData from "../../assets/footer/logo-solodata.png";
import logoPemkot from "../../assets/footer/logo-pemkot.png";

export default function Footer() {
  const [visitorStats, setVisitorStats] = useState([
    { label: "Hari Ini", value: "..." },
    { label: "Kemarin", value: "..." },
    { label: "Bulan Ini", value: "..." },
    { label: "Total", value: "..." },
  ]);

  useEffect(() => {
    api
      .get("/visitor-stats")
      .then((response) => {
        if (response.data) {
          setVisitorStats([
            { label: "Hari Ini", value: response.data.today },
            { label: "Kemarin", value: response.data.yesterday },
            { label: "Bulan Ini", value: response.data.month },
            { label: "Total", value: response.data.total },
          ]);
        }
      })
      .catch((error) => {
        console.error("Gagal mengambil data statistik:", error);
      });
  }, []);

  // DATA ORGANISASI (Menggunakan gambar yang di-import)
  const orgsData = [
    { name: "PPID Kota Surakarta", sub: "Pejabat Pengelola Informasi & Dokumentasi", img: logoPPID },
    { name: "SoloData", sub: "Portal Data Terbuka", img: logoSoloData },
    { name: "Pemerintah Kota Surakarta", sub: "Kota Bengawan", img: logoPemkot },
  ];

  // Duplikasi data agar animasi berjalan mulus (seamless loop)
  const duplicatedOrgs = [...orgsData, ...orgsData, ...orgsData, ...orgsData, ...orgsData];

  return (
    <footer
      className="relative border-t border-white/[0.1] mt-10 font-sans overflow-hidden"
      style={{ background: "#0d1a36" }}
    >
      {/* CSS Animasi Marquee (Berjalan ke Kiri) */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}
      </style>

      <div className="pointer-events-none absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 w-96 h-96 rounded-full bg-primary-400/10 blur-3xl" />

{/* 1. TOP BAR: Banner Organisasi Terkait (Animasi Berjalan) */}
      <div className="relative border-b border-white/[0.08] py-4 backdrop-blur-sm flex overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
          {duplicatedOrgs.map((org, idx) => (
            <div key={idx} className="flex items-center gap-4 group cursor-pointer px-8 md:px-12 shrink-0">
              
              <div className="flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={org.img} 
                  alt={org.name} 
                  className="h-10 md:h-12 w-auto object-contain" 
                />
              </div>
              {/* ------------------------------------------------------------- */}

              <div>
                <p className="text-white font-extrabold text-sm leading-tight group-hover:text-accent-300 transition-colors whitespace-nowrap">
                  {org.name}
                </p>
                <p className="text-accent-300/60 text-[10px] font-medium uppercase tracking-tighter mt-0.5 whitespace-nowrap">
                  {org.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT */}
      <div className="relative px-6 py-8 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="text-[#29A8E0] font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
            <MapPin size={14} strokeWidth={3} /> Lokasi
          </h4>
          <div className="rounded-2xl overflow-hidden border border-white/[0.12] backdrop-blur-md mb-3 shadow-2xl aspect-video relative group">
            <iframe
              title="Lokasi Diskominfo SP"
              src="https://www.google.com/maps/embed?pb=!4v1734939493818!6m8!1m7!1sEMnwbMTeFGkcxFes8-B2Uw!2m2!1d-7.569603056266332!2d110.8302433182977!3f280.0793134817006!4f3.5826201913691733!5f2.95541210923602"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              className="grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
          </div>
          <p className="text-accent-300/65 text-[11px] leading-relaxed font-medium">
            Gedung Bale Upakari Lantai 3, Jl. Jenderal Sudirman No. 2,
            Kompleks Balaikota Surakarta 57133
          </p>
        </div>

        <div>
          <h4 className="text-[#29A8E0] font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
            <Info size={14} strokeWidth={3} /> Informasi Publik
          </h4>
          <div className="flex flex-col gap-1">
            {["Informasi Berkala", "Informasi Setiap Saat", "Informasi Serta Merta", "Informasi Dikecualikan"].map((item) => (
              <a key={item} href="#" className="flex items-center gap-2 text-accent-300/65 text-xs py-1.5 hover:text-white transition-all group border-b border-white/5 last:border-0">
                <ChevronRight size={10} className="text-[#29A8E0]/50 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                <span className="font-bold tracking-tight">{item}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[#29A8E0] font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
            <ExternalLink size={14} strokeWidth={3} /> Link Terkait
          </h4>
          <div className="flex flex-col gap-1">
            {["Pemerintah Kota Surakarta", "PPID Kota Surakarta", "Solo Data", "Kominfo RI"].map((item) => (
              <a key={item} href="#" className="flex items-center gap-2 text-accent-300/65 text-xs py-1.5 hover:text-white transition-all group border-b border-white/5 last:border-0">
                <ChevronRight size={10} className="text-[#29A8E0]/50 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                <span className="font-bold tracking-tight">{item}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[#29A8E0] font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
            <Users size={14} strokeWidth={3} /> Pengunjung
          </h4>
          <div className="bg-white/[0.06] backdrop-blur-md rounded-2xl p-3 border border-white/10">
            {visitorStats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between py-1.5 border-b border-white/[0.07] last:border-0"
              >
                <span className="text-accent-300/65 text-[11px] font-bold uppercase tracking-tight">{stat.label}</span>
                <span className="text-white font-black text-sm tabular-nums tracking-tighter">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. BOTTOM BAR */}
      <div className="relative border-t border-white/[0.07] px-6 py-4 text-center sm:text-left">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-accent-300/40 text-[10px] font-bold uppercase tracking-[0.15em]">
          <p>© 2026 — Pemerintah Kota Surakarta. Hak cipta dilindungi undang-undang.</p>
          <p className="text-[#29A8E0]/60 uppercase">Dinas Komunikasi Informatika dan Persandian Kota Surakarta</p>
        </div>
      </div>
    </footer>
  );
}