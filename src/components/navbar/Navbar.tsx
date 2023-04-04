import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { RiLoginCircleFill } from 'react-icons/ri';

import ThemeSwitch from '../theme-switch/ThemeSwitch';
import { useAuth } from '../../store/auth-context/AuthContext';

const Navbar = () => {
  const { user, SignOut } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  return (
    <nav className="flex px-2 lg:px-8 bg-light shadow-sm dark:shadow-dark-bg dark:bg-dark py-4 items-center text-darkgray dark:text-light">
      <div>
        <Link to="/">
          <img
            className="h-[50px]"
            src="/images/wb-100.png"
            alt="WorkBuddy - Manage your tasks and todos easily"
          />
        </Link>
      </div>
      <div className="flex ml-auto items-center">
        <div className="mx-3 mr-20 flex self-center">
          <NavLink
            className={({ isActive }: { isActive: boolean }) =>
              isActive
                ? 'group text-sm transition-transform duration-150 flex items-center font-light text-warning px-2 py-1 rounded'
                : 'group text-sm transition-transform duration-150 flex items-center font-light text-darkgray dark:text-light px-2 py-1 rounded'
            }
            to="/">
            Home
          </NavLink>
          {user && (
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                isActive
                  ? 'group text-sm transition-transform duration-150 flex items-center font-light text-warning px-2 py-1 rounded'
                  : 'group text-sm transition-transform duration-150 flex items-center font-light text-darkgray dark:text-light px-2 py-1 rounded'
              }
              to="/dashboard">
              Dashboard
            </NavLink>
          )}
        </div>
        <ThemeSwitch />
        {user ? (
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
                src={user.photoURL ? user.photoURL : '/images/user.webp'}
                alt={user.displayName ? user.displayName : 'User'}
              />
            </button>
            <div
              className={`z-50 absolute right-full translate-x-9 top-5 ${
                !showUserMenu && 'hidden'
              } my-4 text-base list-none bg-light divide-y divide-lightgray rounded-lg shadow dark:bg-darkgray border border-primary dark:divide-gray-600`}
              id="user-dropdown"
              data-testid="user-dropdown">
              <div className="px-4 py-3">
                <span className="block text-sm text-darkgray w-max dark:text-light">
                  {user.displayName || 'Bonnie Green'}
                </span>
                <span className="block mt-1 text-sm font-medium text-darkbg shadow-sm truncate dark:text-lightgray">
                  {user.email}
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
                  <button
                    onClick={SignOut}
                    className="block px-4 py-2 w-full text-left text-sm text-darkgray hover:bg-primary dark:text-lightgray hover:text-light">
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="mx-3">
            <Link
              className="bg-primary group transition-transform duration-150 flex items-center font-light hover:bg-secondary text-light px-4 py-2 rounded"
              to="/signin">
              Sign In{' '}
              <span className="ml-1 group-hover:translate-x-1 transition-transform duration-150">
                <RiLoginCircleFill />
              </span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
