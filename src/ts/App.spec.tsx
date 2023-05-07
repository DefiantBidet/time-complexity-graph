import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('App should render Grommet wrapper', () => {
    render(<App />);

    const grommetWrapper = document.querySelector('div[class^="StyledGrommet"]');
    expect(grommetWrapper).toBeInTheDocument();
  });
});
