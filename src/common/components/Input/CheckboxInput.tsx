import { Checkbox, CheckboxProps } from 'primereact/checkbox'
import styled from 'styled-components'

interface ICheckbox extends CheckboxProps {
  label: string
}
const CheckboxInput = ({ label, ...props }: ICheckbox) => {
  return (
    <Div>
      <Checkbox id="checkbox" {...props} />
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
export default CheckboxInput
