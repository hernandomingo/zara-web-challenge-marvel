import { describe, expect, it } from "vitest";
import CharactersLayout from "@/app/characters/layout";
import { renderWithProviders, screen } from "@/utils/test-utils";

describe("CharactersLayout component", () => {
  it("should render header element", () => {
    const { container } = renderWithProviders(
      <CharactersLayout>
        <div>Dummy div</div>
      </CharactersLayout>
    );
    const header = container.querySelector("header");
    expect(header).toBeDefined();
  });

  it("should render children element", () => {
    const text = "Dummy";
    renderWithProviders(
      <CharactersLayout>
        <div>{text}</div>
      </CharactersLayout>
    );
    const childrenElement = screen.getByText(text);
    expect(childrenElement).toBeDefined();
  });
});
