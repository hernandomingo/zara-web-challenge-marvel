"use client";

import { HTMLProps } from "react";
import { HeartIconFilled, HeartIconOutline } from "@/components";
import { Character } from "../models";
import { useFavoritesContext } from "../context/favorites";

interface HeartIconProps extends HTMLProps<SVGElement> {
  character: Character;
}

export const FavoriteIcon = ({ character, ...rest }: HeartIconProps) => {
  const { favorites, toggleFavorite } = useFavoritesContext();

  const handleClick = () => {
    toggleFavorite(character);
  };

  const isInFavorites = !!favorites[`${character.id}`];

  return isInFavorites ? (
    <HeartIconFilled onClick={handleClick} {...rest} />
  ) : (
    <HeartIconOutline color="white" onClick={handleClick} {...rest} />
  );
};
