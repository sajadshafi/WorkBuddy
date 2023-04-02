import { describe, test } from 'vitest';
import { screen, render } from '@testing-library/react';
import App from './App';
import ThemeProvider from './store/theme-context/ThemeContext';

describe('Check if <App /> is rendering or not', () => {
  test('theme icon is appearing', async () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );
    const themeIcon = await screen.findByRole('checkbox');
    expect(themeIcon).toBeInTheDocument();
  });
});
