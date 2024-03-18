import { describe, expect, it } from "vitest";
import { render, screen } from "@/utils/test-utils";
import { Error } from "..";

describe("Error component", () => {
  it("should render heading", () => {
    render(<Error onReload={() => {}} />);
    const heading = screen.getByRole("heading");
    expect(heading.innerHTML).toBe("Looks like something went wrong");
  });

  it("should render two buttons", () => {
    render(<Error onReload={() => {}} />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(2);
    expect(buttons[0].innerHTML).toBe("Reload");
    expect(buttons[1].innerHTML).toBe("Go home");
  });
});
