// src/components/sections/StructureSection.jsx
const pimpinan = [
  { nama: "xxx", jabatan: "Kepala Dinas", foto: "https://i.pravatar.cc/150?u=1" },
  { nama: "xx", jabatan: "Sekretaris Dinas", foto: "https://i.pravatar.cc/150?u=2" }
];

export default function StructureSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">Kelembagaan</span>
          <h2 className="text-4xl font-black text-slate-800 tracking-tighter mt-4">Struktur Organisasi</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          {pimpinan.map((p, i) => (
            <div key={i} className="text-center group">
              <div className="relative inline-block">
                <div className="absolute -inset-2 bg-gradient-to-tr from-primary to-sky-300 rounded-full blur opacity-20 group-hover:opacity-40 transition"></div>
                <img src={p.foto} className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-2xl" alt={p.nama} />
              </div>
              <h3 className="mt-8 font-black text-xl text-slate-800 leading-tight">{p.nama}</h3>
              <p className="text-primary font-bold text-sm uppercase tracking-widest mt-2">{p.jabatan}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <button className="bg-slate-50 text-slate-400 px-8 py-3 rounded-2xl font-bold text-xs hover:bg-primary hover:text-white transition">Lihat Seluruh Pejabat Bidang <i className="bi bi-chevron-right ml-2"></i></button>
        </div>
      </div>
    </section>
  );
}