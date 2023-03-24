import {
  useState,
  createContext,
  useCallback,
  useMemo,
  useEffect,
  useContext,
} from 'react';

import { BaseProps } from '../../interfaces/interfaces';

const ThemeContext = createContext<{
  theme: string;
  toggleTheme: () => void;
}>({
  theme: 'dark',
  toggleTheme: () => {},
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }: BaseProps) => {
  const [theme, setTheme] = useState<string>('dark');
  const changeTheme = useCallback(() => {
    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
    setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
  }, [theme]);

  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme: changeTheme,
    }),
    [theme, changeTheme]
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme || 'dark');
  }, []);

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={`${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
