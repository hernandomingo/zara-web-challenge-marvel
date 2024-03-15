import { describe, expect, it } from "vitest";
import { render, screen } from "@/utils/test-utils";
import { TopMenu } from "..";

describe("TopMenu component", () => {
  it("should render header element", () => {
    render(<TopMenu />);
    const header = screen.getByRole("banner");
    expect(header).toBeDefined();
  });
});
