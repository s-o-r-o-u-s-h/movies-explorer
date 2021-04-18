import * as React from 'react';
import { render } from '@testing-library/react';

import Heading from './Heading';

describe('Heading component', () => {
  const text = 'mocked-string';

  it('should render Heading', function () {
    const { container } = render(<Heading>{text}</Heading>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-weight: bold;
        line-height: 1.125;
      }

      <div
        class="c0"
      >
        mocked-string
      </div>
    `);
  });

  it('should show a text as its child', function () {
    const { getByText } = render(<Heading>{text}</Heading>);

    getByText(text);
  });
});
