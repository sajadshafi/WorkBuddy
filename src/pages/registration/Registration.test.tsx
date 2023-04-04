import { screen, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Registration from './Registration';

describe('Render <Registration /> component', () => {
  test('Login elements render', () => {
    render(
      <Router>
        <Registration />
      </Router>
    );
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/register/i)).toBeInTheDocument();
  });
});
