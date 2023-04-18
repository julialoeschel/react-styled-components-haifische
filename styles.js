import { createGlobalStyle } from "styled-components";
import { Aboreto } from "next/font/google";

const aboreto = Aboreto({ subsets: ["latin"], weight: "400" });

export default createGlobalStyle`
  *, 
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --primary-color: #22babb; 
    --secondary-color: #f24405;
    --primary-background: #d3d3d3;
  }

  body {
    margin: 0;
    font-family: ${aboreto.style.fontFamily};
    padding: 2rem;
  }
`;
