import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { HeartIconOutline } from "..";

describe("HeartIconOutline component", () => {
  it("should render icon", () => {
    render(<HeartIconOutline />);
    const svg = screen.getByRole("graphics-symbol");
    expect(svg).toBeDefined();
  });
});
