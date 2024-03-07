import { describe, expect, it } from "vitest";
import { createAdaptedComics } from "..";
import {
  mockAdaptedComics,
  mockApiResultsComic,
} from "@/features/characters/api/__mocks__/comics";

describe("comics adapter", () => {
  it("should adapt API comic to application comic format", () => {
    const adaptedComic = createAdaptedComics(mockApiResultsComic[0]);

    expect(adaptedComic).toStrictEqual(mockAdaptedComics[0]);
  });

  it("should handle missing onSaleDate", () => {
    const apiResultComicWithoutDate = {
      ...mockApiResultsComic[0],
      dates: [],
    };
    const adaptedComic = createAdaptedComics(apiResultComicWithoutDate);

    expect(adaptedComic.onSaleDate).toBeUndefined();
  });
});
