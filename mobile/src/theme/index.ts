/**
 * Central theme tokens for Local Bulgarian Tour.
 * Colors mirror the Tailwind/NativeWind config in tailwind.config.js.
 */

export const palette = {
  primary: '#00994D',
  primaryDark: '#007A3E',
  accent: '#D62612',
  gold: '#C79A3B',
} as const;

export type ThemeMode = 'light' | 'dark';

export interface Theme {
  mode: ThemeMode;
  colors: {
    background: string;
    surface: string;
    content: string;
    muted: string;
    primary: string;
    accent: string;
    gold: string;
  };
  spacing: typeof spacing;
  radii: typeof radii;
  typography: typeof typography;
}

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const radii = {
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24,
  pill: 9999,
} as const;

export const typography = {
  caption: { fontSize: 12, lineHeight: 16 },
  body: { fontSize: 16, lineHeight: 24 },
  heading: { fontSize: 24, lineHeight: 32, fontWeight: '700' as const },
  display: { fontSize: 32, lineHeight: 40, fontWeight: '800' as const },
} as const;

const light: Theme['colors'] = {
  background: '#F7F9F7',
  surface: '#FFFFFF',
  content: '#1A241F',
  muted: '#5C6B63',
  primary: palette.primary,
  accent: palette.accent,
  gold: palette.gold,
};

const dark: Theme['colors'] = {
  background: '#0B100E',
  surface: '#121B17',
  content: '#F2F5F2',
  muted: '#9AAFA3',
  primary: palette.primary,
  accent: palette.accent,
  gold: palette.gold,
};

/** Returns the theme for a given color mode. */
export function getTheme(mode: ThemeMode = 'light'): Theme {
  return {
    mode,
    colors: mode === 'dark' ? dark : light,
    spacing,
    radii,
    typography,
  };
}
