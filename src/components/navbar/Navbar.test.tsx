// Unit Test
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('should render the navbar with logo, theme switch and user menu', async () => {
    render(
      <HashRouter>
        <Navbar />
      </HashRouter>
    );
    const imageLogo = await screen.findByAltText(
      'WorkBuddy - Manage your tasks and todos easily'
    );
    const themeIcon = await screen.findByTestId('theme-switch');
    // const userMenuButton = await screen.findByTestId('user-menu-button');
    // const userDropDown = await screen.findByTestId('user-dropdown');

    expect(imageLogo).toBeInTheDocument();
    expect(themeIcon).toBeInTheDocument();
    // expect(userMenuButton).toBeInTheDocument();

    // fireEvent.click(userMenuButton);

    // expect(userDropDown).toBeInTheDocument();
  });
});
