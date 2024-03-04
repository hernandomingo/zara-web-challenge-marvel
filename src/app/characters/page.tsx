import { searchCharacters } from "@/features/characters/api/marvel-api";
import { CharactersGrid } from "@/features/characters/components";

export default async function CharactersPage() {
  const characters = await searchCharacters();

  return (
    <div className="p-4 md:p-12">
      <CharactersGrid characters={characters.results} />
    </div>
  );
}
