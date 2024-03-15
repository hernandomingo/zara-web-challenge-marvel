import { describe, expect, it } from "vitest";
import { CharacterCard } from "..";
import { mockAdaptedCharacters } from "@/features/characters/api/__mocks__/characters";
import { render, screen } from "@/utils/test-utils";

describe("CharacterCard component", () => {
  it("should render character card with image", () => {
    render(<CharacterCard character={mockAdaptedCharacters[0]} />);
    const image: HTMLImageElement = screen.getByAltText(
      "Test Character 1 image"
    );
    expect(image.src).toContain("standard_xlarge.jpg");
  });

  it("should render character card with name", () => {
    render(<CharacterCard character={mockAdaptedCharacters[0]} />);
    const name = screen.getByText(mockAdaptedCharacters[0].name);
    expect(name).toBeDefined();
  });
});
