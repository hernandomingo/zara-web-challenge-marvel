"use client";

import { HeartIconFilled } from "@/components";
import { useFavoritesContext } from "@/features/characters/context/context";

export const FavoritesCounter = () => {
  const { favorites } = useFavoritesContext();
  const favoritesCount = Object.keys(favorites).length;

  return (
    <div className="flex cursor-pointer">
      <div className="mr-2">
        <HeartIconFilled size={24} />
      </div>
      <span className="text-white">{favoritesCount}</span>;
    </div>
  );
};
