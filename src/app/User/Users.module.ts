import { Decks } from '../decks/decks.module';

export type Users = {
  id: number;
  pseudonyme: string;
  mail: string;
  password: string;
  role: string;
  deck: Decks[];
};
