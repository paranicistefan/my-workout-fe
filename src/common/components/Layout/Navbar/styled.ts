import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)``;

export const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.darkPrimary};
  padding: 24px;
  ${StyledLink} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }
`;
