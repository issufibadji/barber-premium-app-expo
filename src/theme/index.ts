
export const theme = {
    colors: {
        primary: '#ffaf2e',
        background: '#1a161f',
        surface: '#2a2531',
        surfaceLighter: '#3a3445',
        text: '#ffffff',
        textMuted: '#94a3b8',
        textPrimary: '#ffaf2e',
        accent: '#d98e16',
        border: 'rgba(255, 255, 255, 0.05)',
        white: '#ffffff',
        black: '#000000',
        transparent: 'transparent',
        success: '#10b981',
        error: '#ef4444',
    },
    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
        xxl: 40,
        header: 56,
    },
    borderRadius: {
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
        full: 9999,
    },
    typography: {
        h1: {
            fontSize: 48,
            fontWeight: '900' as const,
            letterSpacing: -1,
        },
        h2: {
            fontSize: 32,
            fontWeight: '700' as const,
        },
        h3: {
            fontSize: 24,
            fontWeight: '700' as const,
        },
        body: {
            fontSize: 16,
            fontWeight: '400' as const,
        },
        caption: {
            fontSize: 12,
            fontWeight: '500' as const,
        },
        tiny: {
            fontSize: 10,
            fontWeight: '700' as const,
        }
    }
};

export type Theme = typeof theme;
