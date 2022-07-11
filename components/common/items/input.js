// STYLES
import { StyledInput } from './Styles';

const Input = ({ type, name, value, placeholder, onChange, error }) => (
	<StyledInput type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} error={error} />
);

export default Input;
