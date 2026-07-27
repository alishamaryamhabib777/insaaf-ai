import React, { useState } from 'react';
import { Scale, Lock, Mail, UserCheck } from 'lucide-react';

interface LoginViewProps {
  onLoginSuccess: () => void;
  onClose: () => void;
}

export const LoginView: React.FC<LoginViewProps> = ({ onLoginSuccess, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      
      <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in duration-200 space-y-6">
        
        {/* Header Logo */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-[#0a3d2a] text-[#80eaa9] flex items-center justify-center mx-auto shadow-md">
            <Scale className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Munsif.ai Login
          </h2>
          <p className="font-serif text-lg text-[#0a3d2a] font-semibold">
            لاگ ان کریں
          </p>
        </div>

        {/* Dark Green Login Card */}
        <div className="bg-[#042016] text-white p-6 rounded-2xl border border-[#0d422e] space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <label className="block text-[10px] font-mono font-bold text-emerald-300 uppercase tracking-widest mb-1">
                EMAIL OR MOBILE NUMBER
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-emerald-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your credentials"
                  className="w-full text-xs pl-9 pr-3 py-2.5 bg-[#093927] border border-[#217554] rounded-xl text-white placeholder-emerald-300/50 focus:ring-2 focus:ring-[#80eaa9] outline-hidden"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[10px] font-mono font-bold text-emerald-300 uppercase tracking-widest">
                  PASSWORD
                </label>
                <a href="#" className="text-[10px] text-emerald-400 hover:underline">Forgot?</a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-emerald-400 absolute left-3 top-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full text-xs pl-9 pr-3 py-2.5 bg-[#093927] border border-[#217554] rounded-xl text-white placeholder-emerald-300/50 focus:ring-2 focus:ring-[#80eaa9] outline-hidden"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#80eaa9] hover:bg-[#a1f1c2] text-[#042016] font-bold py-3 rounded-xl text-xs transition-all shadow-md cursor-pointer mt-2"
            >
              Secure Access
            </button>

          </form>

          <div className="text-center font-mono text-[10px] text-emerald-300/50 py-1">
            OR
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button 
              type="button" 
              onClick={onLoginSuccess}
              className="bg-[#093927] hover:bg-[#0f4d36] text-white border border-[#217554] py-2 rounded-xl text-xs font-semibold"
            >
              Google
            </button>
            <button 
              type="button" 
              onClick={onLoginSuccess}
              className="bg-[#093927] hover:bg-[#0f4d36] text-white border border-[#217554] py-2 rounded-xl text-xs font-semibold"
            >
              Apple
            </button>
          </div>
        </div>

        {/* Footer Subtext */}
        <div className="text-center space-y-2 text-xs text-slate-500">
          <div className="flex items-center justify-center space-x-1.5 text-[#0a3d2a] font-semibold">
            <UserCheck className="w-4 h-4" />
            <span>Register as a Legal Professional</span>
          </div>
          <p>
            Don't have an account?{' '}
            <button onClick={onLoginSuccess} className="text-[#0a3d2a] font-bold hover:underline">
              Sign Up
            </button>
          </p>
        </div>

      </div>

    </div>
  );
};
