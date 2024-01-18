import { HTMLProps, ReactNode } from "react";
import { StyledElement } from "./styles";

interface IElement extends HTMLProps<HTMLDivElement> {
  title?: string;
  rightElement?: ReactNode;
  children?: ReactNode;
}

const Element = ({ title, rightElement, children, ...props }: IElement) => {
  return (
    <StyledElement {...props}>
      {title && <h3>{title}</h3>}
      {children}
      {rightElement}
    </StyledElement>
  );
};

export default Element;
