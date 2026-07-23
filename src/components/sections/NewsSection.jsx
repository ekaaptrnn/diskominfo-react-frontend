import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, BASE_URL } from "../../services/api";

// Fallback gambar jika berita tidak punya thumbnail
const FALLBACK_IMG = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400";

function getImageUrl(item) {
  if (!item.thumbnail) return FALLBACK_IMG;
  if (item.thumbnail.startsWith("http")) return item.thumbnail;
  return `${BASE_URL}/storage/${item.thumbnail}`;
}

function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

export default function NewsSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchNews = async () => {
      try {
        setLoading(true);
        // Ambil berita dari backend Laravel (hanya yang berstatus terbit)
        const response = await api.get("/berita");
        const data = response.data.data || response.data || [];
        if (isMounted) setNews(data.slice(0, 8)); // tampilkan maksimal 8 berita terbaru
      } catch (err) {
        console.error("Gagal memuat berita:", err);
        if (isMounted) setError("Gagal mengambil data berita dari server.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchNews();
    return () => { isMounted = false; };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-primary font-bold text-[10px] uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100 italic">● Berita Terkini</span>
            <h2 className="text-4xl font-black text-slate-800 mt-4 tracking-tighter">Berita & Informasi</h2>
          </div>
          <div className="flex gap-2">
            <Link to="/artikel" className="text-primary text-xs font-bold uppercase tracking-widest self-end hover:underline hidden md:block">Lihat Semua</Link>
          </div>
        </div>

        {loading ? (
          <div className="py-16 text-center text-slate-400 font-medium">Memuat berita...</div>
        ) : error ? (
          <div className="py-16 text-center text-red-500 font-medium">{error}</div>
        ) : news.length === 0 ? (
          <div className="py-16 text-center text-slate-400 font-medium italic">Belum ada berita yang dipublikasikan.</div>
        ) : (
          <div className="flex gap-6 overflow-x-auto pb-10 snap-x scrollbar-hide">
            {news.map((item) => (
              <Link to={`/artikel/${item.id}`} key={item.id} className="min-w-[300px] md:min-w-[320px] snap-start group">
                <div className="relative h-48 rounded-[2.5rem] overflow-hidden mb-6 shadow-lg">
                  <img src={getImageUrl(item)} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt={item.judul} />
                </div>
                <h3 className="font-bold text-slate-800 leading-snug group-hover:text-primary transition line-clamp-2 px-2">{item.judul}</h3>
                <div className="flex items-center gap-4 mt-4 text-[11px] text-slate-400 px-2 font-medium">
                  <span><i className="bi bi-calendar3 mr-2"></i>{formatDate(item.created_at)}</span>
                  <span className="text-primary font-bold ml-auto">Baca <i className="bi bi-chevron-right text-[8px]"></i></span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
