import { useState } from 'react';

export default function SKMForm() {
  const [formData, setFormData] = useState({
    nama: '', usia: '', gender: '', pendidikan: '', pekerjaan: '', wa: '',
    kecamatan: '', kelurahan: '', layanan: '',
    p1: '', p2: '', p3: '', p4: '', p5: '', p6: '', p7: '', p8: '', p9: '', saran: ''
  });

  const questions = [
    { id: 'p1', q: 'Bagaimana pendapat saudara tentang kesesuaian persyaratan pelayanan?', opt: ['Sangat sesuai', 'Sesuai', 'Kurang sesuai', 'Tidak sesuai'] },
    { id: 'p2', q: 'Bagaimana kemudahan prosedur mendapatkan pelayanan?', opt: ['Sangat mudah', 'Mudah', 'Kurang mudah', 'Tidak mudah'] },
    { id: 'p3', q: 'Bagaimana kecepatan waktu pelayanan?', opt: ['Sangat cepat', 'Cepat', 'Kurang cepat', 'Tidak cepat'] },
    // ... Lanjutkan sampai p9 sesuai instruksi nomor 9
  ];

  return (
    <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl border border-sky-100">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-black text-slate-800 uppercase leading-tight">Survei Kepuasan Masyarakat</h2>
          <p className="text-primary font-bold mt-2">Triwulan III Tahun 2026</p>
        </div>

        <form className="space-y-8">
          {/* Identitas Responden */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-slate-50 rounded-3xl">
            <div className="md:col-span-2 font-bold text-slate-400 text-[10px] uppercase tracking-widest">Identitas Responden</div>
            <input type="text" placeholder="Nama (Opsional)" className="bg-white border-none rounded-xl p-4 text-sm shadow-sm" />
            <input type="number" placeholder="Usia" className="bg-white border-none rounded-xl p-4 text-sm shadow-sm" />
            <select className="bg-white border-none rounded-xl p-4 text-sm shadow-sm">
              <option>--- Pilih Jenis Kelamin ---</option>
              <option>Laki-laki</option>
              <option>Perempuan</option>
            </select>
            <input type="text" placeholder="No Whatsapp (Aktif)" className="bg-white border-none rounded-xl p-4 text-sm shadow-sm" />
          </div>

          {/* Pertanyaan Survey */}
          <div className="space-y-10">
            {questions.map((item, idx) => (
              <div key={item.id} className="border-b border-slate-100 pb-8">
                <p className="font-bold text-slate-800 mb-6 leading-relaxed"><span className="text-primary mr-2">{idx + 1})</span> {item.q}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {item.opt.map(o => (
                    <label key={o} className="flex items-center gap-3 p-4 border border-slate-100 rounded-2xl cursor-pointer hover:bg-sky-50 transition has-[:checked]:bg-primary has-[:checked]:text-white">
                      <input type="radio" name={item.id} className="hidden" />
                      <span className="text-xs font-bold">{o}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <textarea placeholder="Masukkan saran dan masukan..." className="w-full bg-slate-50 rounded-3xl p-6 border-none min-h-[150px]" />
          
          <button type="button" className="w-full bg-primary text-white py-5 rounded-3xl font-black uppercase tracking-widest shadow-xl shadow-primary/30 hover:scale-[1.02] transition">Simpan Survei</button>
        </form>
      </div>
    </div>
  );
}