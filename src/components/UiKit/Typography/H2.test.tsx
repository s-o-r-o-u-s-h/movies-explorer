import * as React from 'react';
import { render } from '@testing-library/react';

import H2 from './H2';

describe('H2 component', () => {
  const text = 'mocked-string';

  it('should render H2', function () {
    const { container } = render(<H2>{text}</H2>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-weight: bold;
        line-height: 1.125;
      }

      .c1 {
        font-size: 2.5rem;
      }

      <div
        class="c0 c1"
      >
        mocked-string
      </div>
    `);
  });

  it('should show a text as its child', function () {
    const { getByText } = render(<H2>{text}</H2>);

    getByText(text);
  });
});
