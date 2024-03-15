import { describe, expect, it } from "vitest";
import { CharactersGrid } from "..";
import { mockAdaptedCharacters } from "@/features/characters/api/__mocks__/characters";
import { render, screen } from "@/utils/test-utils";

describe("CharactersGrid component", () => {
  it("should render two character cards with images", () => {
    render(<CharactersGrid characters={mockAdaptedCharacters} />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(2);
  });
});
