import { HTMLProps, ReactNode } from "react";
import { StyledElement } from "./styles";

interface IElement extends HTMLProps<HTMLDivElement> {
  title: string;
  rightElement?: ReactNode;
}

const Element = ({ title, rightElement, ...props }: IElement) => {
  return (
    <StyledElement {...props}>
      <h3>{title}</h3>
      {rightElement}
    </StyledElement>
  );
};

export default Element;
