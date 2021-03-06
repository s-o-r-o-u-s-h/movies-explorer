import * as React from 'react';
import { render } from '../../../utils/testUtils';
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
    emptyText: 'mocked-empty-string',
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

      .c6 {
        font-size: 1rem;
      }

      .c4 {
        width: 150px;
        height: auto;
        display: block;
      }

      .c5 {
        border-radius: 0.25rem;
      }

      .c7 {
        font-size: 0.85rem;
        font-weight: normal;
      }

      .c3 a {
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
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }

      .c2 > div {
        margin: 0.5rem;
      }

      <div>
        <div
          class="c0 c1 ph-2"
        >
          mocked-string
        </div>
        <div
          class="c2 mv-2"
        >
          <div
            class="c3"
          >
            <a
              href="/movie/100"
            >
              <img
                alt="Godzilla vs. Kong"
                class="c4 c5"
                size="150"
                src="/inNN466SKHNjbGmpfhfsaPQNleS.jpg"
                title="Godzilla vs. Kong"
              />
              <div
                class="mv-1"
              >
                <div
                  class="c0 c6"
                >
                  Godzilla vs. Kong
                </div>
                <div
                  class="c7 mv-1"
                >
                  2021-03-24
                </div>
              </div>
            </a>
          </div>
          <div
            class="c3"
          >
            <a
              href="/movie/101"
            >
              <img
                alt="Godzilla vs. Kong"
                class="c4 c5"
                size="150"
                src="/inNN466SKHNjbGmpfhfsaPQNleS.jpg"
                title="Godzilla vs. Kong"
              />
              <div
                class="mv-1"
              >
                <div
                  class="c0 c6"
                >
                  Godzilla vs. Kong
                </div>
                <div
                  class="c7 mv-1"
                >
                  2021-03-24
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    `);
  });

  it('should show a title', function () {
    const { getByText } = render(<MoviesSection {...props} />);
    getByText(props.title);
  });

  it('should show a text when the list is empty', () => {
    const { getByText, container } = render(
      <MoviesSection {...props} items={[]} />,
    );
    getByText(props.emptyText);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-weight: bold;
        line-height: 1.125;
      }

      .c1 {
        font-size: 2rem;
      }

      .c3 {
        font-size: 1rem;
      }

      .c2 {
        text-align: center;
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
          <div
            class="c0 c3"
          >
            mocked-empty-string
          </div>
        </div>
      </div>
    `);
  });

  it('should show a loading icon when its loading prop is truthy', function () {
    const { getByRole, container } = render(
      <MoviesSection {...props} loading />,
    );
    getByRole('alert');
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-weight: bold;
        line-height: 1.125;
      }

      .c1 {
        font-size: 2rem;
      }

      .c2 {
        text-align: center;
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
          <i
            class="fa"
            role="alert"
          />
        </div>
      </div>
    `);
  });

  it('should not show the text when the list is not empty', function () {
    const { queryByText } = render(<MoviesSection {...props} />);
    expect(queryByText(props.emptyText)).not.toBeInTheDocument();
  });

  it('should not show the loading icon when the list is not empty', function () {
    const { queryByRole } = render(<MoviesSection {...props} />);
    expect(queryByRole('alert')).not.toBeInTheDocument();
  });
});
