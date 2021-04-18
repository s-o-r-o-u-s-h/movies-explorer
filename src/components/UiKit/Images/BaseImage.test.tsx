import * as React from 'react';
import { render } from '@testing-library/react';
import BaseImage from './BaseImage';

describe('BaseImage', () => {
  const props = {
    src: 'https://image.tmdb.org/t/p/w400/wwemzKWzjKYJFfCeiB57q3r4Bcm.png',
    size: 200,
    alt: 'Movie',
  };
  it('should render Base Image', function () {
    const { container } = render(<BaseImage {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 200px;
        height: auto;
        display: block;
      }

      <img
        alt="Movie"
        class="c0"
        size="200"
        src="https://image.tmdb.org/t/p/w400/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
      />
    `);
    expect(container.firstChild).toHaveStyle('width: 200px');
  });
});
