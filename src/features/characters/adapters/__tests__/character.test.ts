import { describe, expect, it } from "vitest";
import { createAdaptedCharacter } from "..";
import {
  mockAdaptedCharacters,
  mockApiResultCharacter,
} from "@/features/characters/api/__mocks__/characters";

describe("character adapter", () => {
  it("should adapt API character to application character format", () => {
    const adaptedCharacter = createAdaptedCharacter(mockApiResultCharacter);

    expect(adaptedCharacter).toEqual(mockAdaptedCharacters[0]);
  });
});
