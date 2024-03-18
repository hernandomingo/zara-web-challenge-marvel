import { describe, expect, it } from "vitest";
import { render, screen } from "@/utils/test-utils";
import { Counter } from "..";

describe("Counter component", () => {
  it("should render Counter component with number of results", () => {
    render(<Counter totalCount={2} />);
    const results = screen.getByText("2 RESULTS");
    expect(results).toBeInTheDocument();
  });
});
