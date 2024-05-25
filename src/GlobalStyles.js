import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html {
    box-sizing: border-box;
}

*, ::after, ::before {
box-sizing: inherit;
}

body {
  background-color: rgba(251, 251, 254, 1);
  font-family: "Inter", sans-serif;
}
`;