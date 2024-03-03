import Link from "next/link";
import Image from "next/image";
import { SimpleCharacter } from "@/interfaces";
import { HeartIconOutline } from ".";

import "./character-card.css";

interface CharacterCardProps {
  character: SimpleCharacter;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  const { id, name, image } = character;

  return (
    <div className="character-card">
      <div className="character-image">
        <Link href={`/characters/${id}`}>
          <Image src={image} alt="Character image" height={190} width={172.5} />
        </Link>
      </div>
      <div className="character-info">
        <p className="w-28 whitespace-nowrap overflow-hidden text-ellipsis">
          {name}
        </p>
        <HeartIconOutline color="white" size={12} />
      </div>
    </div>
  );
};
