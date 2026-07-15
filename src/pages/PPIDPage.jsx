import React, { useState } from 'react';
import { FileText, ShieldCheck, Zap, Lock, Users, Info, Scale, Award, Download, Search, ChevronRight } from 'lucide-react';
import { ppidDocuments } from '../data';

export default function PPIDPage() {
  const [activeTab, setActiveTab] = useState('Daftar Informasi Publik');

  // Menu Sidebar sesuai Poin #8
  const menuPPID = [
    { group: "Informasi Publik", items: [
      { name: "Daftar Informasi Publik", icon: FileText },
      { name: "Informasi Berkala", icon: Info },
      { name: "Informasi Setiap Saat", icon: Zap },
      { name: "Informasi Serta Merta", icon: ShieldCheck },
      { name: "Informasi Dikecualikan", icon: Lock },
    ]},
    { group: "Layanan Informasi", items: [
      { name: "Profil PPID Pelaksana", icon: Users },
      { name: "Pemohon Informasi", icon: FileText },
      { name: "Mekanisme Pemohon", icon: Scale },
      { name: "Dasar Hukum PPID", icon: Scale },
      { name: "Penghargaan", icon: Award },
    ]}
  ];

  return (
    <div className="pt-44 pb-20 px-6 max-w-7xl mx-auto font-sans min-h-screen text-slate-800">
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* SIDEBAR NAVIGATION (Readability for all ages) */}
        <aside className="lg:w-80 shrink-0">
          <div className="sticky top-44 space-y-8">
            {menuPPID.map((group, idx) => (
              <div key={idx}>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 px-4">
                  {group.group}
                </h4>
                <nav className="space-y-1">
                  {group.items.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => setActiveTab(item.name)}
                      className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl text-xs font-black transition-all ${
                        activeTab === item.name 
                        ? 'bg-primary text-white shadow-xl shadow-primary/20 translate-x-2' 
                        : 'text-slate-500 hover:bg-white hover:text-primary'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon size={16} strokeWidth={2.5} />
                        {item.name}
                      </div>
                      <ChevronRight size={14} className={activeTab === item.name ? 'opacity-100' : 'opacity-0'} />
                    </button>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </aside>

        {/* CONTENT AREA */}
        <main className="flex-1 bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-200 border border-slate-100">
          <div className="flex justify-between items-center mb-10 border-b border-slate-50 pb-8">
            <h2 className="text-3xl font-black tracking-tighter text-primary uppercase italic">
              {activeTab}
            </h2>
            <div className="hidden md:flex relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
              <input type="text" placeholder="Cari dokumen..." className="pl-12 pr-6 py-2.5 bg-slate-50 border-none rounded-xl text-xs font-bold" />
            </div>
          </div>

          {/* RENDER CONTENT BASED ON TAB */}
          <section className="animate-in fade-in duration-500">
            {activeTab.includes("Informasi") ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100">
                      <th className="pb-4 px-4">Nama Dokumen</th>
                      <th className="pb-4 px-4">Format</th>
                      <th className="pb-4 px-4">Ukuran</th>
                      <th className="pb-4 px-4 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {ppidDocuments.map((doc) => (
                      <tr key={doc.id} className="group hover:bg-slate-50 transition-colors">
                        <td className="py-5 px-4">
                          <p className="text-sm font-extrabold text-slate-700 leading-tight group-hover:text-primary transition-colors">
                            {doc.judul}
                          </p>
                          <span className="text-[10px] font-bold text-slate-300 uppercase">{doc.kategori}</span>
                        </td>
                        <td className="py-5 px-4">
                          <span className="bg-sky-50 text-primary px-2 py-1 rounded text-[9px] font-black">{doc.format}</span>
                        </td>
                        <td className="py-5 px-4 text-xs font-bold text-slate-400">{doc.ukuran}</td>
                        <td className="py-5 px-4 text-right">
                          <button className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-tighter hover:bg-primary transition-all shadow-lg active:scale-95">
                            <Download size={12} /> Unduh
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : activeTab === "Pemohon Informasi" ? (
              <div className="max-w-2xl">
                <p className="text-sm font-medium text-slate-500 leading-loose mb-8">
                  Gunakan formulir ini untuk mengajukan permohonan informasi publik secara resmi kepada PPID Pelaksana Diskominfo SP Kota Surakarta.
                </p>
                <form className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Nama Lengkap</label>
                    <input type="text" className="w-full bg-slate-50 border-none rounded-2xl p-4 font-bold text-sm" placeholder="Masukkan nama sesuai KTP" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">NIK (KTP)</label>
                      <input type="text" className="w-full bg-slate-50 border-none rounded-2xl p-4 font-bold text-sm" placeholder="3372..." />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Email Aktif</label>
                      <input type="email" className="w-full bg-slate-50 border-none rounded-2xl p-4 font-bold text-sm" placeholder="anda@gmail.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Informasi yang Dibutuhkan</label>
                    <textarea className="w-full bg-slate-50 border-none rounded-2xl p-4 font-bold text-sm min-h-[120px]" placeholder="Sebutkan secara rinci informasi yang Anda cari..."></textarea>
                  </div>
                  <button className="bg-primary text-white py-4 rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/30 hover:scale-[1.02] transition-all">Kirim Permohonan</button>
                </form>
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-slate-300 font-black uppercase tracking-widest italic">Content for {activeTab} will be integrated from Database...</p>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}