import React, { useState, useMemo } from 'react';
import { Search, User, Eye, Calendar, ChevronRight, LayoutGrid, List as ListIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

// Data Mock (Nanti ini diambil dari API Laravel /api/beritas)
const DUMMY_ARTICLES = [
  { id: 1, judul: "Transformasi Digital Menuju Surakarta Smart City 2026", penulis: "Admin Diskominfo", tanggal: "14 Juli 2026", views: 1082, kategori: "Teknologi", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600" },
  { id: 2, judul: "Rapat Koordinasi PPID: Keterbukaan Informasi Publik", penulis: "Humas Pemkot", tanggal: "12 Juni 2026", views: 856, kategori: "PPID", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=600" },
  { id: 3, judul: "Pelatihan Literasi Digital Bagi UMKM Pasar Gede", penulis: "Bidang Informatika", tanggal: "05 Mei 2025", views: 2104, kategori: "Edukasi", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600" },
  { id: 4, judul: "Layanan ULAS: Solusi Cepat Aduan Masyarakat", penulis: "Admin ULAS", tanggal: "20 April 2026", views: 3412, kategori: "Layanan", image: "https://images.unsplash.com/photo-1478737270239-2fccd27ee1f3?q=80&w=600" },
  { id: 5, judul: "Statistik Sektoral: Data Akurat Membangun Bangsa", penulis: "Bidang Statistik", tanggal: "10 Januari 2026", views: 120, kategori: "Statistik", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600" },
];

export default function ArtikelList() {
  // 1. States untuk Filter (Poin #6)
  const [searchTerm, setSearchTerm] = useState('');
  const [filterYear, setFilterYear] = useState('Semua Tahun');
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // 2. Logika Pencarian & Filter (useMemo untuk performa)
  const filteredArticles = useMemo(() => {
    return DUMMY_ARTICLES.filter(article => {
      const matchesSearch = article.judul.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            article.kategori.toLowerCase().includes(searchTerm.toLowerCase());
      
      const articleYear = article.tanggal.split(' ').pop();
      const matchesYear = filterYear === 'Semua Tahun' || articleYear === filterYear;

      return matchesSearch && matchesYear;
    });
  }, [searchTerm, filterYear]);

  // 3. Logika Pagination Sederhana (Poin #7)
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstItem, indexOfLastItem);
  const totalResults = filteredArticles.length;

  return (
    <div className="pt-44 pb-20 px-6 max-w-7xl mx-auto font-sans min-h-screen">
      {/* HEADER SECTION */}
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-4xl font-black text-slate-800 tracking-tighter uppercase leading-none">Informasi & Artikel</h2>
        <p className="text-slate-400 mt-3 font-medium">Pusat edukasi dan kabar terkini seputar Kota Surakarta</p>
      </div>

      {/* FILTER BAR (Poin #6) */}
      <div className="bg-white p-5 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 flex flex-wrap gap-4 items-center mb-12">
        {/* Search Input */}
        <div className="flex-1 min-w-[280px] relative group">
          <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Cari judul atau kategori..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-14 pr-6 py-4 bg-slate-50 border-none rounded-2xl text-sm font-bold text-slate-700 focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        {/* Year Filter */}
        <select 
          value={filterYear}
          onChange={(e) => setFilterYear(e.target.value)}
          className="bg-slate-50 border-none rounded-2xl px-6 py-4 text-xs font-black uppercase text-slate-600 focus:ring-2 focus:ring-primary/20 cursor-pointer"
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
          className="bg-slate-50 border-none rounded-2xl px-6 py-4 text-xs font-black uppercase text-slate-600 focus:ring-2 focus:ring-primary/20 cursor-pointer"
        >
          <option value={5}>Tampilkan 5</option>
          <option value={10}>Tampilkan 10</option>
          <option value={20}>Tampilkan 20</option>
        </select>
      </div>

      {/* ARTICLE LIST (Poin #7) */}
      <div className="grid grid-cols-1 gap-8">
        {currentArticles.length > 0 ? (
          currentArticles.map((art) => (
            <div key={art.id} className="bg-white p-3 rounded-[3rem] border border-slate-100 flex flex-col md:flex-row hover:shadow-2xl transition-all duration-500 group">
              {/* Image Thumbnail */}
              <div className="md:w-80 h-60 bg-slate-100 rounded-[2.5rem] overflow-hidden shrink-0 relative">
                <img 
                  src={art.image} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt={art.judul} 
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  {art.kategori}
                </div>
              </div>

              {/* Content Info */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-5 items-center text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
                    <span className="flex items-center gap-2"><User size={13} className="text-primary" /> {art.penulis}</span>
                    <span className="flex items-center gap-2"><Eye size={13} className="text-primary" /> {art.views} Pengunjung</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-800 group-hover:text-primary transition-colors leading-tight mb-4">
                    {art.judul}
                  </h3>
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                  <span className="flex items-center gap-2 text-[11px] font-bold text-slate-400">
                    <Calendar size={13} /> {art.tanggal}
                  </span>
                  <Link 
                    to={`/artikel/${art.id}`} 
                    className="flex items-center gap-2 bg-slate-50 text-primary px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-tighter hover:bg-primary hover:text-white transition-all shadow-sm"
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

      {/* PAGINATION META (Poin #7) */}
      <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-slate-100 pt-10">
        <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, totalResults)} of {totalResults} results
        </p>
        
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 font-black text-xs">
            1
          </button>
          {totalResults > itemsPerPage && (
            <button className="w-10 h-10 rounded-xl bg-white border border-slate-100 text-slate-400 flex items-center justify-center hover:bg-primary hover:text-white transition-all font-black text-xs">
              2
            </button>
          )}
        </div>
      </div>
    </div>
  );
}