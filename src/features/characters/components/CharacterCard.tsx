import Link from "next/link";
import Image from "next/image";
import { Character } from "../models";
import { FavoriteIcon } from ".";
import {
  CharacterCardContainer,
  CharacterImageContainer,
  CharacterInfoContainer,
} from "./styles/StyledCharacterCard";

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  const { id, name, images } = character;

  return (
    <CharacterCardContainer>
      <CharacterImageContainer>
        <Link href={`/characters/${id}`}>
          <Image
            src={images.little}
            alt={`${name} image`}
            height={190}
            width={172.5}
          />
        </Link>
      </CharacterImageContainer>
      <CharacterInfoContainer>
        <p className="w-28 whitespace-nowrap overflow-hidden text-ellipsis">
          {name}
        </p>
        <FavoriteIcon character={character} size={12} />
      </CharacterInfoContainer>
    </CharacterCardContainer>
  );
};
