import { useColorScheme } from 'react-native';
import { getTheme, type Theme } from '@/theme';

/** Returns the active theme based on the device color scheme. */
export function useTheme(): Theme {
  const scheme = useColorScheme();
  return getTheme(scheme === 'dark' ? 'dark' : 'light');
}
