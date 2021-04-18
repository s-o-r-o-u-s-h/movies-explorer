import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/free-solid-svg-icons';

interface Props {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  ariaLabel?: string;
  icon?: IconName;
}

const InputContainer = styled.div`
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  &:focus-within {
    outline: 1px auto var(--focus-color);
  }
`;

const StyledInput = styled.input`
  border: none;
  background: transparent;
  border-radius: 0;
  flex: 1;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: var(--border-color);
`;

const TextInput: React.VFC<Props> = ({
  placeholder,
  value,
  onChange,
  ariaLabel,
  icon,
}) => {
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <InputContainer className="p-2">
      <StyledInput
        aria-label={ariaLabel}
        type="text"
        value={value}
        onChange={onChangeValue}
        placeholder={placeholder}
      />
      {icon && <StyledIcon icon={['fas', icon]} />}
    </InputContainer>
  );
};

TextInput.defaultProps = {
  placeholder: '',
  ariaLabel: 'input',
};

export default TextInput;
