import * as React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';

const StyledHeader = styled.header`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: var(--header-color);
`;

const Header: React.FC = () => {
  return (
    <StyledHeader className="p-2">
      <Logo />
    </StyledHeader>
  );
};

export default Header;
