import * as React from 'react';
import CenteredElement from '../CenteredElement';
import LoadingIndicator from './LoadingIndicator';

const CenteredLoading: React.VFC = () => {
  return (
    <CenteredElement>
      <LoadingIndicator size="2x" />
    </CenteredElement>
  );
};

export default CenteredLoading;
