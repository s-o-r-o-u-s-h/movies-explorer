import * as React from 'react';
import { render } from '@testing-library/react';
import CenteredLoading from './CenteredLoading';

describe('CenteredLoading component', () => {
  it('should render a Loading indicator in the center', () => {
    const { container, getByRole } = render(<CenteredLoading />);
    getByRole('alert');
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        text-align: center;
      }

      <div
        class="c0"
      >
        <i
          class="fa"
          role="alert"
        />
      </div>
    `);
  });
});
