import { Text } from 'react-native';
import { Screen } from '@/components/Screen';
import { useTheme } from '@/hooks/useTheme';

/** Placeholder Map screen: interactive map of tour locations. */
export default function MapScreen() {
  const theme = useTheme();
  return (
    <Screen style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={[theme.typography.display, { color: theme.colors.content }]}>🗺️ Map</Text>
      <Text
        style={[theme.typography.body, { color: theme.colors.muted, marginTop: theme.spacing.sm }]}
      >
        Interactive map of Bulgarian destinations coming soon.
      </Text>
    </Screen>
  );
}
