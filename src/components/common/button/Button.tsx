import React from 'react';
const Button = ({ text, classes }) => {
  return (
    <button
      className={`px-4 py-2 bg-primary rounded shadow-md shadow-lightgray text-light dark:shadow-dark hover:bg-secondary ${classes}`}
      type="button">
      {text}
    </button>
  );
};

export default React.memo(Button);
