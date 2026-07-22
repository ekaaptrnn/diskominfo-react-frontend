import React, { useState, useEffect } from 'react';
import { api, BASE_URL } from '../services/api'; // Mengimpor API

export default function UnduhanSection() {
  // Mengganti array 'const documents = [...]' statis dengan state dinamis
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    // Memanggil data dari Laravel
    api.get('/unduhan')
      .then(res => setDocuments(res.data.data || res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-center text-2xl font-black text-primary mb-12 uppercase tracking-widest">
          Unduhan Rilis Data
        </h2>
        <div className="space-y-1">
          {documents.map((doc, i) => (
            <a 
              key={doc.id || i} 
              href={`${BASE_URL}/storage/${doc.file_path || doc.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#eef6ff] p-4 flex justify-between items-center border border-sky-100 hover:bg-sky-100 cursor-pointer transition no-underline block"
            >
              <span className="text-sm font-bold text-slate-700 tracking-tight">
                {doc.judul || doc.nama_dokumen || doc}
              </span>
              <i className="bi bi-download text-primary text-xs"></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}