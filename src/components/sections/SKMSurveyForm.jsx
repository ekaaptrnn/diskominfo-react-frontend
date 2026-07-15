import React, { useState, useEffect } from 'react';
import { api } from '../../services/api'; 
import { Save, AlertCircle } from 'lucide-react';

const SKMSurveyForm = () => {
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);
  
  // State Utama Form
  const [formData, setFormData] = useState({
    jenis_layanan_id: '',
    nama: '',
    usia: '',
    jenis_kelamin: '',
    pendidikan: '',
    pekerjaan: '',
    no_whatsapp: '',
    kecamatan: '',
    kelurahan: '',
    jawaban_1: '', jawaban_2: '', jawaban_3: '',
    jawaban_4: '', jawaban_5: '', jawaban_6: '',
    jawaban_7: '', jawaban_8: '', jawaban_9: '',
    saran: ''
  });

  // Load Jenis Layanan untuk Dropdown
  useEffect(() => {
    api.get('/layanans').then(res => setServices(res.data.data));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/skm/store', formData);
      alert('Terima kasih! Survei Anda telah berhasil disimpan.');
      // Reset form atau redirect
    } catch (error) {
      console.error(error);
      alert('Gagal menyimpan survei. Pastikan semua field wajib diisi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-2xl rounded-3xl border border-slate-100">
      {/* HEADER INFO */}
      <div className="text-center mb-10 border-b pb-6">
        <h1 className="text-2xl font-black text-slate-900 uppercase">Survei Kepuasan Masyarakat</h1>
        <p className="text-slate-500 font-medium">DISKOMINFO, INFORMATIKA, STATISTIK DAN PERSANDIAN KOTA SURAKARTA</p>
        <div className="mt-4 inline-block bg-slate-50 px-4 py-2 rounded-lg text-sm font-semibold text-slate-600 border">
          Periode: Triwulan III Tahun 2026 | Rekomendasi: V-21.3372.002
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* SECTION 1: INFO LAYANAN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-blue-50/50 p-6 rounded-2xl">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Jenis Layanan yang Diterima *</label>
            <select 
              name="jenis_layanan_id" 
              required
              onChange={handleChange}
              className="w-full p-3 rounded-xl border-2 border-white shadow-sm focus:border-accent focus:ring-0 outline-none transition-all"
            >
              <option value="">--- Pilih Jenis Layanan ---</option>
              {services.map(s => <option key={s.id} value={s.id}>{s.nama_layanan}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Tanggal Survey</label>
            <input type="text" readOnly value={new Date().toLocaleString('id-ID')} className="w-full p-3 bg-slate-100 rounded-xl border-none text-slate-500 cursor-not-allowed" />
          </div>
        </div>

        {/* SECTION 2: IDENTITAS RESPONDEN */}
        <div className="space-y-6">
          <h2 className="flex items-center gap-2 text-lg font-black text-slate-900 uppercase tracking-wider">
            <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-xs">01</span>
            Identitas Responden
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input name="nama" placeholder="Nama (Opsional)" onChange={handleChange} className="form-input-skm" />
            <input name="usia" type="number" placeholder="Usia" required onChange={handleChange} className="form-input-skm" />
            <select name="jenis_kelamin" required onChange={handleChange} className="form-input-skm">
              <option value="">Jenis Kelamin</option>
              <option value="L">Laki-laki</option>
              <option value="P">Perempuan</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <select name="pendidikan" required onChange={handleChange} className="form-input-skm">
              <option value="">Pendidikan</option>
              <option value="SD">SD</option><option value="SMP">SMP</option><option value="SMA">SMA</option>
              <option value="D3">D3</option><option value="S1">S1</option><option value="S2">S2</option>
            </select>
            <input name="pekerjaan" placeholder="Pekerjaan" required onChange={handleChange} className="form-input-skm" />
            <input name="no_whatsapp" placeholder="No Whatsapp (Aktif)" required onChange={handleChange} className="form-input-skm" />
          </div>
        </div>

        {/* SECTION 3: PERTANYAAN (9 POIN) */}
        <div className="space-y-8 border-t pt-8">
          <h2 className="flex items-center gap-2 text-lg font-black text-slate-900 uppercase tracking-wider">
            <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-xs">02</span>
            Pendapat Responden
          </h2>
          
          <QuestionItem 
            id="1" 
            q="Bagaimana pendapat saudara tentang kesesuaian persyaratan pelayanan?" 
            name="jawaban_1"
            options={["Sangat Sesuai", "Sesuai", "Kurang Sesuai", "Tidak Sesuai"]}
            onChange={handleChange}
          />
          
          <QuestionItem 
            id="2" 
            q="Bagaimana pendapat saudara tentang kemudahan prosedur pelayanan?" 
            name="jawaban_2"
            options={["Sangat Mudah", "Mudah", "Kurang Mudah", "Tidak Mudah"]}
            onChange={handleChange}
          />

          {/* ... Lanjutkan sampai QuestionItem id 9 ... */}

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-3">Saran dan Masukan</label>
            <textarea 
              name="saran" 
              rows="4" 
              onChange={handleChange}
              placeholder="Masukkan saran dan masukan untuk perbaikan pelayanan kami..."
              className="w-full p-4 rounded-2xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-accent outline-none transition-all"
            ></textarea>
          </div>
        </div>

        <button 
          disabled={loading}
          type="submit" 
          className="w-full py-4 bg-primary text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-900/20 hover:bg-slate-900 transition-all flex items-center justify-center gap-3"
        >
          {loading ? 'Memproses...' : <><Save /> SIMPAN SURVEI</>}
        </button>

      </form>
      <p className="text-center text-xs text-slate-400 mt-10">2026 © Dinas Komunikasi, Informatika, Statistik dan Persandian Kota Surakarta</p>
    </div>
  );
};

// Komponen Kecil untuk Item Pertanyaan agar Kode Rapi
const QuestionItem = ({ id, q, name, options, onChange }) => (
  <div className="space-y-4">
    <p className="text-slate-800 font-bold leading-relaxed">{id}. {q}</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {options.map((opt, i) => (
        <label key={i} className="flex items-center gap-3 p-3 rounded-xl border-2 border-slate-50 hover:border-accent/30 cursor-pointer transition-all bg-slate-50/50 has-[:checked]:border-accent has-[:checked]:bg-accent/5">
          <input type="radio" name={name} value={4-i} required onChange={onChange} className="w-4 h-4 text-accent border-slate-300 focus:ring-accent" />
          <span className="text-sm font-medium text-slate-700">{opt}</span>
        </label>
      ))}
    </div>
  </div>
);

export default SKMSurveyForm;