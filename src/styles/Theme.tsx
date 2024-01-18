import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles.styled";
import PrimereactThemeResets from "./PrimereactThemeResets.styled";

export const theme = {
  colors: {
    lightPrimary: "#0C7D74",
    primary: "#005148",
    darkPrimary: "#0F353D",
    lightSecondary: "#FFAE00",
    secondary: "#634A00",
    darkSecondary: "#383416",
    gray: "#CFCECF",
    darkGray: "#333333",
    midGrey: "#757275",
    white: "#FFFFFF",
    black: "#1f1f1f",
    lightError: "#E3002B",
    error: "#B90021",
    darkError: "#940018",
    lightSuccess: "#228069",
    success: "#1A6956",
    darkSuccess: "#135343",
  },
};

interface IProps {
  children: ReactNode | ReactNode[];
}

const Theme = ({ children }: IProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PrimereactThemeResets />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
