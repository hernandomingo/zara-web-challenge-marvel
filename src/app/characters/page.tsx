import { CharactersGrid } from "@/components";
import { searchCharacters } from "@/api/marvel-api";

const CharactersPage = async () => {
  const characters = await searchCharacters();

  return (
    <div>
      <CharactersGrid characters={characters.results} />
    </div>
  );
};
export default CharactersPage;
