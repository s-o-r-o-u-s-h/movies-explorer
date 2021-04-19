import * as React from 'react';
import { render } from '@testing-library/react';
import MovieDetailsInfo from './MovieDetailsInfo';

describe('MovieDetailsInfo component', () => {
  const props = {
    item: {
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
  it('should render MovieDetails info', () => {
    const { container } = render(<MovieDetailsInfo {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c1 {
        font-weight: bold;
        line-height: 1.125;
      }

      .c2 {
        font-size: 1rem;
      }

      .c0 {
        border-collapse: collapse;
      }

      .c0 tr {
        border-bottom: 1px solid var(--black-color);
      }

      .c0 tr:last-child {
        border-bottom: unset;
      }

      .c0 tr td:first-child {
        width: 6rem;
      }

      <table
        class="c0"
      >
        <tbody>
          <tr>
            <td
              class="pv-2"
            >
              <div
                class="c1 c2"
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
                class="c1 c2"
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
                class="c1 c2"
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
                class="c1 c2"
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
                class="c1 c2"
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
                class="c1 c2"
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
                class="c1 c2"
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
    `);
  });

  it('should show year, director, cast, duration, genre and summary of a movie', function () {
    const { getByText } = render(<MovieDetailsInfo {...props} />);
    getByText(props.item.year);
    getByText(props.item.director);
    getByText(props.item.cast);
    getByText(props.item.duration);
    getByText(props.item.genre);
    getByText(props.item.summary);
  });
});
