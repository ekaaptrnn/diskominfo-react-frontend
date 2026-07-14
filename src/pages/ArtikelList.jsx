import React, { useState } from 'react';

export default function ArtikelList() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Data dummy sesuai spesifikasi point #7
  const articles = [
    { id: 1, judul: "Transformasi Digital Menuju Surakarta Smart City 2026", penulis: "Admin Diskominfo", tanggal: "14 Juli 2026", views: 1082, kategori: "Teknologi" },
    { id: 2, judul: "Sosialisasi Statistik Sektoral bagi OPD Kota Surakarta", penulis: "Bidang Statistik", tanggal: "12 Juli 2026", views: 856, kategori: "Statistik" },
    { id: 3, judul: "Penguatan Keamanan Informasi di Lingkungan Pemkot", penulis: "Sandi & Cyber", tanggal: "10 Juli 2026", views: 2104, kategori: "Persandian" },
  ];

  return (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-black text-slate-800 tracking-tighter">Berita & Artikel</h2>
        <p className="text-slate-400 mt-2">Informasi terkini seputar layanan dan kegiatan Diskominfo SP</p>
      </div>

      {/* SEARCH & FILTER BAR (Point #6) */}
      <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-50 flex flex-wrap gap-4 items-center mb-10">
        <div className="flex-1 min-w-[300px] relative">
          <i className="bi bi-search absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"></i>
          <input 
            type="text" 
            placeholder="Cari Judul atau Kategori..." 
            className="w-full pl-12 pr-6 py-4 bg-slate-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-primary/20"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select className="bg-slate-50 border-none rounded-2xl px-6 py-4 text-xs font-bold text-slate-600">
          <option>Tahun Artikel</option>
          <option>2026</option>
          <option>2025</option>
        </select>
        <select className="bg-slate-50 border-none rounded-2xl px-6 py-4 text-xs font-bold text-slate-600">
          <option>Tampilkan: 5</option>
          <option>10</option>
          <option>25</option>
        </select>
      </div>

      {/* ARTIKEL LIST (Point #7) */}
      <div className="grid grid-cols-1 gap-6">
        {articles.map((art) => (
          <div key={art.id} className="bg-white p-2 rounded-[2.5rem] border border-slate-100 flex flex-col md:flex-row hover:shadow-2xl transition-all group">
            <div className="md:w-64 h-52 bg-slate-200 rounded-[2rem] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="News" />
            </div>
            <div className="flex-1 p-8">
              <div className="flex flex-wrap gap-4 mb-4 items-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <span className="text-primary bg-sky-50 px-3 py-1 rounded-lg">{art.kategori}</span>
                <span><i className="bi bi-person-circle mr-1"></i> {art.penulis}</span>
                <span><i className="bi bi-eye mr-1"></i> {art.views} Pengunjung</span>
              </div>
              <h3 className="text-xl font-black text-slate-800 group-hover:text-primary transition leading-tight mb-4">{art.judul}</h3>
              <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-50">
                <span className="text-[11px] font-bold text-slate-300">{art.tanggal}</span>
                <button className="text-primary font-black text-[11px] uppercase tracking-tighter">Baca Selengkapnya <i className="bi bi-arrow-right ml-1"></i></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* META DATA (Point #7) */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-slate-100 pt-10">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          Showing 1 to 5 of 108 results
        </p>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30"><i className="bi bi-1-square-fill"></i></button>
          <button className="w-10 h-10 rounded-xl bg-white border border-slate-100 text-slate-400 flex items-center justify-center hover:bg-sky-50 transition text-xs font-bold">2</button>
          <button className="w-10 h-10 rounded-xl bg-white border border-slate-100 text-slate-400 flex items-center justify-center hover:bg-sky-50 transition text-xs font-bold">3</button>
        </div>
      </div>
    </div>
  );
}