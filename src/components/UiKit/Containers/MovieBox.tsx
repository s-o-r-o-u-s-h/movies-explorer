import * as React from 'react';
import Image from '../Image';
import { Movie } from '../../../models/api/Movie';
import { H6 } from '../Typography';
import SmallText from '../Typography/SmallText';
import styled from 'styled-components';

interface Props {
  item: Pick<Movie, 'poster_path' | 'title' | 'release_date'>;
}

const StyledLink = styled.a`
  text-decoration: none;
  width: 150px;
  color: var(--black-color);
  display: block;
`;

const MovieBox: React.VFC<Props> = ({ item }) => {
  const url = process.env['REACT_APP_TMDB_IMG_URL'] + item.poster_path;

  return (
    <StyledLink href="#">
      <Image url={url} alt={item.title} />
      <div className="mv-1">
        <H6>{item.title}</H6>
        <SmallText className="mv-1">{item.release_date}</SmallText>
      </div>
    </StyledLink>
  );
};

export default MovieBox;
