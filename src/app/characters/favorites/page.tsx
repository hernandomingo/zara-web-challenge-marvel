"use client";

import { Counter } from "@/components";
import { CharactersGrid } from "@/features/characters/components";
import { useFavoritesContext } from "@/features/characters/context/favorites";

interface FavoritesPageProps {}

export default function FavoritesPage({}: FavoritesPageProps) {
  const { favorites } = useFavoritesContext();

  const favoriteCharacters = Object.values(favorites);

  return (
    <div className="p-4 md:p-12">
      <Counter totalCount={favoriteCharacters.length} />
      <CharactersGrid characters={favoriteCharacters} />
    </div>
  );
}
