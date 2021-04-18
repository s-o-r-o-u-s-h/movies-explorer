import * as React from 'react';
import LogoImg from '../../assets/images/logo.png';
import styled from 'styled-components';

const StyledLogo = styled.img`
  width: 140px;
  height: auto;
  display: block;
`;

const Logo: React.VFC = () => {
  return <StyledLogo src={LogoImg} alt="Logo" />;
};

export default Logo;
