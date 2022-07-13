import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

describe('Home', () => {
  it('renders a image', () => {
    render(<Home/>)

    const Image = screen.getByTestId('ptkimg');

    expect(Image).toHaveProperty('alt', 'Patrik');
  })
})
