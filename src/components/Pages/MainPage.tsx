import * as React from 'react';
import Page from '../UiKit/Page';
import MoviesSection from '../UiKit/Containers/MoviesSection';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { getTrendsThunkAction } from '../../store/trends/actions/getTrendsThunkAction';
import { toast } from 'react-toastify';

const MainPage: React.VFC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((store: RootState) => store.trends.loading);
  const data = useSelector((store: RootState) => store.trends.data);
  const error = useSelector((store: RootState) => store.trends.error);

  React.useEffect(() => {
    dispatch(getTrendsThunkAction());
  }, [dispatch]);

  React.useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <Page>
      <MoviesSection items={data} title="Latest trends" loading={loading} />
    </Page>
  );
};

export default MainPage;
