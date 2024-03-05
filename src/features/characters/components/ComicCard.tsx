"use client";

import Image from "next/image";
import { Comic } from "../models";
import {
  ComicCardContainer,
  ComicImageContainer,
} from "./styles/StyledComicCard";

interface ComicCardProps {
  comic: Comic;
}

export const ComicCard = ({ comic }: ComicCardProps) => {
  const { title } = comic;

  return (
    <ComicCardContainer>
      <ComicImageContainer>
        <Image src={comic.image} alt={`Comic "${title}" image`} fill />
      </ComicImageContainer>
      <div className="text-wrap">
        <p className="text-base font-medium">{title}</p>
        {comic.onSaleDate && (
          <p className="text-xs font-normal">
            {comic.onSaleDate.getFullYear()}
          </p>
        )}
      </div>
    </ComicCardContainer>
  );
};
