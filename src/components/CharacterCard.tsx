import Image from "next/image";
import { HeartIconOutline } from ".";
import "./character-card.css";

interface CharacterCardProps {
  image: string;
  name: string;
}

export const CharacterCard = ({ image, name }: CharacterCardProps) => {
  return (
    <div className="character-card">
      <div className="character-image">
        <Image src={image} alt="Character image" height={190} width={172.5} />
      </div>
      <div className="character-info">
        <div>{name}</div>
        <HeartIconOutline color="white" size={12} />
      </div>
    </div>
  );
};
