import * as React from 'react';
import { render } from '../../utils/testUtils';
import MainPage from './MainPage';

describe('MainPage component', () => {
  it('should render main page', function () {
    const { container } = render(<MainPage />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 1200px;
      }

      .c1 {
        font-weight: bold;
        line-height: 1.125;
      }

      .c2 {
        font-size: 2rem;
      }

      .c4 {
        font-size: 1rem;
      }

      .c3 {
        text-align: center;
      }

      <div
        class="c0 mh-auto pv-5"
      >
        <div>
          <div
            class="c1 c2 ph-2"
          >
            Latest trends
          </div>
          <div
            class="c3"
          >
            <div
              class="c1 c4"
            >
              No results
            </div>
          </div>
        </div>
      </div>
    `);
  });

  it('should show latest trends', function () {
    const { getByText } = render(<MainPage />);
    getByText(/trends/i);
  });
});
