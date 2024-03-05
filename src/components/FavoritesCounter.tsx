"use client";

import { useFavoritesContext } from "@/features/characters/context/context";

export const FavoritesCounter = () => {
  const { favorites } = useFavoritesContext();
  const favoritesCount = Object.keys(favorites).length;

  return <span className="text-white">{favoritesCount}</span>;
};
