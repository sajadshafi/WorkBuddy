import React from 'react';
import { ButtonProps } from '../../../interfaces/interfaces';

const Button = ({
  text,
  classes,
  clickHandler,
  type,
  loading,
  icon,
}: ButtonProps) => {
  return (
    <button
      type={type || 'submit'}
      className={`px-4 group flex justify-center py-2 bg-primary rounded shadow-sm text-light dark:shadow-dark hover:bg-secondary ${classes}`}
      onClick={clickHandler}>
      <span className="flex items-center">
        {text}
        <span className="ml-2 group-hover:translate-x-2 duration-300 transition-transform ">
          {icon}
        </span>
      </span>
    </button>
  );
};

export default React.memo(Button);
