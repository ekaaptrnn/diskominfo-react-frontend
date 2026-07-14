import { useDateTime } from '../../hooks/useDateTime';

export default function Navbar() {
  const currentDateTime = useDateTime();

  return (
    <header className="fixed top-0 w-full z-50 px-4 md:px-10 pt-2">
      <div className="flex justify-between items-center text-[10px] md:text-xs text-slate-500 mb-2 px-4 font-medium">
        <span><i className="bi bi-clock mr-2 text-primary"></i>{currentDateTime}</span>
        <div className="flex gap-4">
           <div className="flex gap-3 border-r border-slate-200 pr-4">
              <i className="bi bi-instagram hover:text-primary transition cursor-pointer"></i>
              <i className="bi bi-youtube hover:text-primary transition cursor-pointer"></i>
           </div>
           <span>diskominfosp@surakarta.go.id</span>
        </div>
      </div>

      <nav className="glass-nav rounded-3xl px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo-solo.png" className="h-9" alt="Solo" />
          <div className="leading-tight">
            <h1 className="font-extrabold text-primary text-sm tracking-tighter">DISKOMINFO SP</h1>
            <p className="text-[8px] text-slate-400 font-bold uppercase">Surakarta</p>
          </div>
        </div>

        <div className="hidden xl:flex items-center gap-6 text-[11px] font-bold text-slate-600 uppercase tracking-tight">
          <a href="/" className="text-primary">Home</a>
          
          {/* Dropdown Profil */}
          <div className="group relative py-2">
            <button className="hover:text-primary flex items-center gap-1">Profil <i className="bi bi-chevron-down text-[8px]"></i></button>
            <div className="absolute top-full left-0 w-56 bg-white shadow-2xl rounded-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-slate-100 translate-y-2 group-hover:translate-y-0">
              <a href="/struktur" className="block p-3 hover:bg-sky-50 rounded-xl transition">Struktur Organisasi</a>
              <a href="/visi-misi" className="block p-3 hover:bg-sky-50 rounded-xl transition">Visi Misi</a>
              <a href="/tupoksi" className="block p-3 hover:bg-sky-50 rounded-xl transition">Tupoksi</a>
            </div>
          </div>

          {/* Dropdown PPID */}
          <div className="group relative py-2">
            <button className="hover:text-primary flex items-center gap-1">PPID <i className="bi bi-chevron-down text-[8px]"></i></button>
            <div className="absolute top-full left-0 w-72 bg-white shadow-2xl rounded-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-slate-100 translate-y-2 group-hover:translate-y-0 grid grid-cols-1 gap-4">
              <div>
                <p className="text-[9px] text-primary font-black mb-2 opacity-50">Informasi Publik</p>
                <div className="space-y-1">
                  <a href="#" className="block py-1 hover:text-primary transition capitalize">Daftar Informasi Publik</a>
                  <a href="#" className="block py-1 hover:text-primary transition capitalize">Informasi Berkala / Setiap Saat</a>
                </div>
              </div>
              <div>
                <p className="text-[9px] text-primary font-black mb-2 opacity-50">Layanan</p>
                <a href="#" className="block py-1 hover:text-primary transition capitalize">Mekanisme Permohonan</a>
              </div>
            </div>
          </div>

          <a href="/artikel" className="hover:text-primary">Informasi</a>
          <a href="/skm" className="bg-sky-100 text-primary px-4 py-2 rounded-xl hover:bg-primary hover:text-white transition">Isi SKM</a>
        </div>
      </nav>
    </header>
  );
}