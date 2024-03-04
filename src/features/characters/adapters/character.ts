import { detailsImageVariant, smallImageVariant } from "./constants";
import { Result } from "../api/interfaces/characters.interface";
import { Character } from "../models";

export const createAdaptedCharacter = (
  apiResultCharacter: Result
): Character => {
  const { description, id, name, thumbnail } = apiResultCharacter;

  return {
    description,
    id,
    name,
    images: {
      big: `${thumbnail.path}/${detailsImageVariant}.${thumbnail.extension}`,
      little: `${thumbnail.path}/${smallImageVariant}.${thumbnail.extension}`,
    },
  };
};
