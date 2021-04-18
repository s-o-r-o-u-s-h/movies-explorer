import * as React from 'react';
import styled from 'styled-components';

interface Props {
  url: string;
  alt: string;
}

const StyledImage = styled.img`
  width: 150px;
  height: auto;
  display: block;
  border-radius: 0.25rem;
`;

const Image: React.VFC<Props> = ({ url, alt }) => {
  return <StyledImage src={url} alt={alt} title={alt} />;
};

export default Image;
