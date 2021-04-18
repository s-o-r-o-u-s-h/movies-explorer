import * as React from 'react';
import styled from 'styled-components';
import { Logo } from '../Images';
import { SearchInput } from '../Inputs';

const HeaderContainer = styled.header`
  background-color: var(--header-color);
  position: relative;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  .header-end {
    text-align: right;
  }
  .header-end > div {
    @media (max-width: 720px) {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      border-radius: 0;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper className="p-2">
        <div className="header-start">
          <Logo />
        </div>
        <div className="header-end">
          <SearchInput
            onChangeQuery={() => {}}
            placeholder="Search movie titles..."
          />
        </div>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
