/** Smoke test verifying the Discover placeholder screen renders. */
import React from 'react';
import { render } from '@testing-library/react-native';
import DiscoverScreen from '../app/(tabs)/index';

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => require('@/theme').getTheme('light'),
}));

describe('DiscoverScreen', () => {
  it('renders the Discover heading', () => {
    const { getByText } = render(<DiscoverScreen />);
    expect(getByText(/Discover/)).toBeTruthy();
  });
});
