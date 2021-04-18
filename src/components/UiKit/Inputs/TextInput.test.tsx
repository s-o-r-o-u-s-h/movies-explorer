import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextInput from './TextInput';

describe('TextInput component', () => {
  const props = {
    value: '',
    placeholder: 'Enter a text...',
    onChange: jest.fn((text: string) => text),
    ariaLabel: 'text-input',
  };
  it('should render a text input', () => {
    const { container, getByLabelText } = render(<TextInput {...props} />);

    expect(getByLabelText(props.ariaLabel)).toHaveAttribute('type', 'text');
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        border: 1px solid var(--border-color);
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-radius: 0.25rem;
        font-family: 'Roboto',sans-serif;
        font-size: 1rem;
      }

      .c0:focus-within {
        outline: 1px auto var(--focus-color);
      }

      .c1 {
        border: none;
        background: transparent;
        border-radius: 0;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        font-family: 'Roboto',sans-serif;
        font-size: 1rem;
      }

      .c1:focus {
        outline: none;
      }

      <div
        class="c0 p-2"
      >
        <input
          aria-label="text-input"
          class="c1"
          placeholder="Enter a text..."
          type="text"
          value=""
        />
      </div>
    `);
  });

  it('should fire onChangeValue when user enters a text', () => {
    const textToInput = 'hello';

    const { getByLabelText } = render(<TextInput {...props} />);
    const input = getByLabelText(props.ariaLabel);
    fireEvent.change(input, { target: { value: textToInput } });

    expect(props.onChange).toHaveBeenCalledWith(textToInput);
  });
});
