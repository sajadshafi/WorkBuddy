import './App.scss';
import Login from './pages/login/Login';
import ThemeSwitch from './components/theme-switch/ThemeSwitch';

const App = () => {
  return (
    <div className="bg-lightgray dark:bg-darkgray">
      <div className="w-[96%] md:w-4/5 m-auto">
        <ThemeSwitch />
        <Login />
      </div>
    </div>
  );
};

export default App;
