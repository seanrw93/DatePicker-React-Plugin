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
import DatePicker from 'react-datepicker-i18n';

<DatePicker
    inputId="my-datepicker"
    inputClassName="custom-datepicker-input"
    isRequired={true}
    isInvalid={false}
    isValid={true}
    isDisabled={false}
    maxDate={new Date(2025, 11, 31)}
    minDate={new Date(2020, 0, 1)}
    minYear={2000}
    maxYear={2030}
    locale="fr"
/>

```

## DatePicker Props

All props are **optional**. Defaults are shown below.

| Prop              | Type      | Default                        | Description                                  |
|-------------------|-----------|--------------------------------|----------------------------------------------|
| `inputId`         | string    | `""`                           | ID for the input field                       |
| `inputClassName`  | string    | `""`                           | CSS class(es) for the input field            |
| `isRequired`      | boolean   | `false`                        | Marks the input as required                  |
| `isInvalid`       | boolean   | `null`                         | Marks the input as invalid                   |
| `isValid`         | boolean   | `null`                         | Marks the input as valid                     |
| `isDisabled`      | boolean   | `false`                        | Disables the input and calendar              |
| `maxDate`         | Date      | `undefined`                    | Maximum selectable date                      |
| `minDate`         | Date      | `undefined`                    | Minimum selectable date                      |
| `minYear`         | number    | `new Date().getFullYear() - 100`| Minimum selectable year                     |
| `maxYear`         | number    | `new Date().getFullYear()`     | Maximum selectable year                      |
| `locale`          | string    | `"en-gb"`                      | Locale for date format and language          |


## License

MIT
