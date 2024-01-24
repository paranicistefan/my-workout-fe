import * as styled from "styled-components";

const GlobalStyles = styled.createGlobalStyle`
  body {
    font-family: "Roboto";
    margin: 0px;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.black};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.black};
  }
  a {
    color: ${({ theme }) => theme.colors.secondary};
  }
  .filepond {
    &--root {
      background: ${({ theme }) => theme.colors.white};
      border: 1px dashed ${({ theme }) => theme.colors.gray};
      border-radius: 8px;
    }
    &--credits {
      display: none;
    }
    &--drop-label {
      background: ${({ theme }) => theme.colors.white};
      border-radius: 8px;

      label {
        color: ${({ theme }) => theme.colors.black};
        span {
          color: ${({ theme }) => theme.colors.primary};
          text-decoration: none;
        }
      }
    }
  }
`;

export default GlobalStyles;
