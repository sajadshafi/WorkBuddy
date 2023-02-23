import { screen, render, fireEvent } from '@testing-library/react';

import { useContext } from 'react';
import ThemeProvider, { ThemeContext } from './ThemeContext';

describe('Theme context states and functions', () => {
  const TestConsumer = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
      <button
        type="button"
        data-testid="test-button"
        className={theme}
        onClick={toggleTheme}>
        {theme}
      </button>
    );
  };

  const renderContextProvider = () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );
  };
  test('Test if default theme is dark', () => {
    renderContextProvider();
    const themeToggler = screen.getByRole('button');
    expect(themeToggler).toBeInTheDocument();
    expect(themeToggler).toHaveTextContent('dark');
  });

  test('button click changes theme', () => {
    renderContextProvider();
    const themeToggler = screen.getByRole('button');
    fireEvent.click(themeToggler);
    expect(themeToggler).toHaveTextContent('light');
  });
});
