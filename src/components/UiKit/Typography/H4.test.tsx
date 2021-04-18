import * as React from 'react';
import { render } from '@testing-library/react';

import H4 from './H4';

describe('H4 component', () => {
  const text = 'mocked-string';

  it('should render H4', function () {
    const { container } = render(<H4>{text}</H4>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-weight: bold;
        line-height: 1.125;
      }

      .c1 {
        font-size: 1.5rem;
      }

      <div
        class="c0 c1"
      >
        mocked-string
      </div>
    `);
  });

  it('should show a text as its child', function () {
    const { getByText } = render(<H4>{text}</H4>);

    getByText(text);
  });
});
