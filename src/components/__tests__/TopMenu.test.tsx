import { describe, expect, it } from "vitest";
import { render, screen } from "@/utils/test-utils";
import { TopMenu } from "..";

describe("TopMenu component", () => {
  it("should render header element", () => {
    render(<TopMenu />);
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  it("should have an image with logo", () => {
    render(<TopMenu />);
    const image = screen.getByAltText("Marvel Logo");
    expect(image).toBeInTheDocument();
  });
});
