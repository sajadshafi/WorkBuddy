import { MdEmail, MdPassword } from 'react-icons/md';
import Input from '@/components/common/input/Input';
import Button from '@/components/common/button/Button';

const Login = () => {
  return (
    <div className="w-full min-h-screen flex justify-center md:items-center">
      <form className="md:-mt-20 mt-5 w-full lg:w-1/2">
        <h2 className="text-center py-3 font-semibold uppercase bg-primary text-lightgray text-2xl">
          Sign In
        </h2>
        <Input
          name="email"
          label="Email"
          icon={<MdEmail />}
        />
        <Input
          name="password"
          label="Password"
          icon={<MdPassword />}
        />
        <Button
          text="Sign In"
          classes="w-full"
        />
      </form>
    </div>
  );
};

export default Login;
