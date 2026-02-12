
import React from 'react';
import { Search, Menu, Scissors, Sparkles, MoveRight } from 'lucide-react';

interface Props {
  onNext: () => void;
}

const WelcomeScreen: React.FC<Props> = ({ onNext }) => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-between p-8 pt-14 pb-12 animate-fade-in overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
      <div className="absolute top-20 -left-20 w-48 h-48 bg-primary/5 blur-[80px] rounded-full"></div>

      {/* Header */}
      <header className="w-full flex justify-between items-center z-20">
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md active:scale-90 transition-transform">
          <Menu className="text-primary w-6 h-6" />
        </button>
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md active:scale-90 transition-transform">
          <Search className="text-primary w-6 h-6" />
        </button>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full z-10">
        <div className="mb-10 text-center">
          <h1 className="font-black text-5xl text-slate-100 uppercase tracking-tighter leading-none">
            BARBER <span className="text-primary italic">SHOP</span>
          </h1>
          <p className="mt-3 text-primary/80 font-medium tracking-[0.3em] uppercase text-[10px]">
            Old School Style
          </p>
        </div>

        {/* Illustration Area */}
        <div className="relative w-full aspect-square max-w-[300px] flex items-center justify-center">
          {/* Dot Pattern Mock */}
          <div className="absolute inset-0 opacity-10 rounded-full scale-125 bg-[radial-gradient(circle,#ffaf2e_1.5px,transparent_1.5px)] bg-[length:20px_20px]"></div>
          
          <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
            <div className="w-full h-full rounded-full border-[10px] border-primary/20 overflow-hidden shadow-2xl relative">
               <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuArjhJrkTYrty5HSLViqGrIgUbHZ3FN9g3eAAMd1BgzJfK8PSZK9xQaDEInQDbpj5r4pJ4iceNWFWFVEzu3V3J-8QmMRwLDit_CCd6xb4FjCvzH3qpf8a8YDkaRExrQbeYCnrgjzfTRx7FqZQUuDYduRuXYMfoTEJCahQkDKNXdaB2M9M_mXD51YeVOutw4IXQXr75cyecLLnn3-dxyzXYW6H7kPBTmYAqhBHe0QCdl5vwu1kzrgERm3VKMcLA5wqLywR8HGKBb9g" 
                alt="Barber Art" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Icons */}
            <div className="absolute -top-4 -right-2 w-16 h-16 bg-primary rounded-full flex items-center justify-center border-4 border-[#1a161f] shadow-xl">
              <Scissors className="text-[#1a161f] w-7 h-7 fill-current" />
            </div>
            <div className="absolute bottom-10 -left-4 w-16 h-16 bg-primary/20 backdrop-blur-xl border border-primary/30 rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="text-primary w-8 h-8" />
            </div>
          </div>
        </div>

        <div className="mt-14 text-center px-6">
          <p className="text-slate-400 text-sm leading-relaxed font-medium">
            Experience the ultimate grooming ritual in a space where tradition meets modern luxury.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="w-full mt-auto z-20">
        <button 
          onClick={onNext}
          className="w-full bg-primary py-5 rounded-full text-background-dark font-extrabold text-lg uppercase tracking-wider transition-all active:scale-95 shadow-[0_8px_0_0_#d98e16,0_12px_20px_rgba(0,0,0,0.4)] flex items-center justify-center gap-2"
        >
          <span>Get a stylist now</span>
          <MoveRight className="w-6 h-6" />
        </button>
        <div className="mt-10 flex justify-center">
          <div className="w-32 h-1 bg-white/10 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
