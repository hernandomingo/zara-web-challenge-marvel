import { describe, expect, it } from "vitest";
import { render, screen } from "@/utils/test-utils";
import { HeartIconFilled } from "..";

describe("HeartIconFilled component", () => {
  it("should render icon", () => {
    render(<HeartIconFilled />);
    const icon = screen.getByRole("graphics-symbol");
    expect(icon).toBeInTheDocument();
  });
});
