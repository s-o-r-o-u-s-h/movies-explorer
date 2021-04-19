import * as React from 'react';
import { H3, H6 } from '../Typography';
import styled from 'styled-components';
import { Movie } from '../../../models/api/Movie';
import MovieBox from './MovieBox';
import CenteredElement from '../CenteredElement';
import { CenteredLoading } from '../LoadingIndicator';

interface Props {
  title: string;
  emptyText?: string;
  items: Pick<Movie, 'title' | 'release_date' | 'poster_path' | 'id'>[];
  loading?: boolean;
}

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > div {
    margin: 0.5rem;
  }
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
        <CenteredLoading />
      ) : items.length === 0 ? (
        <CenteredElement>
          <H6>{emptyText}</H6>
        </CenteredElement>
      ) : (
        <StyledList className="mv-2">
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

export default React.memo(MoviesSection);
