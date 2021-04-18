import * as React from 'react';
import { render } from '@testing-library/react';
import MoviesSection from './MoviesSection';

describe('MoviesSection component', () => {
  const props = {
    title: 'mocked-string',
    items: [
      {
        id: 100,
        title: 'Godzilla vs. Kong',
        release_date: '2021-03-24',
        poster_path: '/inNN466SKHNjbGmpfhfsaPQNleS.jpg',
      },
      {
        id: 101,
        title: 'Godzilla vs. Kong',
        release_date: '2021-03-24',
        poster_path: '/inNN466SKHNjbGmpfhfsaPQNleS.jpg',
      },
    ],
  };
  it('should render Movies Section', function () {
    const { container } = render(<MoviesSection {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-weight: bold;
        line-height: 1.125;
      }

      .c1 {
        font-size: 2rem;
      }

      .c5 {
        font-size: 1rem;
      }

      .c4 {
        width: 150px;
        height: auto;
        display: block;
        border-radius: 0.25rem;
      }

      .c6 {
        font-size: 0.85rem;
        font-weight: normal;
      }

      .c3 {
        -webkit-text-decoration: none;
        text-decoration: none;
        width: 150px;
        color: var(--black-color);
        display: block;
      }

      .c2 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
      }

      .c2 > a {
        margin: 0.5rem;
      }

      <div>
        <div
          class="c0 c1 ph-2"
        >
          mocked-string
        </div>
        <div
          class="c2"
        >
          <a
            class="c3"
            href="#"
          >
            <img
              alt="Godzilla vs. Kong"
              class="c4"
              src="https://image.tmdb.org/t/p/w400/inNN466SKHNjbGmpfhfsaPQNleS.jpg"
              title="Godzilla vs. Kong"
            />
            <div
              class="mv-1"
            >
              <div
                class="c0 c5"
              >
                Godzilla vs. Kong
              </div>
              <div
                class="c6 mv-1"
              >
                2021-03-24
              </div>
            </div>
          </a>
          <a
            class="c3"
            href="#"
          >
            <img
              alt="Godzilla vs. Kong"
              class="c4"
              src="https://image.tmdb.org/t/p/w400/inNN466SKHNjbGmpfhfsaPQNleS.jpg"
              title="Godzilla vs. Kong"
            />
            <div
              class="mv-1"
            >
              <div
                class="c0 c5"
              >
                Godzilla vs. Kong
              </div>
              <div
                class="c6 mv-1"
              >
                2021-03-24
              </div>
            </div>
          </a>
        </div>
      </div>
    `);
  });

  it('should show a title', function () {
    const { getByText } = render(<MoviesSection {...props} />);
    getByText(props.title);
  });
});
