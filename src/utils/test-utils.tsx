import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Providers } from "../app/providers";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <Providers>{children}</Providers>;
};

const renderWithProviders = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { renderWithProviders as render };
