import { RadioButton, RadioButtonProps } from 'primereact/radiobutton'
import styled from 'styled-components'

interface ICheckbox extends RadioButtonProps {
  label: string
}
const RadioButtonInput = ({ label, ...props }: ICheckbox) => {
  return (
    <Div>
      <RadioButton id="checkbox" {...props} />
      <label htmlFor="checkbox" className="p-checkbox-label">
        {label}
      </label>
    </Div>
  )
}
const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export default RadioButtonInput
