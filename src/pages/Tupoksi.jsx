import React from 'react';

export default function Tupoksi() {
  const fungsiDinas = [
    "Perumusan kebijakan terkait informasi dan komunikasi publik, aplikasi informatika, statistik sektoral, dan persandian untuk pengamanan informasi;",
    "Penyelenggaraan urusan pemerintahan dan pelayanan umum terkait informasi dan komunikasi publik, aplikasi informatika, statistik sektoral, dan persandian untuk pengamanan informasi;",
    "Pembinaan dan pelaksanaan tugas terkait informasi dan komunikasi publik, aplikasi informatika, statistik sektoral, dan persandian untuk pengamanan informasi;",
    "Pemantauan, evaluasi dan pelaporan terkait informasi dan komunikasi publik, aplikasi informatika, statistik sektoral, dan persandian untuk pengamanan informasi;",
    "Pelaksanaan kesekretariatan dinas terkait perencanaan dan penganggaran, administrasi dan umum serta organisasi dan kepegawaian; dan",
    "Pelaksanaan fungsi lain yang diberikan oleh Wali Kota sesuai dengan tugas dan fungsinya."
  ];

  return (
    <div className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">Profil Instansi</span>
        <h2 className="text-4xl font-black text-slate-800 tracking-tighter mt-4">Tugas & Fungsi (TUPOKSI)</h2>
      </div>

      <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-2xl space-y-12">
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center text-xl shadow-lg shadow-primary/20"><i className="bi bi-briefcase"></i></div>
            <h3 className="text-2xl font-black text-slate-800">Tugas Pokok</h3>
          </div>
          <p className="text-slate-600 leading-loose text-sm font-medium italic bg-slate-50 p-8 rounded-[2rem] border-l-8 border-primary">
            "Melaksanakan urusan pemerintahan bidang komunikasi dan informatika, urusan pemerintahan bidang statistik, serta urusan pemerintahan bidang persandian yang menjadi kewenangan Pemerintahan Daerah berdasarkan asas otonomi dan tugas pembantuan sesuai Peraturan Wali kota Surakarta Nomor 37 Tahun 2025."
          </p>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-8">
             <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center text-xl shadow-lg shadow-primary/20"><i className="bi bi-list-check"></i></div>
             <h3 className="text-2xl font-black text-slate-800">Fungsi Dinas</h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {fungsiDinas.map((item, index) => (
              <div key={index} className="flex gap-4 p-5 hover:bg-sky-50 rounded-2xl transition border border-transparent hover:border-sky-100 group">
                <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-black text-xs shrink-0 group-hover:bg-primary group-hover:text-white transition">{index + 1}</span>
                <p className="text-sm font-bold text-slate-600 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}