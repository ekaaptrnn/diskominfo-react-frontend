import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { Save } from 'lucide-react';

const SKMSurveyForm = () => {
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);
  const [selectedServiceName, setSelectedServiceName] = useState(""); // Simpan nama layanan untuk teks pertanyaan

  const [formData, setFormData] = useState({
    jenis_layanan_id: '',
    nama: '', usia: '', jenis_kelamin: '', pendidikan: '', pekerjaan: '', no_whatsapp: '',
    kecamatan: '', kelurahan: '',
    jawaban_1: '', jawaban_2: '', jawaban_3: '', jawaban_4: '', jawaban_5: '',
    jawaban_6: '', jawaban_7: '', jawaban_8: '', jawaban_9: '',
    saran: ''
  });

  useEffect(() => {
    api.get('/layanans').then(res => setServices(res.data.data));
  }, []);

  const handleServiceChange = (e) => {
    const id = e.target.value;
    const service = services.find(s => s.id === parseInt(id));
    
    setFormData({ ...formData, jenis_layanan_id: id });
    // Jika layanan ditemukan, simpan namanya untuk ditampilkan di pertanyaan
    setSelectedServiceName(service ? service.nama_layanan : "");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/skm/store', formData);
      alert('Survei Berhasil Disimpan!');
    } catch (error) {
      alert('Gagal menyimpan survei.');
    } finally { setLoading(false); }
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white shadow-2xl rounded-3xl border border-slate-100">
      <div className="text-center mb-10 border-b pb-6">
        <h1 className="text-2xl font-black text-slate-900 uppercase">Survei Kepuasan Masyarakat</h1>
        <p className="text-slate-500">DISKOMINFO SP KOTA SURAKARTA</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* PILIH LAYANAN */}
        <div className="bg-blue-50 p-6 rounded-2xl">
          <label className="block text-sm font-bold text-slate-700 mb-2">Jenis Layanan yang Diterima *</label>
          <select 
            name="jenis_layanan_id" 
            required
            onChange={handleServiceChange}
            className="w-full p-3 rounded-xl border-2 border-white shadow-sm outline-none focus:border-accent"
          >
            <option value="">--- Pilih Jenis Layanan ---</option>
            {services.map(s => <option key={s.id} value={s.id}>{s.nama_layanan}</option>)}
          </select>
        </div>

        {/* JIKA LAYANAN SUDAH DIPILIH, TAMPILKAN PERTANYAAN */}
        {selectedServiceName && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h2 className="text-lg font-black text-slate-900 uppercase border-l-4 border-accent pl-3">
              Pendapat Responden Tentang Pelayanan
            </h2>

            {/* PERTANYAAN DINAMIS 1-4 */}
            <QuestionItem 
              id="1" 
              q={`Bagaimana pendapat saudara tentang kesesuaian persyaratan pelayanan ${selectedServiceName} yang diberikan?`} 
              name="jawaban_1"
              options={["Sangat Sesuai", "Sesuai", "Kurang Sesuai", "Tidak Sesuai"]}
              onChange={handleChange}
            />

            <QuestionItem 
              id="2" 
              q={`Bagaimana pendapat saudara tentang kemudahan prosedur mendapatkan pelayanan ${selectedServiceName} di unit ini?`} 
              name="jawaban_2"
              options={["Sangat Mudah", "Mudah", "Kurang Mudah", "Tidak Mudah"]}
              onChange={handleChange}
            />

            <QuestionItem 
              id="3" 
              q={`Bagaimana pendapat saudara tentang kecepatan waktu pelayanan ${selectedServiceName}?`} 
              name="jawaban_3"
              options={["Sangat Cepat", "Cepat", "Kurang Cepat", "Tidak Cepat"]}
              onChange={handleChange}
            />

            <QuestionItem 
              id="4" 
              q={`Apakah biaya pelayanan ${selectedServiceName} sudah sesuai dengan ketentuan yang telah ditetapkan?`} 
              name="jawaban_4"
              options={["Gratis / Sesuai Ketentuan", "Murah", "Cukup Mahal", "Sangat Mahal"]}
              onChange={handleChange}
            />

            {/* PERTANYAAN TETAP 5-9 */}
            <QuestionItem 
              id="5" 
              q="Apakah produk layanan yang diminta sesuai dengan yang dimohonkan?" 
              name="jawaban_5"
              options={["Sangat Sesuai", "Sesuai", "Kurang Sesuai", "Tidak Sesuai"]}
              onChange={handleChange}
            />

            <QuestionItem 
              id="6" 
              q="Bagaimana pendapat Saudara tentang kompetensi/ kemampuan petugas dalam memberikan pelayanan?" 
              name="jawaban_6"
              options={["Sangat Kompeten", "Kompeten", "Kurang Kompeten", "Tidak Kompeten"]}
              onChange={handleChange}
            />

            <QuestionItem 
              id="7" 
              q="Bagaimana pendapat saudara terhadap perilaku petugas dalam pelayanan terkait kesopanan dan keramahan?" 
              name="jawaban_7"
              options={["Sangat Sopan dan Ramah", "Sopan dan Ramah", "Kurang Sopan dan Ramah", "Tidak Sopan dan Ramah"]}
              onChange={handleChange}
            />

            <QuestionItem 
              id="8" 
              q="Bagaimana pendapat saudara tentang penanganan pengaduan pengguna layanan pada instansi ini?" 
              name="jawaban_8"
              options={["Dikelola dengan baik", "Kurang Maksimal", "Tidak Berfungsi", "Tidak Ada Sarana"]}
              onChange={handleChange}
            />

            <QuestionItem 
              id="9" 
              q="Bagaimana pendapat Saudara tentang kualitas Sarana dan Prasarana?" 
              name="jawaban_9"
              options={["Sangat Baik", "Baik", "Cukup", "Buruk"]}
              onChange={handleChange}
            />

            <div className="pt-6">
              <label className="block text-sm font-bold text-slate-700 mb-3">Saran dan Masukan</label>
              <textarea name="saran" rows="4" onChange={handleChange} className="w-full p-4 rounded-2xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-accent outline-none" placeholder="Masukkan saran anda..."></textarea>
            </div>

            <button disabled={loading} type="submit" className="w-full py-4 bg-primary text-white rounded-2xl font-black text-lg hover:bg-slate-900 transition-all flex items-center justify-center gap-3">
              {loading ? 'Memproses...' : <><Save /> SIMPAN SURVEI</>}
            </button>
          </div>
        )}

        {!selectedServiceName && (
          <div className="text-center py-20 border-2 border-dashed border-slate-200 rounded-3xl">
            <p className="text-slate-400 font-medium">Silakan pilih jenis layanan terlebih dahulu untuk mengisi pendapat.</p>
          </div>
        )}
      </form>
    </div>
  );
};

// Reusable Component Pertanyaan
const QuestionItem = ({ id, q, name, options, onChange }) => (
  <div className="space-y-4">
    <p className="text-slate-800 font-bold leading-relaxed">{id}. {q}</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {options.map((opt, i) => (
        <label key={i} className="flex items-center gap-3 p-3 rounded-xl border-2 border-slate-50 hover:border-accent/30 cursor-pointer transition-all bg-slate-50/50 has-[:checked]:border-accent has-[:checked]:bg-accent/5 font-medium text-sm text-slate-700">
          <input type="radio" name={name} value={4-i} required onChange={onChange} className="w-4 h-4 text-accent" />
          {opt}
        </label>
      ))}
    </div>
  </div>
);

export default SKMSurveyForm;