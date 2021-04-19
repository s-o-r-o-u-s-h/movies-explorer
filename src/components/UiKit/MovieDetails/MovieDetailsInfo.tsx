import * as React from 'react';
import { H6 } from '../Typography';
import styled from 'styled-components';
import { MovieInfo } from '../../../models/MovieInfo';

export interface Props {
  item: Omit<MovieInfo, 'image' | 'title'>;
}

const StyledTable = styled.table`
  border-collapse: collapse;
  tr {
    border-bottom: 1px solid var(--black-color);
  }
  tr:last-child {
    border-bottom: unset;
  }
  tr td:first-child {
    width: 6rem;
  }
`;

const MovieDetailsInfo: React.VFC<Props> = ({ item }) => {
  return (
    <StyledTable>
      <tbody>
        <tr>
          <td className="pv-2">
            <H6>Year:</H6>
          </td>
          <td className="pv-2">{item.year}</td>
        </tr>
        <tr>
          <td className="pv-2">
            <H6>Country:</H6>
          </td>
          <td className="pv-2">{item.country}</td>
        </tr>
        <tr>
          <td className="pv-2">
            <H6>Genre:</H6>
          </td>
          <td className="pv-2">{item.genre}</td>
        </tr>
        <tr>
          <td className="pv-2">
            <H6>Duration:</H6>
          </td>
          <td className="pv-2">{item.duration}</td>
        </tr>
        <tr>
          <td className="pv-2">
            <H6>Director:</H6>
          </td>
          <td className="pv-2">{item.director}</td>
        </tr>
        <tr>
          <td className="pv-2">
            <H6>Cast:</H6>
          </td>
          <td className="pv-2">{item.cast}</td>
        </tr>
        <tr>
          <td className="pv-2">
            <H6>Summary:</H6>
          </td>
          <td className="pv-2">
            <p>{item.summary}</p>
          </td>
        </tr>
      </tbody>
    </StyledTable>
  );
};

export default React.memo(MovieDetailsInfo);
