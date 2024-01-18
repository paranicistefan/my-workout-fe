import styled from "styled-components";

export const StyledLayout = styled.div`
  padding: 16px;
`;

export const StyledContainer = styled.div`
  ${StyledLayout} {
    height: calc(100vh - 100px);
    overflow: auto;
  }
`;
