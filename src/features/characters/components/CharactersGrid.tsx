import { CharacterCard } from ".";
import { Character } from "../models";

interface CharactersGridProps {
  characters: Character[];
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
