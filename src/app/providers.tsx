import { FavoritesContextProvider } from "@/features/characters/context/context";
import StyledComponentsRegistry from "@/lib/registry";
import { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

export function Providers({ children }: ProviderProps) {
  return (
    <FavoritesContextProvider>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </FavoritesContextProvider>
  );
}
