"use client";

import { FavoritesContextProvider } from "@/features/characters/context/context";
import StyledComponentsRegistry from "@/styles/registry";
import { GlobalStyles } from "@/styles/globals";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";

interface ProviderProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProviderProps) {
  return (
    <FavoritesContextProvider>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </StyledComponentsRegistry>
    </FavoritesContextProvider>
  );
}
