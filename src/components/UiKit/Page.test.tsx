import * as React from 'react';
import { render } from '@testing-library/react';
import Page from './Page';

describe('Page component', () => {
  it('should render a Page', function () {
    const { container } = render(<Page />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        position: relative;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        width: 100%;
        background-color: var(--header-color);
      }

      <header
        class="c0 p-2"
      >
        <img
          alt="Logo"
          src="logo.png"
        />
      </header>
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
