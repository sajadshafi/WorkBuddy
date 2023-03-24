import React from 'react';
import { MdOutlineError } from 'react-icons/md';
import { LoginInputProps } from '../../../interfaces/interfaces';
import { useTheme } from '../../../store/theme-context/ThemeContext';

const Input = ({
  label,
  type,
  name,
  reg,
  registerOptions,
  icon,
  classes,
  error,
}: LoginInputProps) => {
  const { theme } = useTheme();
  return (
    <div className="my-5">
      <div
        className={`text-darkgray dark:text-light px-3 py-2 rounded flex items-center border ${
          !error ? 'border-primary' : 'border-danger'
        }`}>
        {icon && (
          <span className="mr-2 text-darkgray dark:text-lightgray">{icon}</span>
        )}
        <label
          htmlFor={name}
          className="flex-1">
          <input
            /* eslint-disable react/jsx-props-no-spreading */
            {...reg(name, registerOptions)}
            id={name}
            type={type}
            placeholder={label}
            name={name}
            className={`${classes} ${theme}-input text-[.85rem] bg-transparent flex-1 w-full block`}
          />
        </label>
        <span
          className={`mr-2 transition-transform origin-center duration-200 ${
            error ? 'scale-100' : 'scale-0'
          } relative text-danger`}>
          <MdOutlineError />
          <span className="text-danger after:border-t-lightbg after:dark:border-t-darkbg tooltip-top absolute w-max bg-lightbg dark:bg-darkbg text-[.82rem] px-3 rounded bottom-[120%] left-1/2 shadow-sm shadow-light dark:shadow-dark -translate-x-1/2 italic p-0 m-0">
            * {error}
          </span>
        </span>
      </div>
    </div>
  );
};

export default React.memo(Input);
