import React from 'react';

export default function MaklumatPelayanan() {
  return (
    <div className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
      {/* Header Halaman */}
      <div className="text-center mb-16">
        <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">Layanan Publik</span>
        <h2 className="text-4xl font-black text-slate-800 tracking-tighter mt-4">Maklumat Pelayanan</h2>
        <p className="text-slate-400 mt-4 font-medium italic">
          Keputusan Kepala Diskominfo SP Kota Surakarta Nomor 439 Tahun 2026
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10">
        
        {/* SECTION 1: MAKLUMAT RESMI */}
        <div className="bg-white rounded-[3rem] p-10 md:p-16 border-t-8 border-primary shadow-2xl relative overflow-hidden">
          <i className="bi bi-patch-check-fill absolute -right-10 -top-10 text-[200px] opacity-[0.03] text-primary"></i>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-black text-slate-800 mb-8 uppercase tracking-tight text-center md:text-left">
              Maklumat Pelayanan
            </h3>
            <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 italic">
              <p className="text-lg md:text-xl font-bold text-slate-700 leading-relaxed text-center">
                "DENGAN INI, KAMI MENYATAKAN SANGGUP MENYELENGGARAKAN PELAYANAN SESUAI STANDAR PELAYANAN YANG TELAH DITETAPKAN DAN APABILA TIDAK MENEPATI JANJI INI, KAMI SIAP MENERIMA SANKSI SESUAI PERATURAN PERUNDANG-UNDANGAN YANG BERLAKU."
              </p>
            </div>
            <p className="mt-8 text-center text-sm font-bold text-slate-400">
              Kepala Dinas Komunikasi, Informatika, Statistik dan Persandian Kota Surakarta
            </p>
          </div>
        </div>

        {/* SECTION 2: VISI, MISI, SLOGAN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Visi & Misi Card */}
          <div className="bg-primary text-white p-10 rounded-[3rem] shadow-xl">
            <h3 className="text-xl font-black mb-6 uppercase tracking-widest border-b border-white/20 pb-4">Visi & Misi</h3>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-black opacity-60 uppercase mb-2">Visi Dinas:</p>
                <p className="text-sm font-bold italic leading-relaxed">
                  “Gotong Royong mewujudkan Surakarta Berbudaya, Maju, Sejahtera, dan Berkelanjutan”
                </p>
              </div>
              <div>
                <p className="text-[10px] font-black opacity-60 uppercase mb-2">Misi Utama (Digitalisasi):</p>
                <p className="text-sm font-medium leading-relaxed">
                  "Inovasi Birokrasi untuk Pelayanan Publik yang Adaptif dan Inklusif (Digitalisasi)."
                </p>
              </div>
            </div>
          </div>

          {/* Slogan Card */}
          <div className="bg-emerald-500 text-white p-10 rounded-[3rem] shadow-xl flex flex-col justify-center items-center text-center">
            <i className="bi bi-megaphone text-5xl mb-6 opacity-40"></i>
            <h3 className="text-xl font-black mb-2 uppercase tracking-widest">Slogan Pelayanan</h3>
            <p className="text-2xl font-black tracking-tighter">
              "SOLO SMART CITY: <br /> MELAYANI DENGAN HATI"
            </p>
          </div>
        </div>

        {/* SECTION 3: PDF VIEWER (Keputusan No. 439) */}
        <div className="bg-white rounded-[3rem] p-4 border border-slate-100 shadow-xl overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex justify-between items-center">
            <h4 className="font-bold text-slate-700 text-sm">Dokumen Keputusan No. 439 Tahun 2026</h4>
            <button className="bg-primary text-white px-4 py-2 rounded-xl text-[10px] font-bold">
              <i className="bi bi-download mr-2"></i> Unduh PDF
            </button>
          </div>
          {/* Ganti 'src' dengan path PDF asli kamu di folder public */}
          <iframe 
            src="/dokumen/maklumat_439_2026.pdf" 
            className="w-full h-[600px] rounded-b-[2rem]"
            title="Dokumen Maklumat"
          ></iframe>
        </div>

      </div>
    </div>
  );
}