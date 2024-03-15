import { describe, expect, it } from "vitest";
import { CharacterResume } from "..";
import { mockAdaptedCharacters } from "@/features/characters/api/__mocks__/characters";
import { render, screen } from "@/utils/test-utils";

describe("CharacterResume component", () => {
  it("should render character resume with image", () => {
    render(<CharacterResume character={mockAdaptedCharacters[0]} />);
    const image: HTMLImageElement = screen.getByAltText(
      `${mockAdaptedCharacters[0].name} Image`
    );
    expect(image.src).toContain("detail.jpg");
  });

  it("should render heading with name", () => {
    render(<CharacterResume character={mockAdaptedCharacters[0]} />);
    const heading = screen.getByRole("heading");
    expect(heading?.innerHTML).toContain(mockAdaptedCharacters[0].name);
  });

  it("should render paragraph with character description", () => {
    render(<CharacterResume character={mockAdaptedCharacters[0]} />);
    const description = screen.getByText(mockAdaptedCharacters[0].description);
    expect(description).toBeDefined();
  });
});
