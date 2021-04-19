import Person from './Person';
import DepartmentEnum from './DepartmentEnum';
import JobEnum from './JobEnum';

export default interface Crew extends Person {
  job: JobEnum;
  known_for_department: DepartmentEnum;
}
