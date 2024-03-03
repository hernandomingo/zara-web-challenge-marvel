import { CharacterResponse, SimpleCharacter } from "@/interfaces";
import { getApiParams } from "./helpers";
import { baseUrl, imageSize } from "./constants";

export const searchCharacters = async (
  text: string | undefined = undefined
) => {
  const params = new URLSearchParams({
    ...getApiParams(),
    ...(text && { nameStartsWith: text }),
    limit: "50",
  });

  const url = `${baseUrl}/characters?${params.toString()}`;
  const result: CharacterResponse = await fetch(url, {
    cache: "force-cache",
  }).then((res) => res.json());

  const characterList: SimpleCharacter[] = result.data.results.map(
    ({ id, name, thumbnail }) => ({
      id,
      name,
      image: `${thumbnail.path}/${imageSize}.${thumbnail.extension}`,
    })
  );

  return { total: result.data.total, results: characterList };
};
