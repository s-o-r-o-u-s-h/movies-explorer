import * as React from 'react';
import Header from './Header/Header';

const Page: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className="ph-4 pv-5">{children}</div>
    </>
  );
};

export default Page;
