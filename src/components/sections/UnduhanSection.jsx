const documents = [
  "Buku Profil Diskominfo SP",
  "Dokumen Informasi dan Komunikasi Publik",
  "Dokumen Monitoring dan Evaluasi Penilaian Kinerja Pegawai",
  "Dokumen Pelaporan & Evaluasi",
  "Dokumen Perencanaan",
  "Dokumen Statistik",
  "Majalah Solo Berseri",
  "Petunjuk Teknis",
  "Standar Operasional Prosedur"
];

export default function UnduhanSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-center text-2xl font-black text-primary mb-12 uppercase tracking-widest">Unduhan Rilis Data</h2>
        <div className="space-y-1">
          {documents.map((doc, i) => (
            <div key={i} className="bg-[#eef6ff] p-4 flex justify-between items-center border border-sky-100 hover:bg-sky-100 cursor-pointer transition">
              <span className="text-sm font-bold text-slate-700 tracking-tight">{doc}</span>
              <i className="bi bi-chevron-up text-primary text-xs"></i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}