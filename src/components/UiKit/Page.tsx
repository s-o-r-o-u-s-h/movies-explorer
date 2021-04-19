import * as React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 1200px;
`;

const Page: React.FC = ({ children }) => {
  return (
    <>
      <StyledContainer className="mh-auto pv-5">{children}</StyledContainer>
    </>
  );
};

export default Page;
