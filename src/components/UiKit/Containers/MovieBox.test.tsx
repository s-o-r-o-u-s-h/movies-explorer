import * as React from 'react';
import { fireEvent, render } from '../../../utils/testUtils';
import MovieBox from './MovieBox';

describe('MovieBox component', () => {
  const props = {
    item: {
      title: 'Godzilla vs. Kong',
      release_date: '2021-03-24',
      poster_path: '/inNN466SKHNjbGmpfhfsaPQNleS.jpg',
      id: 10,
    },
  };
  it('should render MovieBox', function () {
    const { container } = render(<MovieBox {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c1 {
        width: 150px;
        height: auto;
        display: block;
      }

      .c2 {
        border-radius: 0.25rem;
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

      .c0 a {
        -webkit-text-decoration: none;
        text-decoration: none;
        width: 150px;
        color: var(--black-color);
        display: block;
      }

      <div
        class="c0"
      >
        <a
          href="/movie/10"
        >
          <img
            alt="Godzilla vs. Kong"
            class="c1 c2"
            size="150"
            src="https://image.tmdb.org/t/p/w400/inNN466SKHNjbGmpfhfsaPQNleS.jpg"
            title="Godzilla vs. Kong"
          />
          <div
            class="mv-1"
          >
            <div
              class="c3 c4"
            >
              Godzilla vs. Kong
            </div>
            <div
              class="c5 mv-1"
            >
              2021-03-24
            </div>
          </div>
        </a>
      </div>
    `);
  });

  it('should image, show title and release date of a movie', function () {
    const { getByText, getByAltText } = render(<MovieBox {...props} />);
    getByText(props.item.title);
    getByText(props.item.release_date);
    getByAltText(props.item.title);
  });

  it('should navigate when is clicked', function () {
    const { getByRole } = render(<MovieBox {...props} />);
    fireEvent.click(getByRole('link'));
    expect(window.location.pathname).toBe(`/movie/${props.item.id}`);
  });
});
