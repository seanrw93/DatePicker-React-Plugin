const DateInput = ({ value, name, handleChange, handleFocus, ...rest }) => {
  return (
    <>
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        {...rest}
      />
    </>
  );
};

export default DateInput;
