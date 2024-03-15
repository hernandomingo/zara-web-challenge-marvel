import { describe, expect, it } from "vitest";
import CharactersLayout from "@/app/characters/layout";
import { render, screen } from "@/utils/test-utils";

describe("CharactersLayout component", () => {
  it("should render header element", () => {
    render(
      <CharactersLayout>
        <div>Dummy div</div>
      </CharactersLayout>
    );
    const header = screen.getByRole("banner");
    expect(header).toBeDefined();
  });

  it("should render children element", () => {
    const text = "Dummy";
    render(
      <CharactersLayout>
        <div>{text}</div>
      </CharactersLayout>
    );
    const childrenElement = screen.getByText(text);
    expect(childrenElement).toBeDefined();
  });
});
