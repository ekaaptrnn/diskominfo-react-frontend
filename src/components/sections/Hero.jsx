export default function Hero() {
  return (
    <section className="pt-32 pb-10 px-4 md:px-10">
      <div className="relative h-[450px] md:h-[550px] w-full rounded-[3rem] overflow-hidden group shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Hero" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent flex items-center px-10 md:px-20">
          <div className="max-w-xl text-white">
            <span className="bg-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">Informasi Terkini</span>
            <h1 className="text-hero font-black leading-[1.1] mb-6 tracking-tighter">BYTESFEST 2026</h1>
            <p className="text-lg opacity-80 mb-8 font-medium">Festival Teknologi & Inovasi Digital Kota Surakarta.</p>
            <button className="bg-white text-primary px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-primary hover:text-white transition-all shadow-xl">
              Daftar Sekarang <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}