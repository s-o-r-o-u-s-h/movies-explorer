import * as React from 'react';

const Page: React.FC = ({ children }) => {
  return (
    <>
      <div className="ph-4 pv-5">{children}</div>
    </>
  );
};

export default Page;
