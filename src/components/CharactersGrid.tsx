import { SimpleCharacter } from "@/interfaces";
import { CharacterCard } from ".";

interface CharactersGridProps {
  characters: SimpleCharacter[];
}

export const CharactersGrid = ({ characters }: CharactersGridProps) => {
  return (
    <div className="flex flex-row flex-wrap gap-4">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};
