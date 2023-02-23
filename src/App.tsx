import './App.scss';
import Button from '@/components/common/button/Button';
import Login from './pages/login/Login';

const App = () => {
  return (
    <div className="w-[96%] md:w-4/5 m-auto bg-lightgray dark:bg-darkgray">
      <Login />
    </div>
  );
};

export default App;
