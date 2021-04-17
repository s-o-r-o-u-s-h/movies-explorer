import BaseMovie from './BaseMovie';

export default interface Movie extends BaseMovie {
  genre_ids: number[];
}
