import { screen, render, fireEvent } from '@testing-library/react';
import ThemeProvider from '../../store/theme-context/ThemeContext';

import ThemeSwitch from './ThemeSwitch';

describe('ThemeSwitch Component', () => {
  test('theme icon is appearing', () => {
    render(<ThemeSwitch />);
    const themeIcon = screen.getByRole('checkbox');
    expect(themeIcon).toBeInTheDocument();
    expect(themeIcon).toBeChecked();
  });

  test('default theme is working', () => {
    render(<ThemeSwitch />);
    const themeIcon = screen.getByRole('checkbox');
    expect(themeIcon).toHaveAttribute('placeholder', 'dark');
    expect(themeIcon).toBeChecked();
  });

  test('Theme Switch changes theme', () => {
    render(
      <ThemeProvider>
        <ThemeSwitch />
      </ThemeProvider>
    );
    const themeIcon = screen.getByRole('checkbox');
    expect(themeIcon).toHaveAttribute('placeholder', 'dark');
    const themeToggler = screen.getByTestId('themeToggler');
    expect(themeToggler).toBeInTheDocument();
    fireEvent.click(themeToggler);
    expect(themeIcon).toHaveAttribute('placeholder', 'light');
    expect(themeIcon).not.toBeChecked();
  });
});
