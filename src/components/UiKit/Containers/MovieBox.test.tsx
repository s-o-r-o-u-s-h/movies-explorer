import * as React from 'react';
import { render } from '@testing-library/react';
import MovieBox from './MovieBox';

describe('MovieBox component', () => {
  const props = {
    item: {
      title: 'Godzilla vs. Kong',
      release_date: '2021-03-24',
      poster_path: '/inNN466SKHNjbGmpfhfsaPQNleS.jpg',
    },
  };
  it('should render MovieBox', function () {
    const { container } = render(<MovieBox {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c1 {
        width: 150px;
        height: auto;
        display: block;
        border-radius: 0.25rem;
      }

      .c2 {
        font-weight: bold;
        line-height: 1.125;
      }

      .c3 {
        font-size: 1rem;
      }

      .c4 {
        font-size: 0.85rem;
        font-weight: normal;
      }

      .c0 {
        -webkit-text-decoration: none;
        text-decoration: none;
        width: 150px;
        color: var(--black-color);
        display: block;
      }

      <a
        class="c0"
        href="#"
      >
        <img
          alt="Godzilla vs. Kong"
          class="c1"
          src="https://image.tmdb.org/t/p/w400/inNN466SKHNjbGmpfhfsaPQNleS.jpg"
          title="Godzilla vs. Kong"
        />
        <div
          class="mv-1"
        >
          <div
            class="c2 c3"
          >
            Godzilla vs. Kong
          </div>
          <div
            class="c4 mv-1"
          >
            2021-03-24
          </div>
        </div>
      </a>
    `);
  });

  it('should image, show title and release date of a movie', function () {
    const { getByText, getByAltText } = render(<MovieBox {...props} />);
    getByText(props.item.title);
    getByText(props.item.release_date);
    getByAltText(props.item.title);
  });
});
