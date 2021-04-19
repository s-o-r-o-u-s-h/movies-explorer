import * as React from 'react';
import { render } from '@testing-library/react';
import Page from './Page';

describe('Page component', () => {
  it('should render a Page', function () {
    const { container } = render(<Page />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 1200px;
      }

      <div
        class="c0 mh-auto pv-5"
      />
    `);
  });

  it('should show children elements', function () {
    const text = 'mocked-string';
    const { getByText } = render(
      <Page>
        <p>{text}</p>
      </Page>,
    );
    getByText(text);
  });
});
