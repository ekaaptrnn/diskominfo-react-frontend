import { useEffect, useState } from "react";
import { api, BASE_URL } from "../../services/api";

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

  const pimpinanUtama = pejabatList.filter((p) => p.tampil_utama);
  const pejabatBidang = pejabatList.filter((p) => !p.tampil_utama);

  return (
    <div className="pt-44 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px]">Kelembagaan</span>
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
        <div className="w-full overflow-x-auto overflow-y-hidden pb-12 pt-4">
          <div className="min-w-max flex flex-col items-center mx-auto px-10">

            {/* LEVEL 1: Pimpinan Utama */}
            {pimpinanUtama.length > 0 && (
              <div className="flex flex-col items-center">
                <div className="flex flex-row gap-12 justify-center">
                  {pimpinanUtama.map((p) => (
                    <div key={p.id} className="flex flex-col items-center">
                      {/* Card Kepala / Pimpinan */}
                      <div className="relative z-10 bg-white rounded-3xl border-t-4 border-t-blue-500 shadow-xl flex flex-col items-center w-64 p-6 hover:-translate-y-1 transition duration-300">
                        <img src={getFotoUrl(p)} className="w-28 h-28 rounded-full object-cover border-4 border-slate-50 shadow-md mb-4" alt={p.nama} />
                        <h3 className="font-bold text-slate-800 text-sm text-center leading-tight">{p.nama}</h3>
                        <div className="mt-4 bg-blue-500 text-white text-[10px] font-bold px-4 py-2 rounded-lg uppercase tracking-widest text-center w-full shadow-sm">
                          {p.jabatan}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Garis Vertikal Turun dari Kepala (hanya muncul jika ada bawahan) */}
                {pejabatBidang.length > 0 && (
                  <div className="w-[2px] h-12 bg-blue-500"></div>
                )}
              </div>
            )}

            {/* LEVEL 2: Anggota Bidang */}
            {pejabatBidang.length > 0 && (
              <div className="flex flex-row justify-center items-start">
                {pejabatBidang.map((p, index) => {
                  // Logika untuk menentukan panjang dan arah garis horizontal
                  const isFirst = index === 0;
                  const isLast = index === pejabatBidang.length - 1;
                  const isOnly = pejabatBidang.length === 1;

                  return (
                    <div key={p.id} className="relative flex flex-col items-center px-4">
                      
                      {/* Garis Horizontal Penghubung */}
                      {!isOnly && (
                        <div
                          className={`absolute top-0 h-[2px] bg-blue-500 -z-10
                          ${isFirst ? 'left-1/2 w-1/2' : isLast ? 'right-1/2 w-1/2' : 'left-0 w-full'}`}
                        ></div>
                      )}

                      {/* Garis Vertikal Turun ke masing-masing Card Bidang */}
                      <div className="w-[2px] h-10 bg-blue-500 -z-10"></div>

                      {/* Card Anggota Bidang */}
                      <div className="relative z-10 bg-white rounded-3xl border-t-4 border-t-green-400 shadow-lg flex flex-col items-center w-56 p-5 hover:-translate-y-1 transition duration-300">
                        <img src={getFotoUrl(p)} className="w-20 h-20 rounded-full object-cover border-2 border-slate-50 shadow-sm mb-3" alt={p.nama} />
                        <h3 className="font-bold text-slate-700 text-xs text-center leading-snug">{p.nama}</h3>
                        <div className="mt-3 bg-green-50 text-green-700 border border-green-200 text-[9px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider text-center w-full">
                          {p.jabatan}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}