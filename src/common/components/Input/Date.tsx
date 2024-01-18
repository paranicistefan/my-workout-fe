import { Calendar, CalendarBaseProps } from "primereact/calendar";
import { ReactNode } from "react";
import styled from "styled-components";

interface ICalendar extends CalendarBaseProps {
  label?: string;
  info?: string | ReactNode;
  required?: boolean;
  error?: string | boolean;
}
export const CalendarDate = ({
  label,
  info,
  error,
  required = false,
  ...props
}: ICalendar) => {
  return (
    <Div>
      {label && (
        <label htmlFor={props.name} className="block">
          {label} {required && <span className="error">*</span>}
        </label>
      )}

      <Calendar className="w-full" {...props} />
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

  .date-input {
    width: 100%;
  }

  .date-panel {
    width: 800px !important;
  }

  .helper-text {
    height: 0.75rem;
    font-size: 0.75rem;
    width: 100%;
    inset: auto 0 -0.75rem;
  }
`;
