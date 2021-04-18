import * as React from 'react';
import { render } from '@testing-library/react';
import MovieDetails from './MovieDetails';

describe('MovieDetails component', () => {
  const props = {
    item: {
      title: 'Courier Spy Movie',
      image:
        'https://films.bz/img-medium/uploads/posts/2021-04/1618756460_lrtesnerixad51af51ag158sjh3s531g513ag.jpg',
      country: 'Great Britain',
      director: 'Dominic Cook',
      year: '2020',
      cast: 'Benedict Cumberbatch, Rachel Brosnahe',
      duration: '111 minutes',
      genre: 'Drama, Thriller',
      summary:
        'During the Cold War, Colonel Oleg Penkovsky of the General Staff of the Russian Defense Ministry got in touch with Grill Winn, a British businessman spy who is interested in constant contact with Moscow.',
    },
  };
  it('should render Movie details', () => {
    const { container } = render(<MovieDetails {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c3 {
        width: 140px;
        height: auto;
        display: block;
      }

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
        border-collapse: collapse;
      }

      .c4 tr {
        border-bottom: 1px solid var(--black-color);
      }

      .c4 tr:last-child {
        border-bottom: unset;
      }

      .c4 tr td:first-child {
        width: 6rem;
      }

      .c2 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      .c2 > img {
        width: 24%;
        border-radius: 0.25rem;
      }

      .c2 > .info-container {
        width: 76%;
      }

      @media (max-width:720px) {
        .c2 > * {
          width: 100% !important;
        }
      }

      <div>
        <div
          class="c0 c1"
        >
          Courier Spy Movie
        </div>
        <div
          class="c2 mv-2"
        >
          <img
            alt="Courier Spy Movie"
            class="c3"
            size="140"
            src="https://films.bz/img-medium/uploads/posts/2021-04/1618756460_lrtesnerixad51af51ag158sjh3s531g513ag.jpg"
          />
          <div
            class="info-container p-2"
          >
            <table
              class="c4"
            >
              <tbody>
                <tr>
                  <td
                    class="pv-2"
                  >
                    <div
                      class="c0 c5"
                    >
                      Year:
                    </div>
                  </td>
                  <td
                    class="pv-2"
                  >
                    2020
                  </td>
                </tr>
                <tr>
                  <td
                    class="pv-2"
                  >
                    <div
                      class="c0 c5"
                    >
                      Country:
                    </div>
                  </td>
                  <td
                    class="pv-2"
                  >
                    Great Britain
                  </td>
                </tr>
                <tr>
                  <td
                    class="pv-2"
                  >
                    <div
                      class="c0 c5"
                    >
                      Genre:
                    </div>
                  </td>
                  <td
                    class="pv-2"
                  >
                    Drama, Thriller
                  </td>
                </tr>
                <tr>
                  <td
                    class="pv-2"
                  >
                    <div
                      class="c0 c5"
                    >
                      Duration:
                    </div>
                  </td>
                  <td
                    class="pv-2"
                  >
                    111 minutes
                  </td>
                </tr>
                <tr>
                  <td
                    class="pv-2"
                  >
                    <div
                      class="c0 c5"
                    >
                      Director:
                    </div>
                  </td>
                  <td
                    class="pv-2"
                  >
                    Dominic Cook
                  </td>
                </tr>
                <tr>
                  <td
                    class="pv-2"
                  >
                    <div
                      class="c0 c5"
                    >
                      Cast:
                    </div>
                  </td>
                  <td
                    class="pv-2"
                  >
                    Benedict Cumberbatch, Rachel Brosnahe
                  </td>
                </tr>
                <tr>
                  <td
                    class="pv-2"
                  >
                    <div
                      class="c0 c5"
                    >
                      Summary:
                    </div>
                  </td>
                  <td
                    class="pv-2"
                  >
                    <p>
                      During the Cold War, Colonel Oleg Penkovsky of the General Staff of the Russian Defense Ministry got in touch with Grill Winn, a British businessman spy who is interested in constant contact with Moscow.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `);
  });

  it('should show title, year, director, cast, duration, genre and summary of a movie', () => {
    const { getByText } = render(<MovieDetails {...props} />);
    getByText(props.item.title);
    getByText(props.item.year);
    getByText(props.item.director);
    getByText(props.item.cast);
    getByText(props.item.duration);
    getByText(props.item.genre);
    getByText(props.item.summary);
  });

  it('should handle loading prop', () => {
    const { getByRole, queryByRole, container, rerender } = render(
      <MovieDetails {...props} loading />,
    );
    getByRole('alert');
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        text-align: center;
      }

      <div>
        <div
          class="c0"
        >
          <i
            class="fa"
            role="alert"
          />
        </div>
      </div>
    `);

    rerender(<MovieDetails {...props} />);
    expect(queryByRole('alert')).not.toBeInTheDocument();
  });

  it('should handle null item prop', function () {
    const text = 'Not found';
    const { getByText, queryByText, container, rerender } = render(
      <MovieDetails {...props} item={null} />,
    );
    getByText(text);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c1 {
        font-weight: bold;
        line-height: 1.125;
      }

      .c2 {
        font-size: 1rem;
      }

      .c0 {
        text-align: center;
      }

      <div>
        <div
          class="c0"
        >
          <div
            class="c1 c2"
          >
            Not found
          </div>
        </div>
      </div>
    `);
    rerender(<MovieDetails {...props} />);
    expect(queryByText(text)).not.toBeInTheDocument();
  });
});
