import { useState } from "react";
import { Search, Menu, X, ChevronDown, Bell, Moon, Sun, Home, FileText, Info, Star, Newspaper, ClipboardList, Clock} from "lucide-react";
import { Link } from "react-router-dom";
import { useDateTime } from "@/hooks/useDateTime";
import { navMenus } from "../../data";

// Mapping icon string ke komponen Lucide
const iconMap = {
  Home, FileText, Info, Star, Newspaper, ClipboardList,
};

export default function Navbar({ dark, toggleDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [drop, setDrop] = useState(null);
  
  // Mengambil waktu dari Hook (Poin #1 Blueprint)
  const currentDateTime = useDateTime(); 

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans">
      {/* 1. TOP UTILITY BAR (Selalu Charcoal Dark) */}
      <div
        className="hidden md:block border-b border-white/[0.08]"
        style={{ background: "#1c2030" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <span className="flex items-center gap-2 text-blue-300/70 text-[11px] font-bold uppercase tracking-wider">
            <Clock size={12} className="text-[#29A8E0]" />
            {currentDateTime}
          </span>
          
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-3 pr-4 border-r border-white/15">
            <i className="bi bi-instagram text-blue-300/60 hover:text-white cursor-pointer transition-all text-[14px]"></i>
            <i className="bi bi-facebook text-blue-300/60 hover:text-white cursor-pointer transition-all text-[14px]"></i>
            <i className="bi bi-youtube text-blue-300/60 hover:text-white cursor-pointer transition-all text-[14px]"></i>
            </div>
            <a href="tel:02718060" className="pl-4 text-blue-300/70 text-[11px] font-bold hover:text-white transition-colors">
              (0271) 806060
            </a>
            <span className="mx-2 text-white/10">|</span>
            <a href="mailto:diskominfosp@surakarta.go.id" className="text-blue-300/70 text-[11px] font-bold hover:text-white transition-colors">
              diskominfosp@surakarta.go.id
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAV (Royal Blue Floating) */}
      <div className="px-4 pt-3 pb-2">
        <div
          className="max-w-7xl mx-auto rounded-2xl border border-white/20 px-6 py-3 flex items-center justify-between shadow-2xl"
          style={{
            background: "rgba(30,79,146,0.95)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)",
          }}
        >
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="bg-white p-1.5 rounded-lg shadow-inner">
               <img src="/logo-solo.png" alt="Logo" className="h-8 w-auto object-contain" />
            </div>
            <div className="leading-none border-l border-white/20 pl-4">
              <h1 className="font-black text-sm text-white tracking-tighter uppercase">Diskominfo SP</h1>
              <p className="text-[8px] font-bold text-blue-200 uppercase tracking-[0.2em] mt-0.5">Kota Surakarta</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navMenus.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.sub && setDrop(item.label)}
                  onMouseLeave={() => setDrop(null)}
                >
                  <Link
                    to={item.href.startsWith('#') ? '#' : item.href}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-extrabold uppercase tracking-tight text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
                  >
                    {Icon && <Icon size={14} className="text-[#29A8E0]" />}
                    {item.label}
                    {item.sub && (
                      <ChevronDown
                        size={10}
                        className={`text-[#29A8E0]/70 transition-transform duration-300 ${drop === item.label ? "rotate-180" : ""}`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.sub && drop === item.label && (
                    <div
                      className="absolute top-full left-0 mt-2 min-w-64 rounded-2xl border border-white shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                      style={{ background: "rgba(255,255,255,0.98)", backdropFilter: "blur(10px)" }}
                    >
                      {item.sub.map((s) => {
                        const routeMap = {
                          "Visi & Misi": "/visi-misi",
                          "Tupoksi": "/tupoksi",
                          "Struktur Organisasi": "/struktur",
                          "Maklumat Layanan": "/maklumat",
                          "Standar Layanan": "/maklumat",
                        };
                        return (
                          <Link
                            key={s}
                            to={routeMap[s] || "/"}
                            className="block px-5 py-3 text-[12px] text-[#1e4f92] font-bold hover:bg-blue-50 transition-colors border-b border-slate-50 last:border-0"
                          >
                            {s}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all">
              <Search size={16} />
            </button>
            <button className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all relative">
              <Bell size={16} />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500 border-2 border-[#1e4f92]" />
            </button>
            <button
              onClick={toggleDark}
              className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="lg:hidden max-w-7xl mx-auto mt-2 rounded-2xl border border-white/20 shadow-2xl p-4 animate-in slide-in-from-top-4 duration-300"
            style={{ background: "rgba(255,255,255,0.98)", backdropFilter: "blur(20px)" }}
          >
            {navMenus.map((item) => (
              <Link
                key={item.label}
                to={item.href.startsWith('#') ? '#' : item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-4 px-5 py-3.5 rounded-xl text-xs font-black uppercase text-[#1e4f92] hover:bg-blue-50 transition-all"
              >
                {iconMap[item.icon] && <item.icon size={16} className="text-[#29A8E0]" />}
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}