import * as React from 'react';
import styled from 'styled-components';
import { Logo } from '../UiKit/Images';
import SearchInput from '../SearchInput/SearchInput';
import { useDispatch } from 'react-redux';
import { searchMoviesThunkAction } from '../../store/search/actions/searchMoviesThunkAction';

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

const Header: React.VFC = () => {
  const dispatch = useDispatch();

  const handleChangeQuery = (value: string) => {
    if (value.length > 2) {
      dispatch(searchMoviesThunkAction(value));
    }
  };

  return (
    <HeaderContainer>
      <HeaderWrapper className="p-2">
        <div className="header-start">
          <Logo />
        </div>
        <div className="header-end">
          <SearchInput
            onChangeQuery={handleChangeQuery}
            placeholder="Search movie titles..."
          />
        </div>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
