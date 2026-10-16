import { Text } from 'react-native';
import { Screen } from '@/components/Screen';
import { useTheme } from '@/hooks/useTheme';

/** Placeholder Favorites screen: saved tours and places. */
export default function FavoritesScreen() {
  const theme = useTheme();
  return (
    <Screen style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={[theme.typography.display, { color: theme.colors.content }]}>❤️ Favorites</Text>
      <Text
        style={[theme.typography.body, { color: theme.colors.muted, marginTop: theme.spacing.sm }]}
      >
        Your saved tours and places will appear here.
      </Text>
    </Screen>
  );
}
