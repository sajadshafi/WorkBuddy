import './App.scss';
import Button from '@/components/common/button/Button';

const App = () => {
  return (
    <div className="w-full min-h-screen bg-light dark:bg-darkgray">
      <div className="">
        <h2 className="text-darkgray dark:text-light">Hello World!</h2>
        <Button />
        <h1 className="text-darkgray dark:text-light">Hello world!</h1>
      </div>
    </div>
  );
};

export default App;
