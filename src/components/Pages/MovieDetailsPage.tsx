import * as React from 'react';
import Page from '../UiKit/Page';
import { MovieDetails } from '../UiKit/MovieDetails';

const MovieDetailsPage: React.VFC = () => {
  return (
    <Page>
      <MovieDetails item={null} />
    </Page>
  );
};

export default MovieDetailsPage;
