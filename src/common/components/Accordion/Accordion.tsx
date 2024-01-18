import { ReactNode, useCallback, useMemo, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import styled from "styled-components";

interface IAccordion {
  title: string;
  content: ReactNode;
  rightElement?: ReactNode;
}

const Accordion = ({ title, content, rightElement }: IAccordion) => {
  const [open, setOpen] = useState(false);

  const toggleAccordion = useCallback(() => {
    setOpen((prev) => !prev);
  }, [setOpen]);

  const togglerIcon = useMemo(
    () =>
      open ? (
        <BiChevronUp className="accordion-icon" />
      ) : (
        <BiChevronDown className="accordion-icon" />
      ),
    [open]
  );
  return (
    <Div>
      <span className="accordion-head select-none" onClick={toggleAccordion}>
        <span className="accordion-option">
          {togglerIcon} <h3>{title}</h3>
        </span>
        {rightElement}
      </span>
      {open && <div className="accordion-content">{content}</div>}
    </Div>
  );
};
const Div = styled.div`
  border-radius: 12px;
  border: 1px solid #d4d4d4;
  .accordion-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    cursor: pointer;
    .accordion-option {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .accordion-icon {
        font-size: 26px;
      }
      h3 {
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px; /* 150% */
        margin: 0;
      }
    }
    h4 {
      margin: 0;
      color: #1c1c1e;
      font-weight: 600;
      font-size: 14px;

      line-height: 20px;
      padding: 4px 12px;
      border-radius: 8px;
      background: #ececec;
    }
  }
  .accordion-content {
    font-size: 14px;
    padding: 0 20px 20px;
  }
`;
export default Accordion;
