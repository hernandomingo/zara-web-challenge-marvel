import { describe, expect, it } from "vitest";
import { render, screen } from "@/utils/test-utils";
import { NotFound } from "..";

describe("NotFound component", () => {
  it("should render heading", () => {
    render(<NotFound />);
    const heading = screen.getByRole("heading");
    expect(heading.innerHTML).toBe("404");
  });

  it("should render link to go home", () => {
    render(<NotFound />);
    const link: HTMLAnchorElement = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
    expect(link.innerHTML).toBe("Go Home");
  });
});
