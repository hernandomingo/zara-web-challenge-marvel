import { describe, expect, it } from "vitest";
import { render, screen } from "@/utils/test-utils";
import { mockAdaptedCharacters } from "@/features/characters/api/__mocks__/characters";
import { CharacterResume } from "..";

describe("CharacterResume component", () => {
  it("should render character resume with image", () => {
    render(<CharacterResume character={mockAdaptedCharacters[0]} />);
    const image: HTMLImageElement = screen.getByAltText(
      `${mockAdaptedCharacters[0].name} Image`
    );
    expect(image).toBeInTheDocument();
    expect(image.src).toContain("detail.jpg");
  });

  it("should render heading with name", () => {
    render(<CharacterResume character={mockAdaptedCharacters[0]} />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading.innerHTML).toContain(mockAdaptedCharacters[0].name);
  });

  it("should render paragraph with character description", () => {
    render(<CharacterResume character={mockAdaptedCharacters[0]} />);
    const description = screen.getByText(mockAdaptedCharacters[0].description);
    expect(description).toBeInTheDocument();
  });
});
