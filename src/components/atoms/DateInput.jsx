const DateInput = ({ value, name, handleChange, handleFocus, pattern, readOnly, ...rest }) => {

  return (
    <>
      <input
        type="text"
        role="combobox"
        name={name}
        value={value}
        pattern={pattern}
        onChange={handleChange}
        onFocus={handleFocus}
        readOnly={readOnly}
        {...rest}
      />
    </>
  );
};

export default DateInput;
