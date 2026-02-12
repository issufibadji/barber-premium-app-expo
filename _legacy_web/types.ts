
export enum Screen {
  WELCOME = 'welcome',
  SERVICES = 'services',
  QUEUE = 'queue'
}

export interface Service {
  id: string;
  name: string;
  icon: string;
  duration: string;
}

export interface StyleOption {
  id: string;
  name: string;
  image: string;
}

export interface AppState {
  currentScreen: Screen;
  selectedService: string | null;
  selectedStyle: string | null;
  waitTime: number;
}
