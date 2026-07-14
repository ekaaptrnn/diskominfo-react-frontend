import { BarChart, Bar, XAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'S1 24', score: 82 },
  { name: 'S2 24', score: 85 },
  { name: 'S1 25', score: 87 },
  { name: 'S2 25', score: 88 },
  { name: 'S1 26', score: 88.4 },
];

export default function IKMSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-primary rounded-[2.5rem] p-10 text-white flex flex-col justify-between shadow-xl shadow-primary/20">
            <div>
              <p className="text-[10px] font-black uppercase opacity-60">Indeks Kepuasan Masyarakat</p>
              <h2 className="text-7xl font-black mt-4 tracking-tighter">88.4</h2>
              <p className="text-emerald-400 font-bold mt-2 flex items-center gap-2">
                <i className="bi bi-patch-check-fill"></i> Sangat Baik
              </p>
            </div>
            <p className="text-xs opacity-70 leading-relaxed mt-10">Berdasarkan 847 responden periode Januari - Juni 2026.</p>
          </div>

          <div className="lg:col-span-2 bento-card border-none bg-slate-50">
            <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
              <i className="bi bi-graph-up-arrow text-primary"></i> Tren Kepuasan (2024-2026)
            </h3>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="name" fontSize={10} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '15px', border:'none', boxShadow:'0 10px 15px rgba(0,0,0,0.1)'}} />
                  <Bar dataKey="score" radius={[10, 10, 10, 10]} barSize={40}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 4 ? 'var(--color-primary)' : '#cbd5e1'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}