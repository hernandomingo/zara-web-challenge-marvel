"use client";

import { HeartIconFilled, HeartIconOutline } from "@/components";
import { Character } from "../models";
import { useFavoritesContext } from "../context/context";

interface HeartIconProps {
  character: Character;
}

export const FavoriteIcon = ({ character }: HeartIconProps) => {
  const { favorites, toggleFavorite } = useFavoritesContext();

  const handleClick = () => {
    toggleFavorite(character);
  };

  const isInFavorites = !!favorites[`${character.id}`];

  return isInFavorites ? (
    <HeartIconFilled size={12} onClick={handleClick} />
  ) : (
    <HeartIconOutline color="white" size={12} onClick={handleClick} />
  );
};
