import React from 'react';
import { Eye, Sparkles, Target } from 'lucide-react';

export default function VisiMisi() {
  const misiList = [
    "Mewujudkan penyelenggaraan pemerintahan yang transparan dan akuntabel berbasis teknologi informasi dan komunikasi.",
    "Meningkatkan kualitas layanan publik berbasis digital yang mudah, cepat, dan terpercaya.",
    "Memperkuat infrastruktur teknologi informasi untuk mendukung operasional pemerintah kota.",
    "Mengembangkan statistik sektoral yang akurat sebagai dasar perencanaan pembangunan.",
    "Meningkatkan keamanan informasi dan perlindungan data pemerintah Kota Surakarta.",
    "Mendorong literasi digital masyarakat dan ekosistem inovasi teknologi di Kota Surakarta.",
  ];

  return (
    <div className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
      {/* Breadcrumb — konsisten "Home > Profil > Visi & Misi" */}
      <div className="mb-10 flex gap-2 items-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
        <span>Home</span>
        <span>/</span>
        <span>Profil</span>
        <span>/</span>
        <span className="text-primary">Visi & Misi</span>
      </div>

      <div className="mb-2">
        <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">Profil Organisasi</span>
        <h2 className="text-4xl font-black text-slate-800 tracking-tighter mt-3">Visi & Misi</h2>
        <p className="text-slate-400 mt-2 font-medium">Diskominfo SP Kota Surakarta</p>
      </div>

      {/* CARD VISI — white card + icon badge, sesuai Figma (bukan banner biru) */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8 md:p-12 mt-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-11 h-11 bg-sky-100 text-primary rounded-2xl flex items-center justify-center shrink-0">
            <Eye size={20} />
          </div>
          <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight">Pernyataan Visi</h3>
        </div>
        <p className="text-lg md:text-xl font-bold italic text-slate-700 leading-relaxed border-l-4 border-primary pl-6">
          "Terwujudnya Transformasi Pelayanan Publik Berbasis Digital, Statistik yang Akurat Dapat
          Diandalkan dan Peningkatan Keamanan Informasi"
        </p>
      </div>

      {/* CARD MISI — list plain 6 poin, tanpa highlight besar */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8 md:p-12 mt-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-11 h-11 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
            <Sparkles size={20} />
          </div>
          <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight">Pernyataan Misi</h3>
        </div>
        <div className="space-y-4">
          {misiList.map((misi, index) => (
            <div key={index} className="flex gap-4 items-start">
              <span className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                {index + 1}
              </span>
              <p className="text-sm font-medium text-slate-600 leading-relaxed">{misi}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CARD TUJUAN — dipertahankan (fitur existing di React), diselaraskan gayanya dgn 2 card di atas */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8 md:p-12 mt-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-11 h-11 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center shrink-0">
            <Target size={20} />
          </div>
          <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight">Tujuan</h3>
        </div>
        <p className="text-sm font-bold text-slate-600 leading-relaxed italic pl-6 border-l-4 border-amber-400">
          "Terwujudnya Transformasi Pelayanan Publik Berbasis Digital, Statistik yang Akurat Dapat
          Diandalkan dan Peningkatan Keamanan Informasi."
        </p>
      </div>
    </div>
  );
}