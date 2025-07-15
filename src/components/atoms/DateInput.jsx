const DateInput = ({ value, name, handleDateFormat, onInputChange, onFocus, ...rest }) => {
  return (
    <>
      <input
        type="text"
        name={name}
        value={value}
        onChange={() => {
          handleDateFormat(),
          onInputChange();
        }}
        onFocus={onFocus}
        {...rest}
      />
    </>
  );
};

export default DateInput;
