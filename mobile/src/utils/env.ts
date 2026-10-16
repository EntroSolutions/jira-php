/**
 * Strongly typed access to Expo environment variables.
 * All public env vars must be prefixed with EXPO_PUBLIC_.
 */

function required(name: 'API_URL'): string {
  // ESLint forbids dynamic env access; each var is read explicitly below.
  const value: string | undefined =
    name === 'API_URL' ? process.env['EXPO_PUBLIC_API_URL'] : undefined;
  if (!value) {
    // Warn instead of throw so the app still boots in development without .env.
    console.warn(`Missing EXPO_PUBLIC_${name}; using an empty value.`);
    return '';
  }
  return value;
}

export const env = {
  apiUrl: required('API_URL'),
  mapsApiKey: process.env['EXPO_PUBLIC_MAPS_API_KEY'] ?? '',
} as const;
