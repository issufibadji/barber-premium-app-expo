
import React from 'react';
import { Home, ClipboardList, Clock, User } from 'lucide-react';
import { Screen } from '../types';

interface Props {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const BottomNav: React.FC<Props> = ({ activeScreen, onNavigate }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-6 z-50 pointer-events-none">
      <nav className="bg-surface-dark/80 backdrop-blur-2xl border border-white/5 rounded-[32px] p-2 flex justify-between items-center shadow-2xl pointer-events-auto">
        <button 
          onClick={() => onNavigate(Screen.SERVICES)}
          className={`flex-1 flex flex-col items-center justify-center py-2 transition-all duration-300 rounded-2xl ${
            activeScreen === Screen.SERVICES ? 'bg-primary/10 text-primary' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          <Home className={`w-6 h-6 ${activeScreen === Screen.SERVICES ? 'fill-primary/20' : ''}`} />
          <span className="text-[10px] font-bold uppercase mt-1 tracking-widest">Home</span>
        </button>

        <button 
          className="flex-1 flex flex-col items-center justify-center py-2 text-slate-500 hover:text-slate-300 transition-all rounded-2xl"
        >
          <ClipboardList className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase mt-1 tracking-widest">Bookings</span>
        </button>

        <button 
          onClick={() => onNavigate(Screen.QUEUE)}
          className={`flex-1 flex flex-col items-center justify-center py-2 transition-all duration-300 rounded-2xl ${
            activeScreen === Screen.QUEUE ? 'bg-primary/10 text-primary' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          <Clock className={`w-6 h-6 ${activeScreen === Screen.QUEUE ? 'fill-primary/20' : ''}`} />
          <span className="text-[10px] font-bold uppercase mt-1 tracking-widest">Queue</span>
        </button>

        <button 
          className="flex-1 flex flex-col items-center justify-center py-2 text-slate-500 hover:text-slate-300 transition-all rounded-2xl"
        >
          <User className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase mt-1 tracking-widest">Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default BottomNav;
