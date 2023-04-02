// Unit Test
import { render, fireEvent, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('should render the navbar with logo, theme switch and user menu', () => {
    render(
      <HashRouter>
        <Navbar />
      </HashRouter>
    );
    expect(
      screen.getByAltText('WorkBuddy - Manage your tasks and todos easily')
    ).toBeInTheDocument();
    expect(screen.getByTestId('theme-switch')).toBeInTheDocument();
    expect(screen.getByTestId('user-menu-button')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('user-menu-button'));

    expect(screen.getByTestId('user-dropdown')).toBeInTheDocument();
  });
});
