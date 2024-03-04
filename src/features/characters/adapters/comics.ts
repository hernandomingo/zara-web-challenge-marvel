import { DateType, Result } from "../api/interfaces/comics.interface";
import { Comic } from "../models";
import { comicImageVariant } from "./constants";

export const createAdaptedComics = (apiResultComic: Result): Comic => {
  const { id, dates, thumbnail, title } = apiResultComic;

  const onSaleDateString = dates.find(
    (date) => date.type === DateType.OnsaleDate
  )?.date;
  const onSaleDate = onSaleDateString ? new Date(onSaleDateString) : undefined;

  const image = `${thumbnail.path}/${comicImageVariant}.${thumbnail.extension}`;

  return { id, image, onSaleDate, title };
};
