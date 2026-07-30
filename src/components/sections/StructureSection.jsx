import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, BASE_URL } from "../../services/api";

function getFotoUrl(p) {
  if (!p.foto) return "https://i.pravatar.cc/300?u=" + p.id; // fallback avatar generik
  if (p.foto.startsWith("http")) return p.foto;
  return `${BASE_URL}/storage/${p.foto}`;
}

export default function StructureSection() {
  const [pimpinan, setPimpinan] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    api.get("/pejabat")
      .then((res) => {
        const data = res.data.data || res.data || [];
        // Hanya tampilkan yang ditandai admin untuk muncul di beranda
        const utama = data.filter((p) => p.tampil_utama);
        if (isMounted) setPimpinan(utama);
      })
      .catch((err) => console.error("Gagal memuat struktur organisasi:", err))
      .finally(() => { if (isMounted) setLoading(false); });
    return () => { isMounted = false; };
  }, []);

  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">Kelembagaan</span>
          <h2 className="text-4xl font-black text-slate-800 tracking-tighter mt-4">Struktur Organisasi</h2>
        </div>

        {loading ? (
          <div className="text-center text-slate-400 font-medium py-10">Memuat data pimpinan...</div>
        ) : pimpinan.length === 0 ? (
          <div className="text-center text-slate-400 font-medium italic py-10">Data pimpinan belum tersedia.</div>
        ) : (
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            {pimpinan.map((p) => (
              <div key={p.id} className="text-center group">
                <div className="relative inline-block">
                  <div className="absolute -inset-2 bg-gradient-to-tr from-primary to-accent-300 rounded-full blur opacity-20 group-hover:opacity-40 transition"></div>
                  <img src={getFotoUrl(p)} className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-2xl" alt={p.nama} />
                </div>
                <h3 className="mt-8 font-black text-xl text-slate-800 leading-tight">{p.nama}</h3>
                <p className="text-primary font-bold text-sm uppercase tracking-widest mt-2">{p.jabatan}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <Link to="/struktur" className="inline-block bg-slate-50 text-slate-400 px-8 py-3 rounded-2xl font-bold text-xs hover:bg-primary hover:text-white transition">
            Lihat Seluruh Pejabat Bidang <i className="bi bi-chevron-right ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
