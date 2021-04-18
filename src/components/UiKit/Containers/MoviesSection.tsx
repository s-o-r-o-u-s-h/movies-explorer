import * as React from 'react';
import { H3 } from '../Typography';
import styled from 'styled-components';
import { Movie } from '../../../models/api/Movie';
import MovieBox from './MovieBox';

interface Props {
  title: string;
  items: Pick<Movie, 'title' | 'release_date' | 'poster_path' | 'id'>[];
  loading?: boolean;
}

const StyledList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  & > a {
    margin: 0.5rem;
  }
`;

const MoviesSection: React.VFC<Props> = ({ title, items, loading }) => {
  return (
    <div>
      <H3 className="ph-2">{title}</H3>
      {loading ? (
        <div>Loading</div>
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
};

export default MoviesSection;
