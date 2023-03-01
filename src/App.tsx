import './App.scss';

import ThemeSwitch from './components/theme-switch/ThemeSwitch';
import CustomRouter from './components/router/CustomRouter';

const App = () => {
  return (
    <div className="bg-lightgray dark:bg-darkgray">
      <ThemeSwitch />
      <CustomRouter />
    </div>
  );
};

export default App;
