import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import IconButton from './IconButton';

describe('IconButton component', () => {
  const props: React.ComponentProps<typeof IconButton> = {
    icon: 'search',
    onPress: jest.fn(),
    ariaLabel: 'search',
  };
  it('should render a button with icon', () => {
    const { container } = render(<IconButton {...props} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        border: none;
        color: var(--border-color);
        background: transparent;
        outline: none;
        cursor: pointer;
        font-size: 1rem;
      }

      <button
        aria-label="search"
        class="c0 p-2"
        type="button"
      >
        <i
          class="fa"
        />
      </button>
    `);
  });

  it('should handle onPress events', function () {
    const { getByRole } = render(<IconButton {...props} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(props.onPress).toHaveBeenCalled();
  });
});
