import React, { useState, useEffect } from "react";
import { MapPin, Info, ExternalLink, Users, ChevronRight } from "lucide-react";
import { visitorStats } from '../../data';
import axios from "axios";

export default function Footer() {
  // State untuk menampung data statistik dari Backend
  const [visitorStats, setVisitorStats] = useState([
    { label: "Hari Ini", value: "..." },
    { label: "Kemarin", value: "..." },
    { label: "Bulan Ini", value: "..." },
    { label: "Total", value: "..." },
  ]);

  // Logic Fetching dari Backend Laravel
  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Sesuaikan endpoint ini dengan API Laravel Anda nanti (Blueprint Bab IV)
        const response = await axios.get("/api/visitor-stats");
        if (response.data) {
          setVisitorStats([
            { label: "Hari Ini", value: response.data.today },
            { label: "Kemarin", value: response.data.yesterday },
            { label: "Bulan Ini", value: response.data.month },
            { label: "Total", value: response.data.total },
          ]);
        }
      } catch (error) {
        console.error("Gagal mengambil data statistik:", error);
        // Tetap biarkan "..." jika gagal agar tidak merusak UI
      }
    };

    fetchStats();
  }, []);

  return (
    <footer
      className="border-t border-white/[0.1] mt-10 font-sans"
      style={{ background: "#0d1a36" }}
    >
      {/* 1. TOP BAR: Banner Organisasi Terkait (Statis sesuai Branding) */}
      <div className="border-b border-white/[0.08] px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-8 md:gap-12">
          {[
            {
              name: "PPID Kota Surakarta",
              sub: "Pejabat Pengelola Informasi & Dokumentasi",
              g: "from-[#29A8E0] to-[#1e4f92]",
              initial: "P",
            },
            {
              name: "SoloData",
              sub: "Portal Data Terbuka",
              g: "from-cyan-500 to-sky-600",
              initial: "S",
            },
            {
              name: "Pemerintah Kota Surakarta",
              sub: "Kota Bengawan",
              g: "from-emerald-500 to-teal-600",
              initial: "P",
            },
          ].map((org) => (
            <div key={org.name} className="flex items-center gap-3 group cursor-pointer">
              <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 ${org.g}`}
              >
                <span className="text-white font-black text-sm">
                  {org.initial}
                </span>
              </div>
              <div>
                <p className="text-white font-extrabold text-sm leading-tight group-hover:text-sky-400 transition-colors">
                  {org.name}
                </p>
                <p className="text-blue-300/60 text-[10px] font-medium uppercase tracking-tighter mt-0.5">{org.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT */}
      <div className="px-6 py-12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Kolom 1: Lokasi */}
        <div>
          <h4 className="text-[#29A8E0] font-black text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
            <MapPin size={14} strokeWidth={3} /> Lokasi
          </h4>
          <div className="rounded-2xl overflow-hidden border border-white/[0.12] mb-4 shadow-2xl aspect-video relative group">
            <iframe
              title="Lokasi Diskominfo SP"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.123!2d110.8265!3d-7.5558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a168636a0d0d1%3A0x6b1f2382e2136e05!2sBalaikota%20Surakarta!5e0!3m2!1sen!2sid!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              className="grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
          </div>
          <p className="text-blue-300/65 text-[11px] leading-relaxed font-medium">
            Gedung Bale Upakari Lantai 3, Jl. Jenderal Sudirman No. 2,
            Kompleks Balaikota Surakarta 57133
          </p>
        </div>

        {/* Kolom 2: Informasi Publik */}
        <div>
          <h4 className="text-[#29A8E0] font-black text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
            <Info size={14} strokeWidth={3} /> Informasi Publik
          </h4>
          <div className="flex flex-col gap-1">
            {["Informasi Berkala", "Informasi Setiap Saat", "Informasi Serta Merta", "Informasi Dikecualikan"].map((item) => (
              <a key={item} href="#" className="flex items-center gap-2 text-blue-300/65 text-xs py-2 hover:text-white transition-all group border-b border-white/5 last:border-0">
                <ChevronRight size={10} className="text-[#29A8E0]/50 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                <span className="font-bold tracking-tight">{item}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Kolom 3: Link Terkait */}
        <div>
          <h4 className="text-[#29A8E0] font-black text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
            <ExternalLink size={14} strokeWidth={3} /> Link Terkait
          </h4>
          <div className="flex flex-col gap-1">
            {["Pemerintah Kota Surakarta", "PPID Kota Surakarta", "Solo Data", "Kominfo RI"].map((item) => (
              <a key={item} href="#" className="flex items-center gap-2 text-blue-300/65 text-xs py-2 hover:text-white transition-all group border-b border-white/5 last:border-0">
                <ChevronRight size={10} className="text-[#29A8E0]/50 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                <span className="font-bold tracking-tight">{item}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Kolom 4: Pengunjung (DINAMIS DARI BACKEND) */}
        <div>
          <h4 className="text-[#29A8E0] font-black text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
            <Users size={14} strokeWidth={3} /> Pengunjung
          </h4>
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
            {visitorStats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between py-2.5 border-b border-white/[0.07] last:border-0"
              >
                <span className="text-blue-300/65 text-[11px] font-bold uppercase tracking-tight">{stat.label}</span>
                <span className="text-white font-black text-sm tabular-nums tracking-tighter">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. BOTTOM BAR */}
      <div className="border-t border-white/[0.07] px-6 py-6 text-center sm:text-left">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-blue-300/40 text-[10px] font-bold uppercase tracking-[0.15em]">
          <p>© 2026 — Pemerintah Kota Surakarta. Hak cipta dilindungi undang-undang.</p>
          <p className="text-[#29A8E0]/60 uppercase">Dinas Komunikasi Informatika dan Persandian Kota Surakarta</p>
        </div>
      </div>
    </footer>
  );
}