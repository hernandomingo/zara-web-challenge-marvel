import { Comic } from "../models";

interface ComicCardProps {
  comic: Comic;
}

export const ComicCard = ({ comic }: ComicCardProps) => {
  return <div className="">{JSON.stringify(comic)}</div>;
};
