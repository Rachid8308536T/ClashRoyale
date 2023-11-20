import { Cartes } from "../cartes/cartes.module";

export type Decks = {
  id: number;
  name: string;
  creationDate: Date;
  clan: string;
  username: string;
  cartes: Cartes[],
};
