import { Metadata } from "next";
import { notFound } from "next/navigation";
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
    const character = await getCharacterDetailsById(params.id);

    if (!character) {
      return {};
    }

    return {
      title: `${character?.name}`,
      description: `Character Details - ${character?.name}`,
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
  const [character, comics] = await Promise.all([
    getCharacterDetailsById(params.id),
    getCharacterComics(params.id),
  ]);

  if (!character) {
    notFound();
  }

  return (
    <div>
      <CharacterResume character={character} />
      <ComicsList comics={comics} />
    </div>
  );
}
