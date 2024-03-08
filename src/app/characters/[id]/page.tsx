import { Metadata } from "next";
import {
  getCharacterComics,
  getCharacterDetailsById,
  searchCharacters,
} from "@/features/characters/api/marvel-api";
import { CharacterResume, ComicsList } from "@/features/characters/components";

interface CharacterDetailsPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const first50Characters = await searchCharacters();

  return first50Characters.results.map(({ id }) => ({
    id: id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: CharacterDetailsPageProps): Promise<Metadata> {
  try {
    const { name } = await getCharacterDetailsById(params.id);

    return {
      title: `${name}`,
      description: `Character Details - ${name}`,
    };
  } catch (error) {
    return {
      title: "Character Details",
      description: "Character Not Found",
    };
  }
}

export default async function CharacterDetailsPage({
  params,
}: CharacterDetailsPageProps) {
  const character = await getCharacterDetailsById(params.id);
  const comics = await getCharacterComics(params.id);

  return (
    <div>
      <CharacterResume character={character} />
      <ComicsList comics={comics} />
    </div>
  );
}
