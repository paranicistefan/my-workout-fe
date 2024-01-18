import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      lightPrimary: string;
      primary: string;
      darkPrimary: string;
      lightSecondary: string;
      secondary: string;
      darkSecondary: string;
      gray: string;
      darkGray: string;
      midGrey: string;
      white: string;
      black: string;
      lightError: string;
      error: string;
      darkError: string;
      lightSuccess: string;
      success: string;
      darkSuccess: string;
    };
  }
}
