import React from 'react';

const Button = () => {
  return (
    <button
      className="px-4 py-2 bg-primary rounded-sm shadow-md shadow-lightgray dark:shadow-dark text-light hover:bg-secondary"
      type="button">
      Add Task
    </button>
  );
};

export default React.memo(Button);
