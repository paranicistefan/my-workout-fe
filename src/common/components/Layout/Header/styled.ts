import styled from "styled-components";
import { IoArrowBackCircle } from "react-icons/io5";

export const StyledBackIcon = styled(IoArrowBackCircle)``;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;
  ${StyledBackIcon} {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.lightSecondary};
  }
`;
