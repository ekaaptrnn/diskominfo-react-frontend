// src/components/sections/PrestasiSection.jsx
const prestasi = [
  { title: "Smart City Award", agency: "Kementerian Kominfo RI", year: "2025", icon: "bi-trophy", color: "bg-orange-500" },
  { title: "Pengawasan Kearsipan A", agency: "ANRI", year: "2025", icon: "bi-award", color: "bg-sky-500" },
  { title: "Pemanfaatan SRIKANDI", agency: "ANRI — SPBE", year: "2024", icon: "bi-patch-check", color: "bg-purple-500" },
  { title: "Keterbukaan Informasi", agency: "Komisi Informasi Jateng", year: "2024", icon: "bi-star", color: "bg-teal-500" },
];

export default function PrestasiSection() {
  return (
    <section className="py-20 bg-sky-50/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white text-sky-600 px-4 py-1.5 rounded-full mb-4 font-bold text-[10px] uppercase border border-sky-100 shadow-sm">
           <span className="w-1.5 h-1.5 bg-sky-600 rounded-full animate-ping"></span> Prestasi
        </div>
        <h2 className="text-4xl font-black text-slate-800 mb-16 tracking-tighter">Prestasi & Penghargaan</h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {prestasi.map((p, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-sky-100 shadow-sm hover:-translate-y-2 transition-all flex flex-col items-center group">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:rotate-12 transition-transform ${p.color}`}>
                <i className={`bi ${p.icon}`}></i>
              </div>
              <h3 className="font-bold text-slate-800 mb-1 leading-tight text-sm md:text-base">{p.title}</h3>
              <p className="text-[10px] font-bold text-sky-400 uppercase mb-4 tracking-tighter">{p.agency}</p>
              <span className="bg-sky-50 text-primary text-[10px] font-black px-4 py-1 rounded-full border border-sky-100">{p.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}