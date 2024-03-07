import { describe, expect, it } from "vitest";
import { FavoritesCounter } from "..";
import { renderWithProviders, screen } from "@/utils/test-utils";

describe("FavoritesCounter component", () => {
  it("should render icon", () => {
    renderWithProviders(<FavoritesCounter />);
    const svg = screen.getByRole("graphics-symbol");
    expect(svg).toBeDefined();
  });
});
