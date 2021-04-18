import * as React from 'react';
import styled from 'styled-components';
import LoadingIndicator from '../LoadingIndicator';
import { Movie } from '../../../models/api/Movie';
import Item from './Item';
import { H6 } from '../Typography';

interface Props {
  loading?: boolean;
  emptyText?: string;
  items: Pick<Movie, 'id' | 'title' | 'release_date' | 'poster_path'>[];
}

const StyledContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 22rem;
  overflow-y: auto;
  @media (max-width: 720px) {
    max-height: 18rem !important;
    top: calc(100% + 40px) !important;
  }
  background-color: var(--gray-color);
  & > a {
    border-bottom: 1px solid var(--border-color);
  }
  & > a:last-child {
    border-bottom: unset;
  }
`;

const CenteredElement = styled.div`
  text-align: center;
`;

const Container: React.VFC<Props> = ({ loading, emptyText, items }) => {
  return (
    <StyledContainer className="p-1">
      {loading ? (
        <CenteredElement>
          <LoadingIndicator size="2x" />
        </CenteredElement>
      ) : items.length > 0 ? (
        items.map(item => <Item item={item} onPress={() => {}} key={item.id} />)
      ) : (
        <CenteredElement>
          <H6>{emptyText}</H6>
        </CenteredElement>
      )}
    </StyledContainer>
  );
};

Container.defaultProps = {
  loading: false,
  emptyText: 'No results',
};

export default Container;
