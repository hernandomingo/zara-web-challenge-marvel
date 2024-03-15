import { describe, expect, it } from "vitest";
import { render, screen } from "@/utils/test-utils";
import { ComicsList } from "..";
import { mockAdaptedComics } from "@/features/characters/api/__mocks__/comics";

describe("ComicsList component", () => {
  it("should render component with comics heading", () => {
    render(<ComicsList comics={mockAdaptedComics} />);
    const heading = screen.getByRole("heading");
    expect(heading.innerHTML).toBe("COMICS");
  });

  it("should render two comic cards with images", () => {
    render(<ComicsList comics={mockAdaptedComics} />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(2);
  });
});
