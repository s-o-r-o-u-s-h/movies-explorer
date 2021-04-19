import * as React from 'react';
import Page from '../UiKit/Page';
import { H3 } from '../UiKit/Typography';

const NotFoundPage: React.VFC = () => {
  return (
    <Page>
      <H3>This page does not exist</H3>
    </Page>
  );
};

export default NotFoundPage;
