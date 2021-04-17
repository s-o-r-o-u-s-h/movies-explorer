import Person from './Person';

export default interface Cast extends Person {
  character: string;
  order: number;
}
