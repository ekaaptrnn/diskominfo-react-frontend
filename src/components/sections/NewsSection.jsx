const news = [
  { tag: "Teknologi", title: "Lomba Podcast Surakarta Angkat Tema Ketahanan Pangan", date: "15 Juni 2026", img: "https://images.unsplash.com/photo-1478737270239-2fccd27ee1f3?q=80&w=400" },
  { tag: "PPID", title: "Rapat PPID 2026: Transparansi Informasi Publik Surakarta", date: "12 Juni 2026", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400" },
  { tag: "Edukasi", title: "Workshop Digital Literasi: Warga Bijak Media Sosial", date: "10 Juni 2026", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=400" },
  { tag: "Event", title: "BYTESFEST 2026: Kompetisi Teknologi Pelajar se-Solo", date: "08 Juni 2026", img: "https://images.unsplash.com/photo-1540575861501-7ad05823c95b?q=80&w=400" },
];

export default function NewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-primary font-bold text-[10px] uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100 italic">● Berita Terkini</span>
            <h2 className="text-4xl font-black text-slate-800 mt-4 tracking-tighter">Berita & Informasi</h2>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition"><i className="bi bi-chevron-left"></i></button>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition"><i className="bi bi-chevron-right"></i></button>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-10 snap-x scrollbar-hide">
          {news.map((item, i) => (
            <div key={i} className="min-w-[300px] md:min-w-[320px] snap-start group">
              <div className="relative h-48 rounded-[2.5rem] overflow-hidden mb-6 shadow-lg">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="News" />
                <span className="absolute top-4 left-4 bg-primary text-white text-[9px] font-bold px-3 py-1 rounded-lg uppercase">{item.tag}</span>
              </div>
              <h3 className="font-bold text-slate-800 leading-snug group-hover:text-primary transition line-clamp-2 px-2">{item.title}</h3>
              <div className="flex items-center gap-4 mt-4 text-[11px] text-slate-400 px-2 font-medium">
                <span><i className="bi bi-calendar3 mr-2"></i>{item.date}</span>
                <a href="#" className="text-primary font-bold ml-auto">Baca <i className="bi bi-chevron-right text-[8px]"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}