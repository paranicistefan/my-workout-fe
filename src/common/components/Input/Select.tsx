import cx from "classnames";
import { PrimeIcons } from "primereact/api";
import { Dropdown, DropdownProps } from "primereact/dropdown";
import { SelectItem } from "primereact/selectitem";
import { ReactNode } from "react";
import styled from "styled-components";

interface ISelect extends Omit<DropdownProps, "size"> {
  label?: string;
  error?: string | boolean;
  info?: string | ReactNode;
  size?: string;
  required?: boolean;
}

const Select = ({
  label,
  required = false,
  size = "medium",
  error,
  info,
  className,
  ...props
}: ISelect) => {
  const itemTemplate = (option: SelectItem) => {
    return (
      <div className="flex gap-2 align-items-center">
        {option?.icon && (
          <img width={20} height={14} src={option.icon as string} alt="" />
        )}
        {option?.componentIcon}
        {option?.primeIcon && <i className={option.primeIcon} />}
        {option?.label || props.options?.find((x) => x.value === option)}
      </div>
    );
  };

  const valueTemplate = (option: SelectItem) => {
    if (option) {
      return (
        <div className="flex gap-2 align-items-center">
          {option?.icon && (
            <img width={20} height={14} src={option.icon as string} alt="" />
          )}
          {option?.componentIcon}
          {option?.primeIcon && <i className={option.primeIcon} />}
          {option?.label || props.options?.find((x) => x.value === option)}
        </div>
      );
    }
    return props.placeholder;
  };

  return (
    <Div className={className}>
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
        <Dropdown
          itemTemplate={itemTemplate}
          valueTemplate={valueTemplate}
          className={cx("w-full", className, {
            "p-invalid block": error,
            "p-inputtext-sm": size === "small",
            "p-inputtext-lg": size === "large",
          })}
          {...props}
        />
      </span>
      {typeof error === "string" && (
        <small className="p-error block">{error}</small>
      )}
      {typeof info === "string" ? <p>{info}</p> : info}
    </Div>
  );
};

const Div = styled.div`
  > label {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.black};
  }

  .p-input-icon-right {
    width: 100%;
  }

  .p-dropdown {
    width: 100%;
    display: flex !important;
  }

  .block {
    text-align: left;
  }

  .p-dropdown .p-dropdown-label.p-placeholder {
    text-align: left;
  }
  .p-inputtext {
    font-size: 14px;
  }
`;

export default Select;
