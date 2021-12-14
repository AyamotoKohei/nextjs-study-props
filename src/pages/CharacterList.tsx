import { VFC } from "react";
import { Header, Icon, Item } from "semantic-ui-react";

export type Character = {
  id: number;
  name: string;
  grade: number;
  height?: number;
};

type Props = {
  school: string;
  characters: Character[];
};
