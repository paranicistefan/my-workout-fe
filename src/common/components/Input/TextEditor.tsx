import { Editor, EditorProps } from "primereact/editor";
import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface ITextEditor extends EditorProps {
  label?: string;
  info?: string | ReactNode;
  required?: boolean;
  error?: string | boolean;
  page?: string;
}

export const TextEditor = ({
  label,
  info,
  required,
  error,
  page,
  ...props
}: ITextEditor) => {
  return (
    <Div type={!!page?.includes("company-profile")}>
      {label && (
        <label htmlFor={props.name} className="block">
          {label} {required && <span className="error">*</span>}
        </label>
      )}
      <Editor readOnly={props.disabled} {...props} />
      <div className="helper-text">
        {typeof error === "string" && (
          <small className="p-error block text-sm">{error}</small>
        )}
        {typeof error !== "string" && info}
      </div>
    </Div>
  );
};
const Div = styled.div<{ type: boolean }>`
  > label {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.black};
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.black};
  }

  .errorColor {
    color: ${({ theme }) => theme.colors.error} !important;
  }

  .helper-text {
    height: 0.75rem;
    font-size: 0.75rem;
    width: 100%;
    inset: auto 0 -0.75rem;
  }

  ${({ type }) =>
    type &&
    css`
      .p-editor-container {
        border-top: 1px solid #dee2e6;
      }

      .ql-toolbar {
        display: none;
      }
    `};
`;
