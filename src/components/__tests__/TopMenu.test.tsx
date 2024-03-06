import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { TopMenu } from "..";

describe("TopMenu component", () => {
  it("should render header element", () => {
    const { container } = render(<TopMenu />);
    const header = container.querySelector("header");
    expect(header).toBeTruthy();
  });
});
