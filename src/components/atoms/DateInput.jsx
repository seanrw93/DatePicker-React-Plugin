const DateInput = ({ value, name, handleChange, handleFocus, pattern, ...rest }) => {
  return (
    <>
      <input
        type="text"
        name={name}
        value={value}
        pattern={pattern}
        onChange={handleChange}
        onFocus={handleFocus}
        {...rest}
      />
    </>
  );
};

export default DateInput;
