import { ComicCard } from ".";
import { Comic } from "../models";

interface ComicsListProps {
  comics: Comic[];
}

export const ComicsList = async ({ comics }: ComicsListProps) => {
  return (
    <div className="max-w-[960px] md:h-72 lg:h-80 mx-auto whitespace-nowrap overflow-auto px-4 md:px-12 lg:px-0 py-12">
      <h2 className="text-2xl lg:text-[32px] font-bold uppercase">COMICS</h2>
      <p>ComicsList</p>
      {comics.map((comic) => (
        <ComicCard key={comic.id} comic={comic} />
      ))}
    </div>
  );
};
