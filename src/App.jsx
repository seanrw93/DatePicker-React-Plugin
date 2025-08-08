//App.jsx used as test file for the DatePicker component

import { useState } from "react";
import DatePicker from "./DatePicker";

function App() {
  const [date, setDate] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
    console.log("Selected date", e.target.value);
  };

  return (
    <DatePicker
      inputId="datePicker-123"
      inputName="datePicker"
      value={date}
      onChange={handleDateChange}
      locale="fr"
      minDate={new Date("2023-01-01")}
      maxDate={new Date("2028-12-31")}
    />
  );
}

export default App;
