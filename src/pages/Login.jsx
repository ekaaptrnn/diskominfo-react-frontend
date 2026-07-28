import React, { useState } from "react";
import { Eye, EyeOff, Lock, User, ArrowRight, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", formData);
    
    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#f4f9ff] flex items-center justify-center p-6 font-sans">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-white">
        
        {/* SISI KIRI: Branding/Visual */}
        <div className="hidden md:flex bg-[#1e4f92] p-12 flex-col justify-between text-white relative overflow-hidden">
          {/* Ornamen Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-400/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>

          <div className="relative z-10">
            <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
              <img src="/logo-solo.png" alt="Logo Solo" className="h-10" />
            </div>
            <h2 className="text-3xl font-black leading-tight uppercase tracking-tighter">
              Panel Kelola <br /> <span className="text-sky-300">Diskominfo SP</span>
            </h2>
            <p className="text-blue-100/70 mt-4 font-medium text-sm leading-relaxed">
              Silakan masuk untuk mengelola layanan publik, berita, dan data statistik kota Surakarta.
            </p>
          </div>

          <div className="relative z-10 border-t border-white/10 pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <ShieldCheck size={20} className="text-sky-300" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-100">
                Secure Administrator Access
              </span>
            </div>
          </div>
        </div>

        {/* SISI KANAN: Form Login */}
        <div className="p-8 md:p-16 flex flex-col justify-center">
          <div className="mb-10 text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-800 tracking-tight">Selamat Datang</h3>
            <p className="text-slate-400 text-sm font-medium mt-1">Masukkan kredensial admin Anda.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Input Username */}
            <div>
              <label className="block text-[10px] font-black uppercase text-slate-400 mb-2 ml-1">Username</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300 group-focus-within:text-primary transition-colors">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  required
                  className="w-full pl-11 pr-4 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary/20 outline-none transition-all font-bold text-slate-700 placeholder:text-slate-300"
                  placeholder="admin.diskominfo"
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                />
              </div>
            </div>

            {/* Input Password */}
            <div>
              <label className="block text-[10px] font-black uppercase text-slate-400 mb-2 ml-1">Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300 group-focus-within:text-primary transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full pl-11 pr-12 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary/20 outline-none transition-all font-bold text-slate-700 placeholder:text-slate-300"
                  placeholder="••••••••"
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-300 hover:text-slate-500 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary transition-all" />
                <span className="text-xs font-bold text-slate-400 group-hover:text-slate-600 transition-colors">Ingat saya</span>
              </label>
              <a href="#" className="text-xs font-bold text-primary hover:underline">Lupa Password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1e4f92] hover:bg-[#0d1a36] text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl shadow-primary/20 mt-4 group"
            >
              Masuk Sekarang
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>

          <p className="mt-10 text-center text-[10px] font-bold text-slate-300 uppercase tracking-widest">
            &copy; 2026 Diskominfo SP Surakarta
          </p>
        </div>
      </div>
    </div>
  );
}