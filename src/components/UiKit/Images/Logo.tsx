import * as React from 'react';
import LogoImg from '../../../assets/images/logo.png';
import BaseImage from './BaseImage';

const Logo: React.VFC = () => {
  return <BaseImage src={LogoImg} alt="Logo" />;
};

export default Logo;
