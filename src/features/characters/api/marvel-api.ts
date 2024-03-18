import {
  baseUrl,
  charactersLimit,
  comicsLimit,
  comicsOrderBy,
  revalidateTimeInSeconds,
} from "./constants";
import { CharacterApiResponse } from "./interfaces/characters.interface";
import { CharacterComicsAPIResponse } from "./interfaces/comics.interface";
import { Character } from "../models";
import { createAdaptedCharacter, createAdaptedComics } from "../adapters";
import { getApiParams } from "./helpers";

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
      next: {
        revalidate: revalidateTimeInSeconds,
      },
    }).then((res) => res.json());

    if (!result || result.code !== 200) {
      throw new Error("Problem retrieving characters API data", {
        cause: result.status ? result.status : result.message,
      });
    }

    const characterList = result.data.results.map(createAdaptedCharacter);

    return {
      count: result.data.count,
      total: result.data.total,
      results: characterList,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCharacterDetailsById = async (id: string | number) => {
  try {
    const params = new URLSearchParams({
      ...getApiParams(),
    });

    const url = `${baseUrl}/characters/${id}?${params.toString()}`;
    const result: CharacterApiResponse = await fetch(url, {
      next: {
        revalidate: revalidateTimeInSeconds,
      },
    }).then((res) => res.json());

    if (!result) {
      throw new Error("Problem retrieving character details API data");
    }

    if (result.code === 404) {
      return;
    }

    const character = createAdaptedCharacter(result.data.results[0]);

    return character;
  } catch (error) {
    console.error(error);
    throw error;
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
      next: {
        revalidate: revalidateTimeInSeconds,
      },
    }).then((res) => res.json());

    if (!result) {
      throw new Error("Problem retrieving comics data");
    }

    const comics = result.data.results.map(createAdaptedComics);

    return comics;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
