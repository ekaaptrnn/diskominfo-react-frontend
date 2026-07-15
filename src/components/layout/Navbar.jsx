import { Link } from 'react-router-dom';
import { useDateTime } from '../../hooks/UseDateTime';

export default function Navbar() {
  const currentDateTime = useDateTime();

  return (
    <header className="fixed top-0 w-full z-50 px-4 md:px-10 pt-4 font-sans">
      {/* 1. TOP BAR - Info & Sosmed */}
      <div className="flex justify-between items-center text-[10px] md:text-xs text-slate-500 mb-3 px-6 font-semibold">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <i className="bi bi-clock text-primary"></i>
            {currentDateTime}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-4 border-r border-slate-200 pr-4">
            <i className="bi bi-instagram hover:text-primary transition cursor-pointer"></i>
            <i className="bi bi-facebook hover:text-primary transition cursor-pointer"></i>
            <i className="bi bi-youtube hover:text-primary transition cursor-pointer"></i>
          </div>
          <span className="hidden md:block tracking-tight">(0271) 806060</span>
          <span className="hidden md:block tracking-tight">diskominfosp@surakarta.go.id</span>
        </div>
      </div>

      {/* 2. FLOATING NAVBAR - Navy Theme */}
      <nav className="glass-header rounded-2xl md:rounded-3xl px-8 py-3 flex justify-between items-center text-white shadow-2xl">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-4 group">
          <img src="/logo-putih.png" className="h-9 md:h-10 transition-transform group-hover:scale-105" alt="Logo" />
          <div className="leading-none border-l border-white/20 pl-4">
            <h1 className="font-black text-sm tracking-tighter uppercase">Diskominfo SP</h1>
            <p className="text-[8px] font-bold uppercase opacity-70 tracking-widest">Kota Surakarta</p>
          </div>
        </Link>

        {/* Menu Links */}
        <div className="hidden lg:flex items-center gap-7 text-[11px] font-bold uppercase tracking-tight">
          <Link to="/" className="opacity-80 hover:opacity-100 transition-opacity">Home</Link>
          
          {/* Dropdown PPID */}
          <div className="group relative py-2">
            <button className="flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
              PPID <i className="bi bi-chevron-down text-[8px]"></i>
            </button>
            <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-4 group-hover:translate-y-1 border border-slate-100">
              <Link to="/ppid-berkala" className="block p-4 hover:bg-slate-50 rounded-xl text-slate-700 normal-case font-bold transition-colors">Informasi Publik Berkala</Link>
              <Link to="/ppid-setiap-saat" className="block p-4 hover:bg-slate-50 rounded-xl text-slate-700 normal-case font-bold transition-colors">Informasi Setiap Saat</Link>
            </div>
          </div>

          {/* Dropdown Profil - Highlighting Style sesuai V11 */}
          <div className="group relative py-2">
            <button className="flex items-center gap-1 bg-white/10 px-4 py-2 rounded-xl hover:bg-white/20 transition-all">
              Profil <i className="bi bi-chevron-down text-[8px]"></i>
            </button>
            <div className="absolute top-full left-0 w-56 bg-white rounded-2xl shadow-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-4 group-hover:translate-y-1 border border-slate-100">
              <Link to="/visi-misi" className="block p-4 hover:bg-slate-50 rounded-xl text-slate-700 normal-case font-bold transition-colors">Visi & Misi</Link>
              <Link to="/struktur" className="block p-4 hover:bg-slate-50 rounded-xl text-slate-700 normal-case font-bold transition-colors">Struktur Organisasi</Link>
              <Link to="/tupoksi" className="block p-4 hover:bg-slate-50 rounded-xl text-slate-700 normal-case font-bold transition-colors">Tupoksi</Link>
            </div>
          </div>

          <Link to="/skm" className="opacity-80 hover:opacity-100 transition-opacity">SKM</Link>
          <Link to="/artikel" className="opacity-80 hover:opacity-100 transition-opacity">Informasi</Link>

          {/* Dropdown Layanan */}
          <div className="group relative py-2">
            <button className="flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
              Layanan <i className="bi bi-chevron-down text-[8px]"></i>
            </button>
            <div className="absolute top-full right-0 w-64 bg-white rounded-2xl shadow-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-4 group-hover:translate-y-1 border border-slate-100">
              <Link to="/maklumat" className="block p-4 hover:bg-slate-50 rounded-xl text-slate-700 normal-case font-black transition-colors text-primary">Maklumat Layanan</Link>
              <Link to="/standar-pelayanan" className="block p-4 hover:bg-slate-50 rounded-xl text-slate-700 normal-case font-bold transition-colors">Standar Pelayanan</Link>
            </div>
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-1 md:gap-2">
          <button className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors">
            <i className="bi bi-search"></i>
          </button>
          <button className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors relative">
            <i className="bi bi-bell"></i>
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#1e4b8f]"></span>
          </button>
          <button className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors">
            <i className="bi bi-moon-stars"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}