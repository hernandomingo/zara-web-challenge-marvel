import { describe, expect, it } from "vitest";
import { FavoritesCounter } from "..";
import { render, screen } from "@/utils/test-utils";

describe("FavoritesCounter component", () => {
  it("should render icon", () => {
    render(<FavoritesCounter />);
    const svg = screen.getByRole("graphics-symbol");
    expect(svg).toBeDefined();
  });
});
