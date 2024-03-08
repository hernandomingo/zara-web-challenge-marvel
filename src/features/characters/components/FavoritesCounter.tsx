"use client";

import Link from "next/link";
import { HeartIconFilled } from "@/components";
import { useFavoritesContext } from "@/features/characters/context/favorites";
import { theme } from "@/styles/theme";

export const FavoritesCounter = () => {
  const { favorites } = useFavoritesContext();
  const favoritesCount = Object.keys(favorites).length;

  return (
    <Link href="/characters/favorites" className="flex">
      <div className="mr-2">
        <HeartIconFilled color={theme.colors.red} size={24} />
      </div>
      <span className="text-white">{favoritesCount}</span>
    </Link>
  );
};
