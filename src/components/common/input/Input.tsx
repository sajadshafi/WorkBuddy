const Input = ({ label, name, register, icon, classes }) => {
  return (
    <div className="my-5 px-3 py-1 rounded flex items-center border border-primary">
      <span className="mr-1">{icon}</span>
      <label htmlFor={name}>
        <input
          id={name}
          placeholder={label}
          name={name}
          className={`${classes} bg-transparent`}
        />
      </label>
    </div>
  );
};

export default Input;
