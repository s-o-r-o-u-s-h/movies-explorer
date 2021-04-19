import * as React from 'react';
import Page from '../UiKit/Page';
import { MovieDetails } from '../UiKit/MovieDetails';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { getMovieDetailsThunkAction } from '../../store/details/actions/getMovieDetailsThunkAction';
import { useParams } from 'react-router-dom';

const MovieDetailsPage: React.VFC = () => {
  const { id } = useParams<{ id: any }>();
  const dispatch = useDispatch();
  const loading = useSelector((store: RootState) => store.details.loading);
  const data = useSelector((store: RootState) => store.details.item);
  // const error = useSelector((store: RootState) => store.details.error);

  React.useEffect(() => {
    dispatch(getMovieDetailsThunkAction(id));
  }, [id, dispatch]);

  return (
    <Page>
      <MovieDetails item={data} loading={loading} />
    </Page>
  );
};

export default MovieDetailsPage;
