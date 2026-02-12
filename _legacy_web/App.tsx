
import React, { useState, useEffect } from 'react';
import { Screen, AppState } from './types';
import WelcomeScreen from './components/WelcomeScreen';
import ServicesScreen from './components/ServicesScreen';
import QueueScreen from './components/QueueScreen';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    currentScreen: Screen.WELCOME,
    selectedService: null,
    selectedStyle: '2', // Default selection from design
    waitTime: 12,
  });

  const navigateTo = (screen: Screen) => {
    setState(prev => ({ ...prev, currentScreen: screen }));
  };

  const handleServiceSelect = (serviceId: string) => {
    setState(prev => ({ 
      ...prev, 
      selectedService: serviceId,
      currentScreen: Screen.QUEUE 
    }));
  };

  const handleStyleSelect = (styleId: string) => {
    setState(prev => ({ ...prev, selectedStyle: styleId }));
  };

  // Mock queue time countdown
  useEffect(() => {
    if (state.currentScreen === Screen.QUEUE && state.waitTime > 0) {
      const timer = setInterval(() => {
        setState(prev => ({ 
          ...prev, 
          waitTime: Math.max(0, prev.waitTime - 1) 
        }));
      }, 60000); // Reduce every minute
      return () => clearInterval(timer);
    }
  }, [state.currentScreen, state.waitTime]);

  return (
    <div className="flex justify-center min-h-screen bg-[#1a161f]">
      <div className="w-full max-w-[430px] bg-background-dark min-h-screen relative flex flex-col shadow-2xl overflow-hidden">
        
        {state.currentScreen === Screen.WELCOME && (
          <WelcomeScreen onNext={() => navigateTo(Screen.SERVICES)} />
        )}

        {state.currentScreen === Screen.SERVICES && (
          <ServicesScreen onSelect={handleServiceSelect} />
        )}

        {state.currentScreen === Screen.QUEUE && (
          <QueueScreen 
            waitTime={state.waitTime} 
            selectedStyle={state.selectedStyle}
            onStyleSelect={handleStyleSelect}
          />
        )}

        {state.currentScreen !== Screen.WELCOME && (
          <BottomNav 
            activeScreen={state.currentScreen} 
            onNavigate={navigateTo} 
          />
        )}
      </div>
    </div>
  );
};

export default App;
