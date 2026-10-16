import { Text } from 'react-native';
import { Screen } from '@/components/Screen';
import { useTheme } from '@/hooks/useTheme';

/** Placeholder Profile screen: user account and settings. */
export default function ProfileScreen() {
  const theme = useTheme();
  return (
    <Screen style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={[theme.typography.display, { color: theme.colors.content }]}>👤 Profile</Text>
      <Text
        style={[theme.typography.body, { color: theme.colors.muted, marginTop: theme.spacing.sm }]}
      >
        Account, preferences and offline settings coming soon.
      </Text>
    </Screen>
  );
}
