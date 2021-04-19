import * as React from 'react';
import { render } from '@testing-library/react';
import Container from './Container';

describe('MovieResultContainer component', () => {
  const props = {
    items: [
      {
        id: 53,
        title: 'Godzilla vs. Kong',
        release_date: '2021-03-24',
        poster_path:
          'https://image.tmdb.org/t/p/w400/inNN466SKHNjbGmpfhfsaPQNleS.jpg',
      },
    ],
  };
  it('should render MovieResult container', () => {
    const { container } = render(<Container {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c2 {
        width: 140px;
        height: auto;
        display: block;
      }

      .c3 {
        font-weight: bold;
        line-height: 1.125;
      }

      .c4 {
        font-size: 1rem;
      }

      .c5 {
        font-size: 0.85rem;
        font-weight: normal;
      }

      .c1 {
        -webkit-text-decoration: none;
        text-decoration: none;
        color: var(--black-color);
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        cursor: pointer;
      }

      .c1 > img {
        min-width: 6rem;
        width: 15%;
        border-radius: 0.25rem;
      }

      .c1 > div {
        width: 85%;
      }

      .c0 {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        max-height: 22rem;
        overflow-y: auto;
        background-color: var(--gray-color);
      }

      .c0 > a {
        border-bottom: 1px solid var(--border-color);
      }

      .c0 > a:last-child {
        border-bottom: unset;
      }

      @media (max-width:720px) {
        .c0 {
          max-height: 18rem !important;
          top: calc(100% + 40px) !important;
        }
      }

      <div
        class="c0 p-1"
      >
        <a
          class="c1 p-1"
        >
          <img
            alt="Godzilla vs. Kong"
            class="c2"
            size="140"
            src="https://image.tmdb.org/t/p/w400/inNN466SKHNjbGmpfhfsaPQNleS.jpg"
            title="Godzilla vs. Kong"
          />
          <div
            class="ph-2"
          >
            <div
              class="c3 c4 mv-2"
            >
              Godzilla vs. Kong
            </div>
            <div
              class="c5"
            >
              2021-03-24
            </div>
          </div>
        </a>
      </div>
    `);
  });

  it('should handle loading prop', () => {
    const { getByRole, queryByRole, container, rerender } = render(
      <Container {...props} loading />,
    );
    getByRole('alert');
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c1 {
        text-align: center;
      }

      .c0 {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        max-height: 22rem;
        overflow-y: auto;
        background-color: var(--gray-color);
      }

      .c0 > a {
        border-bottom: 1px solid var(--border-color);
      }

      .c0 > a:last-child {
        border-bottom: unset;
      }

      @media (max-width:720px) {
        .c0 {
          max-height: 18rem !important;
          top: calc(100% + 40px) !important;
        }
      }

      <div
        class="c0 p-1"
      >
        <div
          class="c1"
        >
          <i
            class="fa"
            role="alert"
          />
        </div>
      </div>
    `);

    rerender(<Container {...props} />);
    expect(queryByRole('alert')).not.toBeInTheDocument();
  });

  it('should show a text when the list is empty', function () {
    const text = 'Not found';
    const { getByText, queryByText, container, rerender } = render(
      <Container {...props} items={[]} emptyText={text} />,
    );
    getByText(text);
    expect(container.firstChild).toMatchInlineSnapshot(`
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

      .c0 {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        max-height: 22rem;
        overflow-y: auto;
        background-color: var(--gray-color);
      }

      .c0 > a {
        border-bottom: 1px solid var(--border-color);
      }

      .c0 > a:last-child {
        border-bottom: unset;
      }

      @media (max-width:720px) {
        .c0 {
          max-height: 18rem !important;
          top: calc(100% + 40px) !important;
        }
      }

      <div
        class="c0 p-1"
      >
        <div
          class="c1"
        >
          <div
            class="c2 c3"
          >
            Not found
          </div>
        </div>
      </div>
    `);
    rerender(<Container {...props} />);
    expect(queryByText(text)).not.toBeInTheDocument();
  });
});
