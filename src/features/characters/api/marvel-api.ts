import { baseUrl } from "./constants";
import { CharacterApiResponse } from "./interfaces/characters.interface";
import { CharacterComicsAPIResponse } from "./interfaces/comics.interface";
import { getApiParams } from "./helpers";
import { createAdaptedCharacter, createAdaptedComics } from "../adapters";
import { Character } from "../models";

export const searchCharacters = async (
  text: string | undefined = undefined
): Promise<{ total: number; results: Character[] }> => {
  const params = new URLSearchParams({
    ...getApiParams(),
    ...(text && { nameStartsWith: text }),
    limit: "50",
  });

  const url = `${baseUrl}/characters?${params.toString()}`;
  const result: CharacterApiResponse = await fetch(url, {
    cache: "force-cache",
  }).then((res) => res.json());

  const characterList = result.data.results.map(createAdaptedCharacter);

  return { total: result.data.total, results: characterList };
};

export const getCharacterDetailsById = async (id: string | number) => {
  const params = new URLSearchParams({
    ...getApiParams(),
  });

  const url = `${baseUrl}/characters/${id}?${params.toString()}`;
  const result: CharacterApiResponse = await fetch(url, {
    cache: "force-cache",
  }).then((res) => res.json());

  const character = createAdaptedCharacter(result.data.results[0]);

  return character;
};

export const getCharacterComics = async (id: string | number) => {
  const params = new URLSearchParams({
    ...getApiParams(),
  });

  const url = `${baseUrl}/characters/${id}/comics?${params.toString()}`;
  const result: CharacterComicsAPIResponse = await fetch(url, {
    cache: "force-cache",
  }).then((res) => res.json());

  const comics = result.data.results.map(createAdaptedComics);

  return comics;
};
