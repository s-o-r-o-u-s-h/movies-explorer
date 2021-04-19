import * as React from 'react';
import { Image } from '../Images';
import { H6 } from '../Typography';
import SmallText from '../Typography/SmallText';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MoviePartial from '../../../models/api/MoviePartial';

interface Props {
  item: MoviePartial;
}

const StyledLink = styled.div`
  a {
    text-decoration: none;
    width: 150px;
    color: var(--black-color);
    display: block;
  }
`;

const MovieBox: React.VFC<Props> = ({ item }) => {
  return (
    <StyledLink>
      <Link to={`/movie/${item.id}`}>
        <Image url={item.poster_path} alt={item.title} />
        <div className="mv-1">
          <H6>{item.title}</H6>
          <SmallText className="mv-1">{item.release_date}</SmallText>
        </div>
      </Link>
    </StyledLink>
  );
};

export default MovieBox;
