import React from 'react';
import Header from '..';
import { render } from '@testing-library/react';

describe('Header', () =>
  it('should render correctly', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  }));
