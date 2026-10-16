import { Text } from 'react-native';
import { Screen } from '@/components/Screen';
import { useTheme } from '@/hooks/useTheme';

/** Placeholder Discover screen: highlights nearby Bulgarian experiences. */
export default function DiscoverScreen() {
  const theme = useTheme();
  return (
    <Screen style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={[theme.typography.display, { color: theme.colors.content }]}>🧭 Discover</Text>
      <Text
        style={[theme.typography.body, { color: theme.colors.muted, marginTop: theme.spacing.sm }]}
      >
        Nearby tours, towns and hidden gems coming soon.
      </Text>
    </Screen>
  );
}
