import { ComicCard } from ".";
import { Comic } from "../models";

interface ComicsListProps {
  comics: Comic[];
}

export const ComicsList = ({ comics }: ComicsListProps) => {
  return (
    <div className="flex flex-col max-w-[960px] mx-auto px-4 md:px-12 lg:px-0 py-12">
      <h2 className="flex mb-6 text-2xl lg:text-[32px] font-bold uppercase">
        COMICS
      </h2>
      <div className="flex flex-nowrap whitespace-nowrap gap-4 overflow-x-scroll scroll">
        {comics.map((comic) => (
          <ComicCard key={comic.id} comic={comic} />
        ))}
      </div>
    </div>
  );
};