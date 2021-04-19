import * as React from 'react';
import { Image } from '../Images';
import { Movie } from '../../../models/api/Movie';
import { H6 } from '../Typography';
import SmallText from '../Typography/SmallText';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  item: Pick<Movie, 'poster_path' | 'title' | 'release_date' | 'id'>;
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
  const url = process.env['REACT_APP_TMDB_IMG_URL'] + item.poster_path;

  return (
    <StyledLink>
      <Link to={`/movie/${item.id}`}>
        <Image url={url} alt={item.title} />
        <div className="mv-1">
          <H6>{item.title}</H6>
          <SmallText className="mv-1">{item.release_date}</SmallText>
        </div>
      </Link>
    </StyledLink>
  );
};

export default MovieBox;
