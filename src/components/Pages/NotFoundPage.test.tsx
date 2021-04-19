import * as React from 'react';
import { render } from '../../utils/testUtils';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage component', () => {
  it('should render 404 page', function () {
    const { container } = render(<NotFoundPage />);
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

      <div
        class="c0 mh-auto pv-5"
      >
        <div
          class="c1 c2"
        >
          This page does not exist
        </div>
      </div>
    `);
  });

  it('should show not found message', function () {
    const { getByText } = render(<NotFoundPage />);
    getByText('This page does not exist');
  });
});
