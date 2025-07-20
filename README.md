# React DatePicker

A fully customisable and modular React datepicker component with internationalisation (i18n) support.

## Features

- Select single dates
- Customisable date format
- Disable specific dates or ranges
- Localization support

## Installation

```bash
npm install react-datepicker-i18n
```

## Usage

```jsx
import DatePicker from "react-datepicker-i18n";
import "react-i18n-datepicker/dist/react-i18n-datepicker.css";

const [date, setDate] = useState("");

return (
  <DatePicker
    inputId="datepicker-id"
    inputClassName="form-control"
    inputName="dateOfBirth"
    value={date}
    onChange={setDate((e => e.target.value))}
    isRequired={true}
    isInvalid={null}
    isValid={null}
    isDisabled={false}
    maxDate={new Date()}
    minDate={new Date(2000, 0, 1)}
    minYear={2000}
    maxYear={2025}
    locale="fr"
  />
);
```

## DatePicker Props

This datepicker is a controlled component. 
You must provide a `value` prop and handle changes via the `onChange` callback, similar to how you would with a standard React input.
All other props are **optional**. 
Defaults are shown below.

| Prop             | Type     | Default                          | Description                         |
| ---------------- | -------- | -------------------------------- | ----------------------------------- |
| `inputId`        | string   | `""`                             | ID for the input field              |
| `inputClassName` | string   | `""`                             | CSS class(es) for the input field   |
| `inputName`      | string   | `""`                             | Name attribute for the input field  |
| `value`          | string   | `undefined`                      | Controlled value (ISO date string)  |
| `onInputChange`  | function | `() => {}`                       | Callback when input value changes   |
| `isRequired`     | boolean  | `false`                          | Marks the input as required         |
| `isInvalid`      | boolean  | `null`                           | Marks the input as invalid          |
| `isValid`        | boolean  | `null`                           | Marks the input as valid            |
| `isDisabled`     | boolean  | `false`                          | Disables the input and calendar     |
| `maxDate`        | Date     | `undefined`                      | Maximum selectable date             |
| `minDate`        | Date     | `undefined`                      | Minimum selectable date             |
| `minYear`        | number   | `new Date().getFullYear() - 100` | Minimum selectable year             |
| `maxYear`        | number   | `new Date().getFullYear()`       | Maximum selectable year             |
| `locale`         | string   | `"en-gb"`                        | Locale for date format and language |

## License

MIT
