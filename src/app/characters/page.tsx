import { Counter, SearchBar } from "@/components";
import { searchCharacters } from "@/features/characters/api/marvel-api";
import { CharactersGrid } from "@/features/characters/components";

interface CharactersPageProps {
  searchParams?: {
    query?: string;
  };
}

export default async function CharactersPage({
  searchParams,
}: CharactersPageProps) {
  const query = searchParams?.query || "";

  const searchResult = await searchCharacters(query);

  return (
    <div className="p-4 md:p-12">
      <SearchBar placeholder="SEARCH CHARACTER..." />
      <Counter totalCount={searchResult.total} />
      <CharactersGrid characters={searchResult.results} />
    </div>
  );
}
