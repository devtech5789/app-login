import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages/home';

describe('Home component', () => {
  it('has heading "Welcome"', () => {
    const { queryByText } = render(<Home />);

    expect(queryByText('Welcome,')).toBeTruthy();
  });

  it('has "Logout" button', () => {
    const { queryByText } = render(<Home />);
    const btn = queryByText('Logout');

    expect(btn).toBeTruthy();
  });

  it('has "Fetch private data" button', () => {
    const { queryByText } = render(<Home />);
    const btn = queryByText('Fetch private data');

    expect(btn).toBeTruthy();
  });
});
