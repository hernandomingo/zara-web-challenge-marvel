import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { HeartIconFilled } from "..";

describe("HeartIconFilled component", () => {
  it("should render icon", () => {
    render(<HeartIconFilled />);
    const svg = screen.getByRole("graphics-symbol");
    expect(svg).toBeDefined();
  });
});
