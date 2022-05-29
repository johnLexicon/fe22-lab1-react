import { render, screen, fireEvent } from '@testing-library/react';
import Book from '../Book';

const mockBook = {
  id: '1',
  title: 'The title',
  author: 'The author',
  desc: 'The description',
  image: 'the img url'
};

describe('Book tests', () => {
  it('button should show the text Dark', () => {
    render(<Book book={mockBook} />);
    const buttonElement = screen.getByRole('button', { name: 'Dark' });
    expect(buttonElement).toBeInTheDocument();
  });
  it('should change to dark mode when button clicked', async () => {
    render(<Book book={mockBook} />);
    const buttonElement = screen.getByRole('button', { name: 'Dark' });
    fireEvent.click(buttonElement);
    expect(await screen.findByTestId('book-card')).toHaveClass('dark');
  });
});
