import React, { useState, useEffect, useMemo } from 'react';
import { Search, User, Eye, Calendar, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { api, BASE_URL } from '../services/api'; // Import instance API dan BASE_URL

export default function ArtikelList() {
  // 1. States untuk Data API & Loading
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. States untuk Filter & Pagination
  const [searchTerm, setSearchTerm] = useState('');
  const [filterYear, setFilterYear] = useState('Semua Tahun');
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // 3. Fetch Data dari API Laravel saat Komponen Dimuat
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        // Menembak endpoint GET /api/berita dari Laravel
        const response = await api.get('/berita');
        
        // Sesuaikan dengan format response Laravel (biasanya response.data.data atau response.data)
        const data = response.data.data || response.data;
        setArticles(data);
      } catch (err) {
        console.error('Gagal memuat berita:', err);
        setError('Gagal mengambil data berita dari server.');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Reset ke halaman 1 jika filter/pencarian berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterYear, itemsPerPage]);

  // 4. Logika Pencarian & Filter (useMemo)
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      // Menyesuaikan penamaan field dari DB Laravel (judul, category/kategori)
      const title = article.judul || article.title || '';
      const categoryName = article.kategori?.nama || article.kategori || '';
      
      const matchesSearch = title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            categoryName.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Ambil tahun dari created_at atau tanggal
      const rawDate = article.created_at || article.tanggal || '';
      const articleYear = rawDate ? new Date(rawDate).getFullYear().toString() : '';
      const matchesYear = filterYear === 'Semua Tahun' || articleYear === filterYear;

      return matchesSearch && matchesYear;
    });
  }, [articles, searchTerm, filterYear]);

  // 5. Logika Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstItem, indexOfLastItem);
  const totalResults = filteredArticles.length;
  const totalPages = Math.ceil(totalResults / itemsPerPage);

  // Helper untuk format URL Gambar dari Laravel
  const getImageUrl = (art) => {
    const imgPath = art.gambar || art.thumbnail || art.image;
    if (!imgPath) return "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600";
    if (imgPath.startsWith('http')) return imgPath;
    return `${BASE_URL}/storage/${imgPath}`;
  };

  // Helper untuk format Tanggal
  const formatDate = (dateString) => {
    if (!dateString) return 'Terbaru';
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? dateString : date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'Long',
      year: 'numeric'
    });
  };

  return (
    <div className="pt-44 pb-20 px-6 max-w-7xl mx-auto font-sans min-h-screen">
      {/* HEADER SECTION */}
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-4xl font-black text-slate-800 tracking-tighter uppercase leading-none">Informasi & Artikel</h2>
        <p className="text-slate-400 mt-3 font-medium">Pusat edukasi dan kabar terkini seputar Kota Surakarta</p>
      </div>

      {/* FILTER BAR */}
      <div className="bg-white p-5 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 flex flex-wrap gap-4 items-center mb-12">
        {/* Search Input */}
        <div className="flex-1 min-w-[280px] relative group">
          <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
          <input 
            type="text" 
            placeholder="Cari judul atau kategori..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-14 pr-6 py-4 bg-slate-50 border-none rounded-2xl text-sm font-bold text-slate-700 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
          />
        </div>

        {/* Year Filter */}
        <select 
          value={filterYear}
          onChange={(e) => setFilterYear(e.target.value)}
          className="bg-slate-50 border-none rounded-2xl px-6 py-4 text-xs font-black uppercase text-slate-600 focus:ring-2 focus:ring-blue-500/20 cursor-pointer outline-none"
        >
          <option>Semua Tahun</option>
          <option>2026</option>
          <option>2025</option>
          <option>2024</option>
        </select>

        {/* Limit Filter */}
        <select 
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
          className="bg-slate-50 border-none rounded-2xl px-6 py-4 text-xs font-black uppercase text-slate-600 focus:ring-2 focus:ring-blue-500/20 cursor-pointer outline-none"
        >
          <option value={5}>Tampilkan 5</option>
          <option value={10}>Tampilkan 10</option>
          <option value={20}>Tampilkan 20</option>
        </select>
      </div>

      {/* TAMPILAN LOADING / ERROR */}
      {loading ? (
        <div className="py-20 text-center bg-white rounded-[3rem] border border-slate-100 shadow-sm">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-blue-600 border-t-transparent mb-4"></div>
          <p className="text-slate-500 font-bold">Memuat artikel dari server...</p>
        </div>
      ) : error ? (
        <div className="py-20 text-center bg-red-50 rounded-[3rem] border border-red-100 text-red-600 font-bold">
          {error}
        </div>
      ) : (
        /* ARTICLE LIST */
        <div className="grid grid-cols-1 gap-8">
          {currentArticles.length > 0 ? (
            currentArticles.map((art) => (
              <div key={art.id} className="bg-white p-3 rounded-[3rem] border border-slate-100 flex flex-col md:flex-row hover:shadow-2xl transition-all duration-500 group">
                {/* Image Thumbnail */}
                <div className="md:w-80 h-60 bg-slate-100 rounded-[2.5rem] overflow-hidden shrink-0 relative">
                  <img 
                    src={getImageUrl(art)} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt={art.judul || art.title} 
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                    {art.kategori?.nama || art.kategori || 'Umum'}
                  </div>
                </div>

                {/* Content Info */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-5 items-center text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
                      <span className="flex items-center gap-2">
                        <User size={13} className="text-blue-600" /> 
                        {art.penulis || art.user?.name || 'Admin Diskominfo'}
                      </span>
                      <span className="flex items-center gap-2">
                        <Eye size={13} className="text-blue-600" /> 
                        {art.views || art.views_count || 0} Pengunjung
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-800 group-hover:text-blue-600 transition-colors leading-tight mb-4">
                      {art.judul || art.title}
                    </h3>
                  </div>

                  <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                    <span className="flex items-center gap-2 text-[11px] font-bold text-slate-400">
                      <Calendar size={13} /> {formatDate(art.created_at || art.tanggal)}
                    </span>
                    <Link 
                      to={`/artikel/${art.id}`} 
                      className="flex items-center gap-2 bg-slate-50 text-blue-600 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-tighter hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                    >
                      Baca Selengkapnya <ChevronRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-20 text-center bg-white rounded-[3rem] border border-dashed border-slate-200">
              <p className="text-slate-400 font-bold italic">Tidak ditemukan artikel yang sesuai...</p>
            </div>
          )}
        </div>
      )}

      {/* PAGINATION META & BUTTONS */}
      {!loading && !error && totalResults > 0 && (
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-slate-100 pt-10">
          <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, totalResults)} of {totalResults} results
          </p>
          
          {/* Tombol Halaman Dinamis */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs transition-all ${
                  currentPage === pageNum
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'bg-white border border-slate-100 text-slate-400 hover:bg-blue-600 hover:text-white'
                }`}
              >
                {pageNum}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}