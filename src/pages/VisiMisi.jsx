import React from 'react';

export default function VisiMisi() {
  return (
    <div className="pt-40 pb-20 px-6 max-w-6xl mx-auto">
      {/* Breadcrumb sederhana */}
      <div className="mb-10 flex gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
        <span className="text-primary">Profil</span>
        <span>/</span>
        <span>Visi & Misi</span>
      </div>

      {/* SECTION VISI */}
      <div className="relative overflow-hidden bg-primary rounded-[3rem] p-10 md:p-20 text-white shadow-2xl shadow-primary/20 mb-16">
        <i className="bi bi-quote absolute -top-10 -left-10 text-[200px] opacity-10"></i>
        <div className="relative z-10 text-center">
          <span className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8 inline-block border border-white/30">
            Visi Kota Surakarta
          </span>
          <h2 className="text-section md:text-5xl font-black leading-tight tracking-tighter">
            “Gotong Royong mewujudkan Surakarta Berbudaya, Maju, Sejahtera, dan Berkelanjutan”
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* SECTION MISI (2 Kolom) */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-sky-100 text-primary rounded-2xl flex items-center justify-center text-2xl font-black">M</div>
            <h3 className="text-3xl font-black text-slate-800 tracking-tighter">Misi Kota Surakarta</h3>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {[
              "Pendidikan, Kesehatan, dan Perlindungan Sosial untuk Semua: Meningkatkan kualitas SDM secara merata.",
              "Berbudaya untuk Kemajuan dan Ketahanan Sosial: Melestarikan budaya lokal sebagai jati diri dan kekuatan sosial.",
              "Daya Saing Ekonomi untuk Kesejahteraan: Mengembangkan ekonomi berbasis potensi daerah dan kreatif.",
              "Inovasi Birokrasi untuk Pelayanan Publik yang Adaptif dan Inklusif: Birokrasi yang gesit, kolaboratif, dan menggunakan teknologi (digitalisasi).",
              "Ketahanan Kota dan Kerja sama Antarwilayah yang Terpadu dan Berkelanjutan: Membangun infrastruktur dan ketahanan wilayah secara terintegrasi."
            ].map((misi, index) => (
              <div key={index} className={`p-6 rounded-3xl border transition-all ${index === 3 ? 'bg-sky-500 text-white shadow-xl shadow-sky-200 border-transparent scale-105' : 'bg-white border-slate-100 text-slate-600'}`}>
                <div className="flex gap-4">
                  <span className={`text-lg font-black ${index === 3 ? 'text-white' : 'text-primary'}`}>{index + 1}</span>
                  <p className="text-sm font-medium leading-relaxed">{misi}</p>
                </div>
                {index === 3 && (
                  <div className="mt-4 pt-4 border-t border-white/20 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <i className="bi bi-info-circle-fill"></i> Diskominfo SP mendukung penuh misi ini
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SECTION TUJUAN */}
        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl font-black">T</div>
            <h3 className="text-3xl font-black text-slate-800 tracking-tighter">Tujuan</h3>
          </div>
          <div className="bg-emerald-500 rounded-[2.5rem] p-8 text-white shadow-xl shadow-emerald-200 sticky top-40">
             <i className="bi bi-bullseye text-5xl opacity-20 mb-6 block"></i>
             <p className="text-lg font-bold leading-relaxed italic">
               “Terwujudnya Transformasi Pelayanan Publik Berbasis Digital, Statistik yang Akurat Dapat Diandalkan dan Peningkatan Keamanan Informasi.”
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}