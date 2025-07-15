const Select = ({ options, value, onChange, ...rest }) => (
  <select value={value} onChange={onChange} {...rest}>
    {options.map((option, index) => (
      <option key={index} value={option.value ?? index}>
        {option.label ?? option}
      </option>
    ))}
  </select>
);

export default Select;
