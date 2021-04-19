import * as React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../../../assets/images/logo.png';
import BaseImage from './BaseImage';

const Logo: React.VFC = () => {
  return (
    <Link to="/">
      <BaseImage src={LogoImg} alt="Logo" />
    </Link>
  );
};

export default Logo;
