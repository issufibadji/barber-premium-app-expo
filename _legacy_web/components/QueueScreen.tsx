
import React from 'react';
import { Menu, Search, Bell, Clock, Check } from 'lucide-react';
import { StyleOption } from '../types';

const STYLES: StyleOption[] = [
  { id: '1', name: 'Buzz Cut', image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=400&h=500&auto=format&fit=crop' },
  { id: '2', name: 'Pompadour', image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=400&h=500&auto=format&fit=crop' },
  { id: '3', name: 'Beard Full', image: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?q=80&w=400&h=500&auto=format&fit=crop' },
  { id: '4', name: 'Fade Cut', image: 'https://images.unsplash.com/photo-1621605815841-2cd61169a193?q=80&w=400&h=500&auto=format&fit=crop' },
  { id: '5', name: 'Long Hair', image: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=400&h=500&auto=format&fit=crop' },
  { id: '6', name: 'Mustache', image: 'https://images.unsplash.com/photo-1503910368127-b459c72b45ce?q=80&w=400&h=500&auto=format&fit=crop' },
];

interface Props {
  waitTime: number;
  selectedStyle: string | null;
  onStyleSelect: (id: string) => void;
}

const QueueScreen: React.FC<Props> = ({ waitTime, selectedStyle, onStyleSelect }) => {
  return (
    <div className="flex-1 p-8 pb-32 animate-fade-in flex flex-col overflow-y-auto custom-scrollbar">
      <header className="flex justify-between items-center mb-8">
        <button className="text-slate-300 active:scale-90 transition-transform"><Menu /></button>
        <button className="text-slate-300 relative active:scale-90 transition-transform">
          <Bell />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full ring-2 ring-background-dark"></span>
        </button>
      </header>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white header-underline">Your Status</h1>
      </div>

      {/* Wait Time Circle */}
      <div className="relative w-full aspect-square max-w-[280px] mx-auto mb-10 flex items-center justify-center">
        {/* Animated Background Rings */}
        <div className="absolute inset-0 border-[1px] border-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute inset-4 border-[1px] border-primary/20 rounded-full"></div>
        
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center bg-surface-dark/40 rounded-full border-8 border-accent-dark shadow-2xl backdrop-blur-sm">
          <Clock className="text-primary/40 w-8 h-8 mb-2" />
          <div className="flex items-baseline">
            <span className="text-7xl font-black text-primary tracking-tighter">{waitTime}</span>
            <span className="text-lg font-bold text-slate-400 ml-1">min</span>
          </div>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-[0.2em] mt-2">Estimated wait</p>
        </div>

        {/* Floating Accent */}
        <div className="absolute top-10 right-4 bg-primary text-background-dark px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-glow">
          In Line
        </div>
      </div>

      {/* Style Selection */}
      <div className="mb-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
          <Check className="text-primary w-4 h-4" />
        </div>
        <h2 className="text-lg font-bold text-slate-100">Confirm your style</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {STYLES.map((style) => (
          <button
            key={style.id}
            onClick={() => onStyleSelect(style.id)}
            className={`relative aspect-[3/4] rounded-3xl overflow-hidden transition-all duration-300 active:scale-[0.97] group ${
              selectedStyle === style.id ? 'ring-4 ring-primary ring-offset-4 ring-offset-background-dark' : 'opacity-80'
            }`}
          >
            <img 
              src={style.image} 
              alt={style.name} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3 text-left">
              <span className="text-sm font-bold text-white uppercase tracking-wider">{style.name}</span>
            </div>
            {selectedStyle === style.id && (
              <div className="absolute top-3 right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <Check className="text-background-dark w-4 h-4 font-bold" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QueueScreen;
