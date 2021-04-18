import * as React from 'react';
import { render } from '@testing-library/react';

import H1 from './H1';

describe('H1 component', () => {
  const text = 'mocked-string';

  it('should render H1', function () {
    const { container } = render(<H1>{text}</H1>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-weight: bold;
        line-height: 1.125;
      }

      .c1 {
        font-size: 3rem;
      }

      <div
        class="c0 c1"
      >
        mocked-string
      </div>
    `);
  });

  it('should show a text as its child', function () {
    const { getByText } = render(<H1>{text}</H1>);

    getByText(text);
  });
});
