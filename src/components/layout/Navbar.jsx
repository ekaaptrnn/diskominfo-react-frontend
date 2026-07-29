import { useState, useRef } from "react";
import { Search, Menu, X, ChevronDown, Bell, Moon, Sun, Home, FileText, Info, Star, Newspaper, ClipboardList, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useDateTime } from "@/hooks/UseDateTime";
import { navMenus } from "../../data";

// Mapping icon string ke komponen Lucide
const iconMap = {
  Home, FileText, Info, Star, Newspaper, ClipboardList,
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
    closeTimer.current = setTimeout(() => setDrop(null), 200);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans">
      {/* 1. TOP UTILITY BAR */}
      <div className="hidden md:block border-b border-white/10" style={{ background: "#1c2030" }}>
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <span className="flex items-center gap-2 text-slate-300 text-[11px] font-semibold uppercase tracking-wider">
            <Clock size={12} className="text-slate-400" />
            {currentDateTime}
          </span>

          <div className="flex items-center gap-1">
            <div className="flex items-center gap-3 pr-4 border-r border-white/15">
              <i className="bi bi-instagram text-slate-400 hover:text-white cursor-pointer transition-colors text-[14px]"></i>
              <i className="bi bi-facebook text-slate-400 hover:text-white cursor-pointer transition-colors text-[14px]"></i>
              <i className="bi bi-youtube text-slate-400 hover:text-white cursor-pointer transition-colors text-[14px]"></i>
            </div>
            <a href="tel:02718060" className="pl-4 text-slate-300 text-[11px] font-semibold hover:text-white transition-colors">
              (0271) 806060
            </a>
            <span className="mx-2 text-white/15">|</span>
            <a href="mailto:diskominfosp@surakarta.go.id" className="text-slate-300 text-[11px] font-semibold hover:text-white transition-colors">
              diskominfosp@surakarta.go.id
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAV — solid, tanpa blur/transparansi */}
      <div className="px-4 pt-3 pb-2">
        <div className="max-w-7xl mx-auto rounded-xl bg-primary px-6 py-3 flex items-center justify-between shadow-md">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="bg-white p-1.5 rounded-lg">
              <img src="/logo-solo.png" alt="Logo" className="h-8 w-auto object-contain" />
            </div>
            <div className="leading-none border-l border-white/25 pl-4">
              <h1 className="font-bold text-sm text-white tracking-tight uppercase">Diskominfo SP</h1>
              <p className="text-[8px] font-semibold text-primary-200 uppercase tracking-[0.2em] mt-0.5">Kota Surakarta</p>
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
                  onMouseEnter={() => item.sub && openDropdown(item.label)}
                  onMouseLeave={closeDropdownDelayed}
                >
                  <Link
                    to={item.href.startsWith('#') ? '#' : item.href}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-[11px] font-bold uppercase tracking-tight text-white/85 hover:text-white hover:bg-white/10 transition-colors duration-200"
                  >
                    {Icon && <Icon size={14} className="text-primary-200" />}
                    {item.label}
                    {item.sub && (
                      <ChevronDown
                        size={10}
                        className={`text-primary-200 transition-transform duration-200 ${drop === item.label ? "rotate-180" : ""}`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu — solid putih, tanpa blur */}
                  {item.sub && drop === item.label && (
                    <div
                      onMouseEnter={() => clearTimeout(closeTimer.current)}
                      onMouseLeave={closeDropdownDelayed}
                      className="absolute top-full left-0 mt-2 min-w-64 rounded-xl border border-slate-100 bg-white shadow-lg py-2 z-50"
                    >
                      {item.sub.map((s) => {
                        const routeMap = {
                          "Visi & Misi": "/visi-misi",
                          "Tupoksi": "/tupoksi",
                          "Struktur Organisasi": "/struktur",
                          "Maklumat Layanan": "/maklumat",
                          "Standar Layanan": "/maklumat",
                          "Daftar Informasi Publik": "/ppid?tab=Daftar+Informasi+Publik",
                          "Informasi Berkala": "/ppid?tab=Informasi+Berkala",
                          "Informasi Setiap Saat": "/ppid?tab=Informasi+Setiap+Saat",
                          "Informasi Serta Merta": "/ppid?tab=Informasi+Serta+Merta",
                          "Informasi Dikecualikan": "/ppid?tab=Informasi+Dikecualikan",
                        };
                        // Dukung 2 kemungkinan bentuk data: string biasa, atau { label, href }
                        const label = typeof s === "string" ? s : s.label;
                        const to = typeof s === "string" ? (routeMap[s] || "/") : (s.href || "/");
                        return (
                          <Link
                            key={label}
                            to={to}
                            className="block px-5 py-3 text-[12px] text-primary font-semibold hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0"
                          >
                            {label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Action Buttons — solid, tanpa efek kaca */}
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-lg bg-primary-600 flex items-center justify-center text-white hover:bg-primary-700 transition-colors">
              <Search size={16} />
            </button>
            <button className="w-9 h-9 rounded-lg bg-primary-600 flex items-center justify-center text-white hover:bg-primary-700 transition-colors relative">
              <Bell size={16} />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500 border-2 border-primary" />
            </button>
            <button
              onClick={toggleDark}
              className="w-9 h-9 rounded-lg bg-primary-600 flex items-center justify-center text-white hover:bg-primary-700 transition-colors"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-9 h-9 rounded-lg bg-primary-600 flex items-center justify-center text-white"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu — solid putih */}
        {menuOpen && (
          <div className="lg:hidden max-w-7xl mx-auto mt-2 rounded-xl border border-slate-100 bg-white shadow-lg p-4">
            {navMenus.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <Link
                  key={item.label}
                  to={item.href.startsWith('#') ? '#' : item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-4 px-5 py-3.5 rounded-lg text-xs font-bold uppercase text-primary hover:bg-slate-50 transition-colors"
                >
                  {Icon && <Icon size={16} className="text-primary-400" />}
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}