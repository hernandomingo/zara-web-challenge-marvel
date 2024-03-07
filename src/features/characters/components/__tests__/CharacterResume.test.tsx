import { describe, expect, it } from "vitest";
import { CharacterResume } from "..";
import { mockAdaptedCharacters } from "@/features/characters/api/__mocks__/characters";
import { renderWithProviders, screen } from "@/utils/test-utils";

describe("CharacterResume component", () => {
  it("should render character resume with image", () => {
    renderWithProviders(
      <CharacterResume character={mockAdaptedCharacters[0]} />
    );
    const image: HTMLImageElement = screen.getByAltText(
      `${mockAdaptedCharacters[0].name} Image`
    );
    expect(image.src).toContain("detail.jpg");
  });

  it("should render heading with name", () => {
    const { container } = renderWithProviders(
      <CharacterResume character={mockAdaptedCharacters[0]} />
    );
    const heading = container.querySelector("h1");
    expect(heading?.innerHTML).toContain(mockAdaptedCharacters[0].name);
  });

  it("should render paragraph with character description", () => {
    const { container } = renderWithProviders(
      <CharacterResume character={mockAdaptedCharacters[0]} />
    );
    const paragraph = container.querySelector("p");
    expect(paragraph?.innerHTML).toContain(
      mockAdaptedCharacters[0].description
    );
  });
});
