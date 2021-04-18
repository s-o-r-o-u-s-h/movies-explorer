import * as React from 'react';
import { render } from '@testing-library/react';

import Image from './Image';

describe('Image component', () => {
  const props = {
    url: 'https://mocked-string',
    alt: 'mocked-alt',
  };
  it('should render Image', () => {
    const { container } = render(<Image {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 150px;
        height: auto;
        display: block;
        border-radius: 0.25rem;
      }

      <img
        alt="mocked-alt"
        class="c0"
        src="https://mocked-string"
        title="mocked-alt"
      />
    `);
  });

  it('should be accessible via alt props', () => {
    const { getByAltText } = render(<Image {...props} />);
    getByAltText(props.alt);
  });
});
