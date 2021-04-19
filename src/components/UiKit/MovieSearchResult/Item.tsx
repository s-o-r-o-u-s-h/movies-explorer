import * as React from 'react';
import styled from 'styled-components';
import { BaseImage } from '../Images';
import { H6 } from '../Typography';
import SmallText from '../Typography/SmallText';
import { Link } from 'react-router-dom';
import MoviePartial from '../../../models/api/MoviePartial';

interface Props {
  item: MoviePartial;
  onPress: () => void;
}

const StyledContainer = styled.div`
  a {
    text-decoration: none;
    color: var(--black-color);
    display: flex;
    flex-wrap: nowrap;
    cursor: pointer;
    & > img {
      min-width: 6rem;
      width: 15%;
      border-radius: 0.25rem;
    }
    & > div {
      width: 85%;
      text-align: initial;
    }
  }
`;

const Item: React.VFC<Props> = ({
  item: { title, release_date, poster_path, id },
  onPress,
}) => {
  return (
    <StyledContainer className="p-1">
      <Link to={`/movie/${id}`} onClick={onPress}>
        <BaseImage src={poster_path} alt={title} title={title} />
        <div className="ph-2">
          <H6 className="mv-2">{title}</H6>
          <SmallText>{release_date}</SmallText>
        </div>
      </Link>
    </StyledContainer>
  );
};

export default React.memo(Item);
