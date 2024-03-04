import { getCharacterDetailsById } from "@/features/characters/api/marvel-api";
import { CharacterResume, ComicsList } from "@/features/characters/components";

interface CharacterDetailsPageProps {
  params: { id: string };
}

export default async function CharacterDetailsPage({
  params,
}: CharacterDetailsPageProps) {
  const character = await getCharacterDetailsById(params.id);

  return (
    <div>
      <CharacterResume character={character} />
      <ComicsList character={character} />
    </div>
  );
}