import * as React from 'react';
import { render, fireEvent } from '../../utils/testUtils';
import SearchInput from './SearchInput';

describe('SearchInput component', () => {
  const props = {
    onChangeQuery: jest.fn(),
    placeholder: 'mocked-string',
  };
  it('should show correct elements depending on the state of the component', function () {
    const {
      getByRole,
      queryByRole,
      getByPlaceholderText,
      queryByPlaceholderText,
    } = render(<SearchInput {...props} />);

    const button = getByRole('button');
    expect(queryByPlaceholderText(props.placeholder)).not.toBeInTheDocument();
    fireEvent.click(button);
    getByPlaceholderText(props.placeholder);
    expect(queryByRole('button')).not.toBeInTheDocument();
  });

  it('should handle onValueChange events', function () {
    const textToInput = 'test';

    const { getByRole, getByPlaceholderText } = render(
      <SearchInput {...props} />,
    );

    const button = getByRole('button');
    fireEvent.click(button);
    const input = getByPlaceholderText(props.placeholder);
    fireEvent.change(input, { target: { value: textToInput } });
    expect(props.onChangeQuery).toHaveBeenCalledWith(textToInput);
  });
});
