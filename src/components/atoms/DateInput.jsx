const DateInput = ({ value, name, handleDateFormat, onInputChange, onFocus, ...rest }) => {
  return (
    <>
      <input
        type="text"
        name={name}
        value={value}
        onChange={(e) => {
          handleDateFormat(e);
          onInputChange(e);
        }}
        onFocus={onFocus}
        {...rest}
      />
    </>
  );
};

export default DateInput;
