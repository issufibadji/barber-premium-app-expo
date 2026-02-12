
export enum Screen {
    WELCOME = 'Welcome',
    SERVICES = 'Services',
    QUEUE = 'Queue',
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
