import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
::-webkit-scrollbar {
  width: 0;
  height: 4px;
}

::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.colors.grey}; 
}
 
::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.colors.red}; 
}
`;
