import { describe, expect, it } from "vitest";
import { render, screen } from "@/utils/test-utils";
import { mockAdaptedComics } from "@/features/characters/api/__mocks__/comics";
import { ComicCard } from "..";

describe("ComicCard component", () => {
  it("should render comic card with image", () => {
    render(<ComicCard comic={mockAdaptedComics[0]} />);
    const image: HTMLImageElement = screen.getByAltText(
      `Comic "${mockAdaptedComics[0].title}" image`
    );
    expect(image).toBeInTheDocument();
    expect(image.src).toContain("portrait_fantastic");
  });

  it("should render comic card with year", () => {
    render(<ComicCard comic={mockAdaptedComics[0]} />);
    const yearText = screen.getByText(
      mockAdaptedComics[0].onSaleDate!.getFullYear().toString()
    );
    expect(yearText).toBeInTheDocument();
  });
});
