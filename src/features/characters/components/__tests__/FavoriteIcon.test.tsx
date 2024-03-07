import { describe, expect, it } from "vitest";
import { FavoriteIcon } from "..";
import { mockAdaptedCharacters } from "@/features/characters/api/__mocks__/characters";
import { renderWithProviders, screen } from "@/utils/test-utils";

describe("FavoriteIcon component", () => {
  it("should render icon", () => {
    renderWithProviders(<FavoriteIcon character={mockAdaptedCharacters[0]} />);
    const svg = screen.getByRole("graphics-symbol");
    expect(svg).toBeDefined();
  });
});
