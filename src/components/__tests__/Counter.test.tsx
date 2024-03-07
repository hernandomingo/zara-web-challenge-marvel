import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { Counter } from "..";

describe("Counter component", () => {
  it("should render Counter component with number of results", () => {
    const { container } = render(<Counter totalCount={2} />);
    const paragraph = container.querySelector("p");
    expect(paragraph?.innerHTML).toBe("2 RESULTS");
  });
});
