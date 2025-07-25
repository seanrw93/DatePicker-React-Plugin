const DateInput = ({ value, name, handleChange, handleFocus, pattern, readOnly, ...rest }) => {

  return (
    <>
      <input
        type="text"
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
