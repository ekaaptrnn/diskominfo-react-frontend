import { useState, useRef } from "react";
import { 
  Search, Menu, X, ChevronDown, Bell, Moon, Sun, 
  Home, FileText, Info, Star, Newspaper, ClipboardList, Clock 
} from "lucide-react";
import { Link } from "react-router-dom";
// PERBAIKAN 1: Pastikan case-sensitive sesuai nama file Anda (UseDateTime.jsx)
import { useDateTime } from "../../hooks/UseDateTime"; 
import { navMenus } from "../../data";

const iconMap = {
  Home, FileText, Info, Star, Newspaper, ClipboardList, Clock
};

export default function Navbar({ dark, toggleDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [drop, setDrop] = useState(null);
  const closeTimer = useRef(null);
  const currentDateTime = useDateTime(); 

  const openDropdown = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDrop(label);
  };

  const closeDropdownDelayed = () => {
    closeTimer.current = setTimeout(() => {
      setDrop(null);
    }, 500); 
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans">
      {/* 1. TOP UTILITY BAR */}
      <div className="hidden md:block border-b border-white/[0.08]" style={{ background: "#1c2030" }}>
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <span className="flex items-center gap-2 text-blue-200/70 text-[11px] font-bold uppercase tracking-wider">
            <Clock size={12} className="text-blue-400" />
            {currentDateTime || "Memuat..."}
          </span>
          <div className="flex items-center gap-3 text-white/60 text-[14px]">
             <i className="bi bi-instagram hover:text-white cursor-pointer transition-all"></i>
             <i className="bi bi-facebook hover:text-white cursor-pointer transition-all"></i>
             <i className="bi bi-youtube hover:text-white cursor-pointer transition-all"></i>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAV */}
      <div className="px-4 pt-3 pb-2">
        <div className="max-w-7xl mx-auto rounded-2xl border border-white/20 px-6 py-3 flex items-center justify-between shadow-2xl bg-[#1e4f92]/95 backdrop-blur-md">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="bg-white p-1.5 rounded-lg shadow-inner">
               <img src="/logo-solo.png" alt="Logo" className="h-8 w-auto object-contain" />
            </div>
            <div className="leading-none border-l border-white/20 pl-4 text-left text-white">
              <h1 className="font-black text-sm uppercase">Diskominfo SP</h1>
              <p className="text-[8px] font-bold text-blue-200 uppercase tracking-widest mt-0.5">Kota Surakarta</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navMenus && navMenus.map((item) => {
              const Icon = iconMap[item.icon];
              const hasSub = item.sub && item.sub.length > 0;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasSub && openDropdown(item.label)}
                  onMouseLeave={closeDropdownDelayed}
                >
                  <Link
                    to={hasSub ? "#" : (item.href || "/")}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-extrabold uppercase text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
                    onClick={(e) => hasSub && e.preventDefault()}
                  >
                    {Icon && <Icon size={14} className="text-blue-300" />}
                    {item.label}
                    {hasSub && <ChevronDown size={10} className={`transition-transform ${drop === item.label ? "rotate-180" : ""}`} />}
                  </Link>

                  {/* PERBAIKAN 2: Logika Mapping Dropdown Anti-Crash */}
                  {hasSub && drop === item.label && (
                    <div
                      onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current); }}
                      onMouseLeave={closeDropdownDelayed}
                      className="absolute top-full left-0 mt-2 min-w-64 rounded-2xl border border-slate-100 shadow-2xl py-2 z-50 bg-white animate-in fade-in slide-in-from-top-2 duration-200"
                    >
                      {item.sub.map((s, idx) => {
                        // Menangani jika 's' adalah string ATAU object
                        const label = typeof s === "object" ? s.label : s;
                        
                        const routeMap = {
                          "Visi & Misi": "/visi-misi",
                          "Struktur Organisasi": "/struktur",
                          "Tupoksi": "/tupoksi",
                          "Maklumat Layanan": "/maklumat",
                          "Standar Layanan": "/maklumat",
                          "Daftar Informasi Publik": "/ppid?tab=daftar",
                          "Informasi Berkala": "/ppid?tab=berkala",
                          "Informasi Setiap Saat": "/ppid?tab=setiap-saat",
                          "Informasi Serta Merta": "/ppid?tab=serta-merta",
                          "Informasi Dikecualikan": "/ppid?tab=dikecualikan",
                        };

                        return (
                          <Link
                            key={idx}
                            to={routeMap[label] || "/"}
                            className="block px-5 py-3 text-[12px] text-slate-700 font-bold hover:bg-blue-50 hover:text-[#1e4f92] transition-colors border-b border-slate-50 last:border-0"
                          >
                            {label} {/* Pastikan yang dirender adalah STRING, bukan OBJECT */}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"><Search size={16} /></button>
            <button className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white relative hover:bg-white/20">
              <Bell size={16} />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500 border-2 border-[#1e4f92]" />
            </button>
            <button onClick={toggleDark} className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20">
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white">
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (PERBAIKAN 3: Icon Mapping) */}
        {menuOpen && (
          <div className="lg:hidden max-w-7xl mx-auto mt-2 rounded-2xl border border-white/10 shadow-2xl p-4 bg-white animate-in slide-in-from-top-4 duration-300">
            {navMenus.map((item) => {
               const Icon = iconMap[item.icon]; // Ambil komponen dari map
               return (
                <Link
                  key={item.label}
                  to={item.href || "/"}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-4 px-5 py-3.5 rounded-xl text-xs font-black uppercase text-slate-700 hover:bg-blue-50 transition-all"
                >
                  {Icon && <Icon size={16} className="text-blue-500" />}
                  {item.label}
                </Link>
               )
            })}
          </div>
        )}
      </div>
    </header>
  );
}