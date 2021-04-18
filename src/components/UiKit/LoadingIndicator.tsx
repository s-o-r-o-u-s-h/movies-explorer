import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

interface Props {
  size?: 'lg' | '2x';
}

const StyledIcon = styled(FontAwesomeIcon)`
  color: var(--header-color);
`;

const LoadingIndicator: React.VFC<Props> = ({ size }) => {
  return (
    <StyledIcon
      role="alert"
      aria-busy
      icon={['fas', 'spinner']}
      size={size}
      spin
    />
  );
};

LoadingIndicator.defaultProps = {
  size: 'lg',
};

export default LoadingIndicator;
