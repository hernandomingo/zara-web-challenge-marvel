import { describe, expect, it } from "vitest";
import { render, screen } from "@/utils/test-utils";
import { HeartIconOutline } from "..";

describe("HeartIconOutline component", () => {
  it("should render icon", () => {
    render(<HeartIconOutline />);
    const icon = screen.getByRole("graphics-symbol");
    expect(icon).toBeInTheDocument();
  });
});
