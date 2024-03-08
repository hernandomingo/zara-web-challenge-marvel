import { describe, expect, it } from "vitest";
import { CharactersGrid } from "..";
import { mockAdaptedCharacters } from "@/features/characters/api/__mocks__/characters";
import { renderWithProviders, screen } from "@/utils/test-utils";

describe("CharactersGrid component", () => {
  it("should render two character cards with images", () => {
    const { container } = renderWithProviders(
      <CharactersGrid characters={mockAdaptedCharacters} />
    );
    const images = container.querySelectorAll("img");
    expect(images.length).toBe(2);
  });
});
