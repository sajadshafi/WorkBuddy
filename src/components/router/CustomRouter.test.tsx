import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import CustomRouter from './CustomRouter';

describe('Custom Router', () => {
  test('test not found route', () => {
    render(
      <MemoryRouter initialEntries={['/bad-route']}>
        <CustomRouter />
      </MemoryRouter>
    );
    expect(
      screen.getByText(/the stuff you were looking for doesn't exist/i)
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  });
});
