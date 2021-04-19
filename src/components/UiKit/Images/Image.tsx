import * as React from 'react';
import styled from 'styled-components';
import BaseImage from './BaseImage';

interface Props {
  url: string;
  alt: string;
}

const StyledImage = styled(BaseImage)`
  border-radius: 0.25rem;
`;

const Image: React.VFC<Props> = ({ url, alt }) => {
  return <StyledImage size={150} src={url} alt={alt} title={alt} />;
};

export default React.memo(Image);
