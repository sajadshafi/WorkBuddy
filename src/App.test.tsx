import { describe, test } from 'vitest';
import { screen, render } from '@testing-library/react';
import App from './App';
import ThemeProvider from './store/theme-context/ThemeContext';

describe('Check if <App /> is rendering or not', () => {
  test('theme icon is appearing', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );
    const themeIcon = screen.getByRole('checkbox');
    expect(themeIcon).toBeInTheDocument();
  });
});
