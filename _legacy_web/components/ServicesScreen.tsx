
import React from 'react';
import { Menu, Search, ChevronRight, User, Droplets, FlaskConical, Scissors } from 'lucide-react';
import { Service } from '../types';

const SERVICES: Service[] = [
  { id: '1', name: 'Classic Shaving', icon: 'User', duration: '20 min' },
  { id: '2', name: 'Hair Washing', icon: 'Droplets', duration: '15 min' },
  { id: '3', name: 'Hair Care', icon: 'FlaskConical', duration: '30 min' },
  { id: '4', name: 'Beard Trimming', icon: 'Scissors', duration: '25 min' },
];

interface Props {
  onSelect: (id: string) => void;
}

const ServicesScreen: React.FC<Props> = ({ onSelect }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'User': return <User className="w-6 h-6" />;
      case 'Droplets': return <Droplets className="w-6 h-6" />;
      case 'FlaskConical': return <FlaskConical className="w-6 h-6" />;
      case 'Scissors': return <Scissors className="w-6 h-6" />;
      default: return null;
    }
  };

  return (
    <div className="flex-1 p-8 animate-fade-in flex flex-col">
      <header className="flex justify-between items-center mb-8">
        <button className="text-slate-300"><Menu /></button>
        <button className="text-slate-300"><Search /></button>
      </header>

      <div className="mb-10 flex justify-between items-center">
        <h1 className="text-3xl font-bold header-underline text-white">Hey, Aaron</h1>
        <div className="w-12 h-12 rounded-full border-2 border-primary/40 p-0.5">
          <img src="https://picsum.photos/seed/aaron/100/100" className="w-full h-full rounded-full" alt="Profile" />
        </div>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <Scissors className="text-primary w-6 h-6" />
        <h2 className="text-lg font-bold text-primary uppercase tracking-widest">Services</h2>
      </div>

      <div className="space-y-4 flex-1">
        {SERVICES.map((service) => (
          <button
            key={service.id}
            onClick={() => onSelect(service.id)}
            className="w-full bg-surface-dark/60 hover:bg-surface-dark transition-colors rounded-3xl p-4 flex items-center justify-between group active:scale-[0.98]"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-accent-dark/50 flex items-center justify-center text-primary">
                {getIcon(service.icon)}
              </div>
              <div className="text-left">
                <span className="block text-lg font-semibold text-slate-100">{service.name}</span>
                <span className="text-xs text-slate-500">{service.duration} session</span>
              </div>
            </div>
            <ChevronRight className="text-slate-600 group-hover:text-primary transition-colors" />
          </button>
        ))}
      </div>

      <p className="text-center text-[10px] text-slate-700 mt-10 tracking-[0.2em] uppercase">© Cracks Studio</p>
    </div>
  );
};

export default ServicesScreen;
