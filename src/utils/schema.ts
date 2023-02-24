// Validation schemas for the login page

export const email = {
  required: 'Email field is requred',
  pattern: {
    value:
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email is not valid!',
  },
};

export const password = {
  required: 'password is required',
  // min: {
  //   value: 6,
  //   message: 'password must be at least 6 characters',
  // },
  minLength: {
    value: 6,
    message: 'password must be at least 6 characters',
  },
};

export default { email, password };
