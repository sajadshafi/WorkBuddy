import { useState } from 'react';
import { Link } from 'react-router-dom';

import ThemeSwitch from '../theme-switch/ThemeSwitch';

const Navbar = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  return (
    <nav className="flex px-2 bg-light shadow-sm dark:shadow-dark-bg dark:bg-dark py-4 items-center text-darkgray dark:text-light">
      <div>
        <Link to="/">
          <img
            className="h-[50px]"
            src="/images/tromazo_logo_300.png"
            alt="Tromazo - Manage your tasks and todos easily"
          />
        </Link>
      </div>
      <div className="ml-auto flex items-center">
        <ThemeSwitch />
        {/* <div className="mx-3">
          <Link
            className="bg-primary group transition-transform duration-150 flex items-center font-light hover:bg-secondary text-light px-4 py-2 rounded"
            to="/signin">
            Sign In{' '}
            <span className="ml-1 group-hover:translate-x-1 transition-transform duration-150">
              <RiLoginCircleFill />
            </span>
          </Link>
        </div> */}
        <div className="ml-3 relative">
          <button
            type="button"
            onClick={() => setShowUserMenu(value => !value)}
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            data-testid="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom">
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="/images/user.webp"
              alt="Bonnie Green"
            />
          </button>
          <div
            className={`z-50 absolute right-full translate-x-9 top-5 ${
              !showUserMenu && 'hidden'
            } my-4 text-base list-none bg-light divide-y divide-lightgray rounded-lg shadow dark:bg-darkgray border border-primary dark:divide-gray-600`}
            id="user-dropdown"
            data-testid="user-dropdown">
            <div className="px-4 py-3">
              <span className="block text-sm text-darkgray dark:text-light">
                Bonnie Green
              </span>
              <span className="block text-sm font-medium text-darkbg shadow-sm truncate dark:text-lightgray">
                name@flowbite.com
              </span>
            </div>
            <ul
              className="py-2"
              aria-labelledby="user-menu-button">
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-sm text-darkgray hover:bg-primary dark:text-lightgray hover:text-light">
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-sm text-darkgray hover:bg-primary dark:text-lightgray hover:text-light">
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
