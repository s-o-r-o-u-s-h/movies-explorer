import GenderEnum from './GenderEnum';

export default interface Person {
  adult: boolean;
  gender: GenderEnum | null;
  id: number;
  name: string;
  original_name: string;
  popularity: number;
  credit_id: number;
}
