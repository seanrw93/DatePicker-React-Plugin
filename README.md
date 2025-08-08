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
import { useState } from "react";
import DatePicker from "react-datepicker-i18n";
import "react-i18n-datepicker/dist/react-i18n-datepicker.css";

function Example() {
  const [date, setDate] = useState("");

  return (
    <>
      <DatePicker
        inputId="datepicker-id"
        inputClassName="form-control"
        inputName="dateOfBirth"
        value={date}
        onChange={e => setDate(e.target.value)}
        isRequired={true}
        maxDate={new Date()}
        minDate={new Date(2000, 0, 1)}
        minYear={2000}
        maxYear={2025}
        locale="fr"
      />
      <div>Selected date: {date}</div>
    </>
  );
}

export default Example;
```

## DatePicker Props

This datepicker is a controlled component. 
You must provide a `value` prop and handle changes via the `onChange` callback, similar to how you would with a standard React input.
All other props are **optional**. 
Defaults are shown below.

| Prop             | Type     | Default                          | Description                         |
| ---------------- | -------- | -------------------------------- | ----------------------------------- |
| `inputId`        | string   | `""`                             | ID for the input field              |
| `className`      | string   | `""`                             | CSS class(es) for the input field   |
| `inputName`      | string   | `""`                             | Name attribute for the input field  |
| `value`          | string   | `undefined`                      | Controlled value (ISO date string)  |
| `onChange`       | function | `() => {}`                       | Callback when input value changes   |
| `isRequired`     | boolean  | `false`                          | Marks the input as required         |
| `isInvalid`      | boolean  | `null`                           | Marks the input as invalid          |
| `isValid`        | boolean  | `null`                           | Marks the input as valid            |
| `isDisabled`     | boolean  | `false`                          | Disables the input and calendar     |
| `isReadOnly`     | boolean  | `false`                          | Marks the input as readonly         |
| `aria`           | Object   | `{label: null, describedBy: null}` | Provides ARIA attributes for accessibility. Use `label` to specify an accessible label for the component, and `describedBy` to reference additional descriptive elements by their IDs. |
| `maxDate`        | Date     | `undefined`                      | Maximum selectable date (Year from this prop takes precedent over maxYear if set)           |
Minimum selectable date (Year from this prop takes precedence over minYear if set)           |
| `minYear`        | number   | `new Date().getFullYear() - 100` | Minimum selectable year             |
| `maxYear`        | number   | `new Date().getFullYear()`       | Maximum selectable year             |
| `locale`         | string   | `"en-gb"`                        | Locale for date format and language |

## License

MIT
