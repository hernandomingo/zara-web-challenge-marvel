import { describe, expect, it } from "vitest";
import { CharacterCard } from "..";
import { mockAdaptedCharacters } from "@/features/characters/api/__mocks__/characters";
import { renderWithProviders, screen } from "@/utils/test-utils";

describe("CharacterCard component", () => {
  it("should render character card with image", () => {
    renderWithProviders(<CharacterCard character={mockAdaptedCharacters[0]} />);
    const image: HTMLImageElement = screen.getByAltText("Character image");
    expect(image.src).toContain("standard_xlarge.jpg");
  });

  it("should render character card with name", () => {
    const { container } = renderWithProviders(
      <CharacterCard character={mockAdaptedCharacters[0]} />
    );
    const paragraph = container.querySelector("p");
    expect(paragraph?.innerHTML).toContain(mockAdaptedCharacters[0].name);
  });
});
