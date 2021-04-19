import * as React from 'react';
import { render } from '../../utils/testUtils';
import MovieDetailsPage from './MovieDetailsPage';

describe('MovieDetailsPage component', () => {
  it('should render main page', function () {
    const { container } = render(<MovieDetailsPage />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 1200px;
      }

      .c2 {
        font-weight: bold;
        line-height: 1.125;
      }

      .c3 {
        font-size: 1rem;
      }

      .c1 {
        text-align: center;
      }

      <div
        class="c0 mh-auto pv-5"
      >
        <div>
          <div
            class="c1"
          >
            <div
              class="c2 c3"
            >
              Movie not found
            </div>
          </div>
        </div>
      </div>
    `);
  });
});
