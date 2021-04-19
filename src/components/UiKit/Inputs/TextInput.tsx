import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/free-solid-svg-icons';

interface Props {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  ariaLabel?: string;
  autoFocus?: boolean;
  icon?: IconName;
}

const InputContainer = styled.div`
  border: 1px solid var(--border-color);
  background-color: var(--header-secondary-color);
  opacity: 0.7;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
`;

const StyledInput = styled.input`
  border: none;
  background: transparent;
  color: var(--white-color);
  appearance: none;
  border-radius: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: var(--border-color);
`;

const TextInput = React.forwardRef<HTMLInputElement, Props>(
  ({ placeholder, value, onChange, ariaLabel, icon, autoFocus }, ref) => {
    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    };

    return (
      <InputContainer className="p-2">
        <StyledInput
          ref={ref}
          autoFocus={autoFocus}
          aria-label={ariaLabel}
          type="text"
          value={value}
          onChange={onChangeValue}
          placeholder={placeholder}
        />
        {icon && <StyledIcon icon={['fas', icon]} />}
      </InputContainer>
    );
  },
);

TextInput.defaultProps = {
  placeholder: '',
  ariaLabel: 'input',
};

export default React.memo(TextInput);
