import * as React from 'react';
import { render } from '@testing-library/react';

import H3 from './H3';

describe('H3 component', () => {
  const text = 'mocked-string';

  it('should render H3', function () {
    const { container } = render(<H3>{text}</H3>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-weight: bold;
        line-height: 1.125;
      }

      .c1 {
        font-size: 2rem;
      }

      <div
        class="c0 c1"
      >
        mocked-string
      </div>
    `);
  });

  it('should show a text as its child', function () {
    const { getByText } = render(<H3>{text}</H3>);

    getByText(text);
  });
});
