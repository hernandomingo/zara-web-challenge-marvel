"use client";

import { Counter, SearchBar } from "@/components";
import { CharactersGrid } from "@/features/characters/components";
import { useFavoritesContext } from "@/features/characters/context/favorites";

interface FavoritesPageProps {
  searchParams?: {
    query?: string;
  };
}

export default function FavoritesPage({ searchParams }: FavoritesPageProps) {
  const query = searchParams?.query || "";
  const { favorites } = useFavoritesContext();

  const favoriteCharacters = Object.values(favorites).filter((character) =>
    character.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4 md:p-12">
      <h1 className="text-2xl lg:text-[32px] font-bold mb-6">FAVORITES</h1>
      <SearchBar placeholder="SEARCH A CHARACTER..." searchDelay={0} />
      <Counter totalCount={favoriteCharacters.length} />
      <CharactersGrid characters={favoriteCharacters} />
    </div>
  );
}
