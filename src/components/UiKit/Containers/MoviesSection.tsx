import * as React from 'react';
import { H3, H6 } from '../Typography';
import styled from 'styled-components';
import { Movie } from '../../../models/api/Movie';
import MovieBox from './MovieBox';
import LoadingIndicator from '../LoadingIndicator';

interface Props {
  title: string;
  emptyText?: string;
  items: Pick<Movie, 'title' | 'release_date' | 'poster_path' | 'id'>[];
  loading?: boolean;
}

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > a {
    margin: 0.5rem;
  }
`;

const CenteredElement = styled.div`
  text-align: center;
`;

const MoviesSection: React.VFC<Props> = ({
  title,
  items,
  loading,
  emptyText,
}) => {
  return (
    <div>
      <H3 className="ph-2">{title}</H3>
      {loading ? (
        <CenteredElement>
          <LoadingIndicator size="2x" />
        </CenteredElement>
      ) : items.length === 0 ? (
        <CenteredElement>
          <H6>{emptyText}</H6>
        </CenteredElement>
      ) : (
        <StyledList>
          {items.map(item => (
            <MovieBox key={item.id} item={item} />
          ))}
        </StyledList>
      )}
    </div>
  );
};

MoviesSection.defaultProps = {
  loading: false,
  emptyText: 'No results',
};

export default MoviesSection;
