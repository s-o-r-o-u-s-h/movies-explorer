import * as React from 'react';
import styled from 'styled-components';
import { MovieInfo } from '../../../models/MovieInfo';
import { BaseImage } from '../Images';
import { H3, H6 } from '../Typography';
import MovieDetailsInfo from './MovieDetailsInfo';
import CenteredElement from '../CenteredElement';
import { CenteredLoading } from '../LoadingIndicator';

interface Props {
  item: MovieInfo | null;
  loading?: boolean;
}

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > img {
    width: 24%;
    border-radius: 0.25rem;
  }
  & > .info-container {
    width: 76%;
  }
  @media (max-width: 720px) {
    & > * {
      width: 100% !important;
    }
  }
`;

const MovieDetails: React.VFC<Props> = ({ item, loading }) => {
  return (
    <div>
      {loading ? (
        <CenteredLoading />
      ) : item ? (
        <>
          <H3>{item.title}</H3>
          <StyledContainer className="mv-2">
            <BaseImage src={item.image} alt={item.title} />
            <div className="info-container p-2">
              <MovieDetailsInfo item={item} />
            </div>
          </StyledContainer>
        </>
      ) : (
        <CenteredElement>
          <H6>Movie not found</H6>
        </CenteredElement>
      )}
    </div>
  );
};

MovieDetails.defaultProps = {
  loading: false,
};

export default MovieDetails;
