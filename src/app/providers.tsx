"use client";

import { FavoritesContextProvider } from "@/features/characters/context/favorites";
import StyledComponentsRegistry from "@/styles/registry";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/styles/globals";
import { theme } from "@/styles/theme";

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
