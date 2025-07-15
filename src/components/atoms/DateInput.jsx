const DateInput = ({ value, onChange, onFocus, ...rest }) => {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        {...rest}
      />
    </>
  );
};

export default DateInput;
