import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { Save, UserCheck, ClipboardList } from 'lucide-react';

const SKMSurveyForm = () => {
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);
  const [selectedServiceName, setSelectedServiceName] = useState("");

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
    jawaban_1: '', jawaban_2: '', jawaban_3: '', jawaban_4: '', jawaban_5: '',
    jawaban_6: '', jawaban_7: '', jawaban_8: '', jawaban_9: '',
    saran: ''
  });

  // Load daftar layanan dari API Laravel saat pertama dimuat
  useEffect(() => {
    api.get('/layanans')
      .then(res => setServices(res.data.data || res.data))
      .catch(err => console.error("Gagal memuat layanan:", err));
  }, []);

  const handleServiceChange = (e) => {
    const id = e.target.value;
    const service = services.find(s => s.id === parseInt(id));
    
    setFormData({ ...formData, jenis_layanan_id: id });
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
      alert('Survei Berhasil Disimpan! Terima kasih atas partisipasi Anda.');
      
      // Reset Form
      setFormData({
        jenis_layanan_id: '', nama: '', usia: '', jenis_kelamin: '', pendidikan: '', 
        pekerjaan: '', no_whatsapp: '', kecamatan: '', kelurahan: '',
        jawaban_1: '', jawaban_2: '', jawaban_3: '', jawaban_4: '', jawaban_5: '',
        jawaban_6: '', jawaban_7: '', jawaban_8: '', jawaban_9: '', saran: ''
      });
      setSelectedServiceName("");
    } catch (error) {
      console.error("Error submitting SKM:", error);
      alert('Gagal menyimpan survei. Silakan periksa kembali kelengkapan inputan.');
    } finally { 
      setLoading(false); 
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white shadow-2xl rounded-3xl border border-slate-100">
      {/* HEADER */}
      <div className="text-center mb-10 border-b pb-6">
        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-wide">Survei Kepuasan Masyarakat</h1>
        <p className="text-slate-500 font-medium">DISKOMINFO SP KOTA SURAKARTA</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        
        {/* SECTION 1: PILIH LAYANAN */}
        <div className="bg-blue-50/80 p-6 rounded-2xl border border-blue-100">
          <label className="block text-sm font-bold text-slate-700 mb-2">
            Jenis Layanan yang Diterima <span className="text-red-500">*</span>
          </label>
          <select 
            name="jenis_layanan_id" 
            required
            value={formData.jenis_layanan_id}
            onChange={handleServiceChange}
            className="w-full p-3.5 rounded-xl border-2 border-white bg-white shadow-sm outline-none focus:border-blue-500 font-medium text-slate-700"
          >
            <option value="">--- Pilih Jenis Layanan ---</option>
            {services.map(s => (
              <option key={s.id} value={s.id}>{s.nama_layanan}</option>
            ))}
          </select>
        </div>

        {/* SECTION 2: PROFIL RESPONDEN (HANYA TAMPIL JIKA LAYANAN SUDAH DIPILIH) */}
        {selectedServiceName && (
          <div className="space-y-6 animate-in fade-in duration-500 border-b pb-8">
            <h2 className="text-lg font-black text-slate-900 uppercase flex items-center gap-2 border-l-4 border-blue-600 pl-3">
              <UserCheck className="w-5 h-5 text-blue-600" /> Data Responden
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Nama Lengkap *</label>
                <input type="text" name="nama" required value={formData.nama} onChange={handleChange} className="w-full p-3 rounded-xl border bg-slate-50 focus:bg-white outline-none focus:ring-2 focus:ring-blue-500" placeholder="Masukkan nama" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">No. WhatsApp *</label>
                <input type="text" name="no_whatsapp" required value={formData.no_whatsapp} onChange={handleChange} className="w-full p-3 rounded-xl border bg-slate-50 focus:bg-white outline-none focus:ring-2 focus:ring-blue-500" placeholder="08xxxxxxxxxx" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Usia (Tahun) *</label>
                <input type="number" name="usia" required value={formData.usia} onChange={handleChange} className="w-full p-3 rounded-xl border bg-slate-50 focus:bg-white outline-none focus:ring-2 focus:ring-blue-500" placeholder="Contoh: 25" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Jenis Kelamin *</label>
                <select name="jenis_kelamin" required value={formData.jenis_kelamin} onChange={handleChange} className="w-full p-3 rounded-xl border bg-slate-50 focus:bg-white outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">-- Pilih --</option>
                  <option value="L">Laki-laki</option>
                  <option value="P">Perempuan</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Pendidikan *</label>
                <input type="text" name="pendidikan" required value={formData.pendidikan} onChange={handleChange} className="w-full p-3 rounded-xl border bg-slate-50 focus:bg-white outline-none focus:ring-2 focus:ring-blue-500" placeholder="SMA / S1 / S2 / dll" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Pekerjaan *</label>
                <input type="text" name="pekerjaan" required value={formData.pekerjaan} onChange={handleChange} className="w-full p-3 rounded-xl border bg-slate-50 focus:bg-white outline-none focus:ring-2 focus:ring-blue-500" placeholder="PNS / Swasta / Mahasiswa / dll" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Kecamatan *</label>
                <input type="text" name="kecamatan" required value={formData.kecamatan} onChange={handleChange} className="w-full p-3 rounded-xl border bg-slate-50 focus:bg-white outline-none focus:ring-2 focus:ring-blue-500" placeholder="Kecamatan" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Kelurahan *</label>
                <input type="text" name="kelurahan" required value={formData.kelurahan} onChange={handleChange} className="w-full p-3 rounded-xl border bg-slate-50 focus:bg-white outline-none focus:ring-2 focus:ring-blue-500" placeholder="Kelurahan" />
              </div>
            </div>
          </div>
        )}

        {/* SECTION 3: PERTANYAAN SURVEI */}
        {selectedServiceName && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h2 className="text-lg font-black text-slate-900 uppercase flex items-center gap-2 border-l-4 border-blue-600 pl-3">
              <ClipboardList className="w-5 h-5 text-blue-600" /> Pendapat Responden Tentang Pelayanan
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

            {/* SARAN */}
            <div className="pt-6">
              <label className="block text-sm font-bold text-slate-700 mb-3">Saran dan Masukan</label>
              <textarea 
                name="saran" 
                rows="4" 
                value={formData.saran}
                onChange={handleChange} 
                className="w-full p-4 rounded-2xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-blue-500 outline-none transition" 
                placeholder="Masukkan saran anda..."
              ></textarea>
            </div>

            {/* TOMBOL SUBMIT */}
            <button 
              disabled={loading} 
              type="submit" 
              className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-slate-900 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:bg-slate-400"
            >
              {loading ? 'Memproses...' : <><Save className="w-5 h-5" /> SIMPAN SURVEI</>}
            </button>
          </div>
        )}

        {/* JIKA BELUM PILIH LAYANAN */}
        {!selectedServiceName && (
          <div className="text-center py-16 border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50/50">
            <p className="text-slate-400 font-medium">Silakan pilih jenis layanan di atas terlebih dahulu untuk mengisi survei.</p>
          </div>
        )}
      </form>
    </div>
  );
};

// Reusable Component Pertanyaan
const QuestionItem = ({ id, q, name, options, onChange }) => (
  <div className="space-y-4">
    <p className="text-slate-800 font-bold leading-relaxed">{id}. {q} <span className="text-red-500">*</span></p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {options.map((opt, i) => (
        <label 
          key={i} 
          className="flex items-center gap-3 p-3.5 rounded-xl border-2 border-slate-100 hover:border-blue-200 cursor-pointer transition-all bg-slate-50/50 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50/50 font-medium text-sm text-slate-700"
        >
          <input 
            type="radio" 
            name={name} 
            value={4 - i} 
            required 
            onChange={onChange} 
            className="w-4 h-4 text-blue-600 focus:ring-blue-500" 
          />
          {opt}
        </label>
      ))}
    </div>
  </div>
);

export default SKMSurveyForm;