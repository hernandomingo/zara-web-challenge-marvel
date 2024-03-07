"use client";

import { HeartIconFilled } from "@/components";
import { useFavoritesContext } from "@/features/characters/context/favorites";
import Link from "next/link";

export const FavoritesCounter = () => {
  const { favorites } = useFavoritesContext();
  const favoritesCount = Object.keys(favorites).length;

  return (
    <Link href="/characters/favorites" className="flex">
      <div className="mr-2">
        <HeartIconFilled size={24} />
      </div>
      <span className="text-white">{favoritesCount}</span>
    </Link>
  );
};
