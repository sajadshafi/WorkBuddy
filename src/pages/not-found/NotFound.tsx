import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="dark:bg-dark max-h-screen bg-light text-darkgray dark:text-lightgray">
      <div className="flex h-screen">
        <div className="m-auto text-center">
          <div>
            <img
              src="/images/404.svg"
              alt=""
            />
          </div>
          <p className="text-sm md:text-base text-primary dark:text-light p-2 mb-4">
            The stuff you were looking for doesn&apos;t exist
          </p>
          <Link
            to="/"
            className="bg-primary hover:bg-secondary text-light rounded shadow hover:shadow-lg py-2 px-4 border border-light hover:border-transparent dark:border-darkgray">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
