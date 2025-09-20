import { Crew } from './crew';

export interface Fruit {
  id: number;
  name: string;
  description: string;
  type: string;
  filename: string;
  roman_name: string;
  technicalFile: string;
}

export interface Member {
  id: number;
  name: string;
  job: string;
  size: string;
  birthday: string;
  age: string;
  bounty: string;
  status: string;
  crew?: Crew | null;   
  fruit?: Fruit | null;
}
