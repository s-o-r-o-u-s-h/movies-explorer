import * as React from 'react';
import styled from 'styled-components';
import { IconName } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  icon: IconName;
  onPress: () => void;
  ariaLabel?: string;
  type?: 'submit' | 'button';
}

const StyledIconButton = styled.button`
  border: none;
  color: var(--border-color);
  background: transparent;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
`;

const IconButton: React.VFC<Props> = ({ icon, ariaLabel, type, onPress }) => {
  return (
    <StyledIconButton
      aria-label={ariaLabel}
      onClick={onPress}
      type={type}
      className="p-2"
    >
      <FontAwesomeIcon icon={['fas', icon]} />
    </StyledIconButton>
  );
};

IconButton.defaultProps = {
  ariaLabel: 'button',
  type: 'button',
};

export default React.memo(IconButton);
