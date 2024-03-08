import {
  baseUrl,
  charactersLimit,
  comicsLimit,
  comicsOrderBy,
} from "./constants";
import { CharacterApiResponse } from "./interfaces/characters.interface";
import { CharacterComicsAPIResponse } from "./interfaces/comics.interface";
import { getApiParams } from "./helpers";
import { createAdaptedCharacter, createAdaptedComics } from "../adapters";
import { Character } from "../models";

export const searchCharacters = async (
  text: string | undefined = undefined
): Promise<{ count: number; total: number; results: Character[] }> => {
  try {
    const params = new URLSearchParams({
      ...getApiParams(),
      ...(text && { nameStartsWith: text }),
      limit: charactersLimit,
    });

    const url = `${baseUrl}/characters?${params.toString()}`;
    const result: CharacterApiResponse = await fetch(url, {
      cache: "force-cache",
    }).then((res) => res.json());

    const characterList = result.data.results.map(createAdaptedCharacter);

    return {
      count: result.data.count,
      total: result.data.total,
      results: characterList,
    };
  } catch (error) {
    console.error("Problem retrieving characters api data", error);
    return {
      count: 0,
      total: 0,
      results: [],
    };
  }
};

export const getCharacterDetailsById = async (id: string | number) => {
  try {
    const params = new URLSearchParams({
      ...getApiParams(),
    });

    const url = `${baseUrl}/characters/${id}?${params.toString()}`;
    const result: CharacterApiResponse = await fetch(url, {
      cache: "force-cache",
    }).then((res) => res.json());

    const character = createAdaptedCharacter(result.data.results[0]);

    return character;
  } catch (error) {
    console.error("Problem retrieving characters details api data", error);
    return {
      id: 0,
      images: { big: "", little: "" },
      description: "",
      name: "",
    };
  }
};

export const getCharacterComics = async (id: string | number) => {
  try {
    const params = new URLSearchParams({
      ...getApiParams(),
      limit: comicsLimit,
      orderBy: comicsOrderBy,
    });

    const url = `${baseUrl}/characters/${id}/comics?${params.toString()}`;
    const result: CharacterComicsAPIResponse = await fetch(url, {
      cache: "force-cache",
    }).then((res) => res.json());

    const comics = result.data.results.map(createAdaptedComics);

    return comics;
  } catch (error) {
    console.error("Problem retrieving comics data", error);
    return [];
  }
};
