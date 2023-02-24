import { useForm, SubmitHandler } from 'react-hook-form';
import { MdEmail, MdPassword } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { RiLoginCircleFill } from 'react-icons/ri';

import Input from '../../components/common/input/Input';
import Button from '../../components/common/button/Button';
import { LoginFormValues } from '../../interfaces/interfaces';
import schema from '../../utils/schema';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const handleLogin: SubmitHandler<LoginFormValues> = data => {
    console.log('Data :', data);
  };

  return (
    <div className="w-full min-h-screen flex justify-center md:items-center">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="md:-mt-20 p-6 mt-5 w-full rounded shadow-sm dark:shadow-dark shadow-lightgray bg-light dark:bg-dark lg:w-1/2">
        <h2 className="text-center flex justify-center py-2 font-semibold text-primary text-5xl">
          <FaUserCircle />
        </h2>
        <div className="px-5 py-4">
          <Input
            name="email"
            label="Email"
            reg={register}
            registerOptions={schema.email}
            error={errors.email && errors.email.message}
            icon={<MdEmail />}
          />
          <Input
            name="password"
            label="Password"
            reg={register}
            registerOptions={schema.password}
            error={errors.password && errors.password.message}
            icon={<MdPassword />}
          />
          <Button
            type="submit"
            text="Sign In"
            classes="w-full mt-8 uppercase"
            loading={false}
            icon={<RiLoginCircleFill />}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
