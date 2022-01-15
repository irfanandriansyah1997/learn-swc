import { render } from '@testing-library/react';

import Homepage from '@components/homepage';

describe('Testing homepage component', () => {
  it('Should be rendered correctly', () => {
    const { getByText } = render(<Homepage />);

    expect(getByText(/Hello World/)).toBeInTheDocument();
  });
});
