import { useTheme } from '../../store/theme-context/ThemeContext';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <label
      htmlFor="theme-switch"
      className="inline-block cursor-pointer">
      <input
        id="theme-switch"
        data-testid="theme-switch"
        placeholder={theme}
        className="toggle-checkbox inline-block"
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === 'dark'}
      />
      <div
        data-testid="themeToggler"
        className="toggle-slot">
        <div className="sun-icon-wrapper hidden">
          <div
            className="iconify sun-icon"
            data-icon="feather-sun"
            data-inline="false"
          />
        </div>
        <div className="toggle-button" />
        <div className="moon-icon-wrapper hidden">
          <div
            className="iconify moon-icon"
            data-icon="feather-moon"
            data-inline="false"
          />
        </div>
      </div>
    </label>
  );
};

export default ThemeSwitch;
