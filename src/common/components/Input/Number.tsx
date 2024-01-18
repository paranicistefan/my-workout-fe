import cx from "classnames";
import { PrimeIcons } from "primereact/api";
import { InputNumber, InputNumberProps } from "primereact/inputnumber";
import { ReactNode } from "react";
import styled from "styled-components";

interface InputProps extends Omit<InputNumberProps, "size"> {
  label?: string;
  error?: string | boolean;
  info?: string | ReactNode;
  size?: string;
  className?: string;
  required?: boolean;
}
export const Number = ({
  size = "medium",
  required = false,
  label,
  error,
  info,
  className,
  ...props
}: InputProps) => {
  return (
    <Div>
      {label && (
        <label htmlFor={props.name} className="block">
          {label} {required && <span className="error">*</span>}
        </label>
      )}
      <span className="p-input-icon-right">
        {error && (
          <i className={`${PrimeIcons.EXCLAMATION_TRIANGLE} errorColor`} />
        )}

        {props.disabled && <i className={`${PrimeIcons.LOCK}`} />}

        <InputNumber
          className={cx(`${className}`, "w-full", {
            "p-invalid block": error,
            "p-inputtext-sm": size === "small",
            "p-inputtext-lg": size === "large",
          })}
          {...props}
        />
      </span>
      <div className="helper-text">
        {typeof error === "string" && (
          <small className="p-error block">{error}</small>
        )}
        {typeof error !== "string" && info}
      </div>
    </Div>
  );
};

const Div = styled.div`
  position: relative;

  > label {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.black};
  }

  input {
    display: block;

    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 8px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.black};
  }

  .helper-text {
    height: 0.75rem;
    font-size: 1rem;
    position: absolute;
    width: 100%;
    inset: auto 0 -0.75rem;
  }

  .block {
    text-align: left;
  }
  .p-input-icon-right {
    width: 100%;
  }

  .errorColor {
    color: ${({ theme }) => theme.colors.error} !important;
  }
`;
