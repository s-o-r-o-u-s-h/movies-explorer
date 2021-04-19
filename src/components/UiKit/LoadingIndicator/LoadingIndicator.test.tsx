import * as React from 'react';
import { render } from '@testing-library/react';
import LoadingIndicator from './LoadingIndicator';

describe('LoadingIndicator component', () => {
  it('should render Loading indicator', () => {
    const { container, getByRole } = render(<LoadingIndicator />);
    getByRole('alert');
    expect(container.firstChild).toMatchInlineSnapshot(`
      <i
        class="fa"
        role="alert"
      />
    `);
  });
});
