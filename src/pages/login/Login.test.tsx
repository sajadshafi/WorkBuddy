import { screen, render, fireEvent } from '@testing-library/react';

import Login from './Login';

describe('Render <Login /> component', () => {
  test('Login elements render', () => {
    render(<Login />);
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  // test('submits form with correct user credentials', async () => {
  //   const handleSubmit = jest.fn();
  //   const { getByLabelText, getByText } = render(
  //     <Login onSubmit={handleSubmit} />
  //   );

  //   const email = screen.getByLabelText(/Email/i);
  //   const password = screen.getByLabelText(/Password/i);
  //   const submitButton = screen.getByText(/Sign in/i);

  //   fireEvent.change(email, { target: { value: 'test@test.com' } });
  //   fireEvent.change(password, { target: { value: 'password' } });
  //   fireEvent.click(submitButton);

  //   expect(handleSubmit).toHaveBeenCalledWith({
  //     email: 'test@test.com',
  //     password: 'password',
  //   });
  // });
});
