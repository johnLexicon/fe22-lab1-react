import { fireEvent, render, screen } from '@testing-library/react';
import App from './App.js';
import bookdata from './data/books';

describe('Login', () => {
  it('should render a header with the message "Log in to see the books collection"', () => {
    render(<App />);
    const h1Element = screen.getByRole('heading', {
      name: /Log in to see the books collection/i
    });
    expect(h1Element).toBeInTheDocument();
  });
  it('should render a collection of books (same amount as in bookdata) after clicked Log in button', () => {
    render(<App />);
    const loginBtnElement = screen.getByRole('button', {
      name: /Log in/i
    });
    fireEvent.click(loginBtnElement);
    const bookElements = screen.getAllByTestId('book-card');
    expect(bookElements.length).toBe(bookdata.books.length);
  });
});
