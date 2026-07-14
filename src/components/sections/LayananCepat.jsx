// src/components/sections/LayananCepat.jsx

const quickLinks = [
  { name: "LAPOR SP4N", icon: "bi-megaphone", color: "bg-rose-500" },
  { name: "Lapor Gub", icon: "bi-bank", color: "bg-orange-500" },
  { name: "ULAS", icon: "bi-chat-dots", color: "bg-emerald-500" },
  { name: "Lapor Mas Wali", icon: "bi-person-badge", color: "bg-blue-500" },
  { name: "KONATA", icon: "bi-headset", color: "bg-purple-500" },
  { name: "Solo Data", icon: "bi-bar-chart-line", color: "bg-sky-500" },
  { name: "PPID Pelaksana", icon: "bi-file-earmark-lock", color: "bg-pink-500" },
  { name: "Fasilitas Publik", icon: "bi-building", color: "bg-indigo-500" },
];

export default function LayananCepat() {
  return (
    <section className="py-10 text-center bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Label Kecil sesuai Blueprint */}
        <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-600 px-4 py-1.5 rounded-full mb-4 font-bold text-[10px] uppercase border border-sky-100">
          <span className="w-1.5 h-1.5 bg-sky-600 rounded-full animate-pulse"></span> Layanan Digital
        </div>

        <h2 className="text-3xl font-black text-slate-800 mb-2 tracking-tighter">Layanan Cepat</h2>
        <p className="text-slate-400 text-sm mb-12">Akses layanan publik Kota Surakarta dalam satu klik</p>

        {/* Grid Ikon 8 Layanan */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6">
          {quickLinks.map((item, i) => (
            <div key={i} className="group cursor-pointer flex flex-col items-center">
              {/* Box Ikon - Sesuai Point #2: Icon class ini nantinya di-load dari DB */}
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white text-xl md:text-2xl shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl ${item.color}`}>
                <i className={`bi ${item.icon}`}></i>
              </div>
              
              {/* Nama Layanan */}
              <p className="mt-4 text-[9px] md:text-[10px] font-black text-slate-600 uppercase tracking-tighter leading-tight text-center group-hover:text-primary transition-colors">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}