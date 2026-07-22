import React, { useState } from 'react';
import { Lock, User, Eye, EyeOff, ShieldCheck } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-4 relative">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-red-50/30 -z-10"></div>

      <div className="max-w-md w-full bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(30,58,138,0.1)] border border-slate-100 p-10">
        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-[#1e3a8a] mx-auto rounded-2xl flex items-center justify-center shadow-lg mb-4">
             <ShieldCheck size={32} className="text-white" />
          </div>
          <h1 className="text-xl font-black text-[#1e3a8a] uppercase tracking-wider">Admin Portal</h1>
          <p className="text-slate-400 text-sm font-medium mt-1">Dinas Kominfo SP Surakarta</p>
        </div>

        {/* FORM */}
        <form className="space-y-5">
          <div>
            <div className="relative">
              <User className="absolute left-4 top-4 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Username"
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[#1e3a8a] focus:bg-white transition-all text-sm font-medium"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <Lock className="absolute left-4 top-4 text-slate-400" size={18} />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password"
                className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[#1e3a8a] focus:bg-white transition-all text-sm font-medium"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-slate-400 hover:text-[#1e3a8a]"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-bold">
            <label className="flex items-center gap-2 text-slate-500 cursor-pointer">
              <input type="checkbox" className="rounded border-slate-300 text-[#1e3a8a] focus:ring-0" />
              Ingat Saya
            </label>
            <a href="#" className="text-[#dc2626] hover:underline uppercase tracking-tighter">Lupa Password?</a>
          </div>

          <button 
            type="submit" 
            className="w-full py-4 bg-[#1e3a8a] text-white rounded-xl font-black text-sm tracking-widest hover:bg-[#162a63] shadow-lg shadow-blue-900/20 transition-all active:scale-[0.98]"
          >
            MASUK KE SISTEM
          </button>
        </form>

        {/* COPYRIGHT SEDERHANA (SESUAI PERMINTAAN) */}
        <div className="mt-10 pt-6 border-t border-slate-50 text-center">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            © 2026 PEMKOT SURAKARTA
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;