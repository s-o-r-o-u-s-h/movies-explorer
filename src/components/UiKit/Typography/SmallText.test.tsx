import * as React from 'react';
import { render } from '@testing-library/react';

import SmallText from './SmallText';

describe('SmallText component', () => {
  const text = 'mocked-string';

  it('should render SmallText', function () {
    const { container } = render(<SmallText>{text}</SmallText>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 0.85rem;
        font-weight: normal;
      }

      <div
        class="c0"
      >
        mocked-string
      </div>
    `);
  });

  it('should show a text as its child', function () {
    const { getByText } = render(<SmallText>{text}</SmallText>);

    getByText(text);
  });
});
