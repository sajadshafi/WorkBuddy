import { screen, render } from '@testing-library/react';

import Login from './Login';

describe('Render <Login /> component', () => {
  test('If Login text appears in the login', () => {
    render(<Login />);
    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
  });
});
