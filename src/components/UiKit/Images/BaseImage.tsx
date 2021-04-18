import styled from 'styled-components';

interface Props {
  size?: number;
}

const BaseImage = styled.img<Props>`
  width: ${props => props.size}px;
  height: auto;
  display: block;
`;

BaseImage.defaultProps = {
  size: 140,
};

export default BaseImage;
