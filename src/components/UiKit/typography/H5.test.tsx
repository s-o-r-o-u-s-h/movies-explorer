import * as React from 'react';
import { render } from '@testing-library/react';

import H5 from './H5';

describe('H5 component', () => {
  const text = 'mocked-string';

  it('should render H5', function () {
    const { container } = render(<H5>{text}</H5>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-weight: bold;
        line-height: 1.125;
      }

      .c1 {
        font-size: 1.25rem;
      }

      <div
        class="c0 c1"
      >
        mocked-string
      </div>
    `);
  });

  it('should show a text as its child', function () {
    const { getByText } = render(<H5>{text}</H5>);

    getByText(text);
  });
});
