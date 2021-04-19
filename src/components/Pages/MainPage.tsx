import * as React from 'react';
import Page from '../UiKit/Page';
import MoviesSection from '../UiKit/Containers/MoviesSection';

const MainPage: React.VFC = () => {
  return (
    <Page>
      <MoviesSection items={[]} title="Latest trends" />
    </Page>
  );
};

export default MainPage;
