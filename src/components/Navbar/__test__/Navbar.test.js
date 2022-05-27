import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar tests', () => {
  it('should render same text passed into title prop', () => {
    render(<Navbar title="Use your illusion" />);
    const titleElement = screen.getByText(/use your illusion/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('should not render user name in navbar when user is null', () => {
    render(<Navbar title="The title" user={null} />);
    const userElement = screen.queryByText(/user name/i);
    expect(userElement).not.toBeInTheDocument();
  });

  it('should render user name passed into user prop', () => {
    render(<Navbar title="The title" user="user name" />);
    const userElement = screen.getByText(/user name/i);
    expect(userElement).toBeInTheDocument();
  });

  it('should render log in button in navbar when user is null', () => {
    render(<Navbar title="The title" user={null} />);
    const loginButtonElement = screen.getByRole('button', { name: 'Log in' });
    expect(loginButtonElement).toBeInTheDocument();
  });
});
