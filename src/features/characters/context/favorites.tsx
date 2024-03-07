"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { Character } from "../models";

type Favorites = { [key: string]: Character };

type FavoritesContextType = {
  favorites: Favorites;
  toggleFavorite: (character: Character) => void;
};

interface FavoritesContextProviderProps {
  children: ReactNode;
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export const FavoritesContextProvider = ({
  children,
}: FavoritesContextProviderProps) => {
  const [favorites, setFavorites] = useState<Favorites>({});

  const addFavorite = (character: Character) => {
    setFavorites((prev) => {
      return {
        ...prev,
        [character.id]: character,
      };
    });
  };

  const deleteFavorite = (character: Character) => {
    setFavorites((prev) => {
      const newFavorites = { ...prev };
      delete newFavorites[character.id];

      return newFavorites;
    });
  };

  const toggleFavorite = (character: Character) => {
    const characterId = character.id.toString();

    !favorites[characterId]
      ? addFavorite(character)
      : deleteFavorite(character);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(
      "useFavoritesContext must be used within its context provider"
    );
  }

  return context;
};
