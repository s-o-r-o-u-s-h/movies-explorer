import styled from 'styled-components';
import BaseImage from './BaseImage';

const ResponsiveImage = styled(BaseImage)`
  @media (max-width: 720px) {
    width: ${props => props.size && props.size / 2}px;
  }
`;

export default ResponsiveImage;
