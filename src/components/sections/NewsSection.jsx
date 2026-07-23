import { useEffect, useState } from "react";
import { api } from "../../services/api";

export default function NewsSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchBerita() {
      try {
        setLoading(true);
        const response = await api.get("/berita");

        // Sesuaikan bagian ini kalau struktur response API berbeda
        // Contoh umum: { data: [...] } atau langsung array [...]
        const rawData = response.data.data ?? response.data;

        const mapped = rawData.map((item) => ({
          tag: item.kategori?.nama_kategori ?? "Berita",
          title: item.judul,
          date: new Date(item.created_at).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
          img: item.thumbnail
            ? `${import.meta.env.VITE_API_BASE_URL?.replace("/api", "") || "http://localhost:8000"}/storage/${item.thumbnail}`
            : "https://via.placeholder.com/400x300?text=No+Image",
        }));

        if (isMounted) {
          setNews(mapped);
          setError(null);
        }
      } catch (err) {
        console.error("Gagal memuat berita:", err);
        if (isMounted) {
          setError("Gagal memuat berita. Coba lagi nanti.");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchBerita();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-primary font-bold text-[10px] uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100 italic">
              ● Berita Terkini
            </span>
            <h2 className="text-4xl font-black text-slate-800 mt-4 tracking-tighter">
              Berita & Informasi
            </h2>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition">
              <i className="bi bi-chevron-left" />
            </button>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition">
              <i className="bi bi-chevron-right" />
            </button>
          </div>
        </div>

        {loading && (
          <div className="text-center py-10 text-slate-400">
            Memuat berita...
          </div>
        )}

        {!loading && error && (
          <div className="text-center py-10 text-red-500">{error}</div>
        )}

        {!loading && !error && news.length === 0 && (
          <div className="text-center py-10 text-slate-400">
            Belum ada berita yang dipublikasikan.
          </div>
        )}

        {!loading && !error && news.length > 0 && (
          <div className="flex gap-6 overflow-x-auto pb-10 snap-x scrollbar-hide">
            {news.map((item, i) => (
              <div
                key={i}
                className="min-w-[300px] md:min-w-[320px] snap-start group"
              >
                <div className="relative h-48 rounded-[2.5rem] overflow-hidden mb-6 shadow-lg">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    alt="News"
                  />
                  <span className="absolute top-4 left-4 bg-primary text-white text-[9px] font-bold px-3 py-1 rounded-lg uppercase">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-bold text-slate-800 leading-snug group-hover:text-primary transition line-clamp-2 px-2">
                  {item.title}
                </h3>
                <div className="flex items-center gap-4 mt-4 text-[11px] text-slate-400 px-2 font-medium">
                  <span>
                    <i className="bi bi-calendar3 mr-2" />
                    {item.date}
                  </span>
                  <a
                    href="#"
                    className="text-primary font-bold ml-auto"
                  >
                    Baca <i className="bi bi-chevron-right text-[8px]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}