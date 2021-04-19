import styled from 'styled-components';
import * as React from 'react';

interface Props {
  size?: number;
  alt: string;
}

const BaseImage = styled.img<Props>`
  width: ${props => props.size}px;
  height: auto;
  display: block;
`;

BaseImage.defaultProps = {
  size: 140,
};

export default React.memo(BaseImage);
