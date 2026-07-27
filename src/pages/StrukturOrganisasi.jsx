import { useEffect, useState } from "react";
import { api, BASE_URL } from "../services/api";

function getFotoUrl(p) {
    if (!p.foto) return "https://ui-avatar.co/300?u=" + p.id;
    if (p.foto.startsWith("http")) return p.foto;
    return `${BASE_URL}/storage/${p.foto}`; 
}

export default function StrukturOrganisasi() {
  const [pejabatList, setPejabatList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    api.get("/pejabat")
      .then((res) => {
        const data = res.data.data || res.data || [];
        if (isMounted) setPejabatList(data);
      })
      .catch((err) => {
        console.error("Gagal memuat struktur organisasi:", err);
        if (isMounted) setError("Gagal mengambil data struktur organisasi dari server.");
      })
      .finally(() => { if (isMounted) setLoading(false); });
    return () => { isMounted = false; };
  }, []);

  // Pimpinan utama (Kepala & Sekretaris) ditampilkan lebih besar di atas,
  // sisanya (pejabat bidang) ditampilkan dalam grid di bawahnya.
  const pimpinanUtama = pejabatList.filter((p) => p.tampil_utama);
  const pejabatBidang = pejabatList.filter((p) => !p.tampil_utama);

  return (
    <div className="pt-44 pb-20 px-6 max-w-6xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">Kelembagaan</span>
        <h1 className="text-4xl font-black text-slate-800 tracking-tighter mt-4">Struktur Organisasi</h1>
        <p className="text-slate-500 mt-3 max-w-xl mx-auto">
          Susunan pimpinan dan pejabat di lingkungan Dinas Komunikasi, Informatika, Statistik, dan Persandian Kota Surakarta.
        </p>
      </div>

      {loading ? (
        <div className="py-20 text-center text-slate-400 font-medium">Memuat data...</div>
      ) : error ? (
        <div className="py-20 text-center text-red-500 font-medium">{error}</div>
      ) : pejabatList.length === 0 ? (
        <div className="py-20 text-center text-slate-400 font-medium italic">Data struktur organisasi belum tersedia.</div>
      ) : (
        <>
          {pimpinanUtama.length > 0 && (
            <div className="flex flex-wrap justify-center gap-16 mb-20 pb-16 border-b border-slate-100">
              {pimpinanUtama.map((p) => (
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

          {pejabatBidang.length > 0 && (
            <>
              <h2 className="text-center text-lg font-black text-slate-700 uppercase tracking-widest mb-10">Anggota Bidang</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {pejabatBidang.map((p) => (
                  <div key={p.id} className="text-center bg-white rounded-3xl border border-slate-100 p-6 hover:shadow-lg transition">
                    <img src={getFotoUrl(p)} className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg mx-auto" alt={p.nama} />
                    <h3 className="mt-5 font-bold text-slate-800 text-sm leading-tight">{p.nama}</h3>
                    <p className="text-primary-700 font-semibold text-[11px] uppercase tracking-wide mt-1">{p.jabatan}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
