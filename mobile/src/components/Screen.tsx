import { SafeAreaView } from 'react-native-safe-area-context';
import type { ViewProps } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

/** Shared screen shell: safe-area padding plus themed background. */
export function Screen({ style, ...props }: ViewProps) {
  const theme = useTheme();
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={[
        { flex: 1, padding: theme.spacing.md, backgroundColor: theme.colors.background },
        style,
      ]}
      {...props}
    />
  );
}
