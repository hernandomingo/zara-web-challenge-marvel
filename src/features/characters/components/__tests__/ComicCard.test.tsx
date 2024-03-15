import { describe, expect, it } from "vitest";
import { render, screen } from "@/utils/test-utils";
import { ComicCard } from "..";
import { mockAdaptedComics } from "@/features/characters/api/__mocks__/comics";

describe("ComicCard component", () => {
  it("should render comic card with image", () => {
    render(<ComicCard comic={mockAdaptedComics[0]} />);
    const image: HTMLImageElement = screen.getByAltText(
      `Comic "${mockAdaptedComics[0].title}" image`
    );
    expect(image.src).toContain("portrait_fantastic");
  });

  it("should render comic card with year", () => {
    render(<ComicCard comic={mockAdaptedComics[0]} />);
    const year = screen.getByText(
      mockAdaptedComics[0].onSaleDate!.getFullYear().toString()
    );
    expect(year).toBeDefined();
  });
});
