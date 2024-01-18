import cx from "classnames";
import { PrimeIcons } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { InputHTMLAttributes, ReactNode, useState } from "react";
import styled from "styled-components";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  type?: string;
  error?: string | boolean;
  info?: string | ReactNode;
  size?: string;
  className?: string;
  required?: boolean;
  icon?: string;
}
export const Input = ({
  icon,
  type = "text",
  size = "medium",
  label,
  error,
  required = false,
  info,
  className,
  value,
  ...props
}: InputProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <Div>
      {label && (
        <label htmlFor={props.name} className="block text-left">
          {label} {required && <span className="error">*</span>}
        </label>
      )}
      <span
        className={cx(
          { "p-input-icon-right": !icon },
          { "p-input-icon-left w-full": icon }
        )}
      >
        {type === "password" && (
          <i
            role="button"
            onClick={() => setVisible((c) => !c)}
            className={cx(visible ? PrimeIcons.EYE_SLASH : PrimeIcons.EYE, {
              errorColor: error,
            })}
          />
        )}

        {error && type !== "password" && (
          <i className={`${PrimeIcons.EXCLAMATION_TRIANGLE} errorColor`} />
        )}

        {props.disabled && <i className={`${PrimeIcons.LOCK}`} />}
        {icon && <i className={icon} />}

        <InputText
          className={cx(`${className}`, {
            "p-invalid block": error,
            "p-inputtext-sm": size === "small",
            "p-inputtext-lg": size === "large",
          })}
          autoComplete="current-password"
          type={visible ? "text" : type}
          value={value as string}
          {...props}
        />
      </span>
      <div className="helper-text">
        {typeof error === "string" && (
          <small className="p-error block text-sm">{error}</small>
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
    font-size: 0.75rem;
    position: absolute;
    width: 100%;
    text-align: left;
    inset: auto 0 -0.75rem;
  }

  .p-input-icon-right {
    width: 100%;
  }

  .errorColor {
    color: ${({ theme }) => theme.colors.error} !important;
  }
`;
