import * as React from 'react';
import { render, fireEvent } from '../../../utils/testUtils';
import Item from './Item';

describe('MovieResultItem component', () => {
  const props = {
    item: {
      id: 51,
      title: 'Godzilla vs. Kong',
      release_date: '2021-03-24',
      poster_path:
        'https://image.tmdb.org/t/p/w400/inNN466SKHNjbGmpfhfsaPQNleS.jpg',
    },
    onPress: jest.fn(),
  };
  it('should render MovieResult item', function () {
    const { container } = render(<Item {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c1 {
        width: 140px;
        height: auto;
        display: block;
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

      .c0 a {
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

      .c0 a > img {
        min-width: 6rem;
        width: 15%;
        border-radius: 0.25rem;
      }

      .c0 a > div {
        width: 85%;
        text-align: initial;
      }

      <div
        class="c0 p-1"
      >
        <a
          href="/movie/51"
        >
          <img
            alt="Godzilla vs. Kong"
            class="c1"
            size="140"
            src="https://image.tmdb.org/t/p/w400/inNN466SKHNjbGmpfhfsaPQNleS.jpg"
            title="Godzilla vs. Kong"
          />
          <div
            class="ph-2"
          >
            <div
              class="c2 c3 mv-2"
            >
              Godzilla vs. Kong
            </div>
            <div
              class="c4"
            >
              2021-03-24
            </div>
          </div>
        </a>
      </div>
    `);
  });

  it('should show movie title and year', function () {
    const { getByText } = render(<Item {...props} />);
    getByText(props.item.title);
    getByText(props.item.release_date);
  });

  it('should navigate when is clicked', function () {
    const { getByRole } = render(<Item {...props} />);
    fireEvent.click(getByRole('link'));
    expect(window.location.pathname).toBe(`/movie/${props.item.id}`);
  });
});
