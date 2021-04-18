import * as React from 'react';
import { render } from '@testing-library/react';

import H6 from './H6';

describe('H6 component', () => {
  const text = 'mocked-string';

  it('should render H6', function () {
    const { container } = render(<H6>{text}</H6>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-weight: bold;
        line-height: 1.125;
      }

      .c1 {
        font-size: 1rem;
      }

      <div
        class="c0 c1"
      >
        mocked-string
      </div>
    `);
  });

  it('should show a text as its child', function () {
    const { getByText } = render(<H6>{text}</H6>);

    getByText(text);
  });
});
