import { describe, expect, it } from "vitest";
import { render, screen } from "@/utils/test-utils";
import { SearchIcon } from "..";

describe("SearchIcon component", () => {
  it("should render icon", () => {
    render(<SearchIcon />);
    const svg = screen.getByRole("graphics-symbol");
    expect(svg).toBeDefined();
  });
});
