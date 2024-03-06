import { searchCharacters } from "@/features/characters/api/marvel-api";
import { CharactersGrid, Counter } from "@/features/characters/components";
import { SearchBar } from "@/features/characters/components/SearchBar";

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
      <SearchBar />
      <Counter totalCount={searchResult.total} />
      <CharactersGrid characters={searchResult.results} />
    </div>
  );
}
