import { useState } from "react";
import DatePicker from "./DatePicker";

function App() {
  const [date, setDate] = useState("");

  return (
    <DatePicker
      value={date}
      onInputChange={e => setDate(e.target.value)}
      locale="fr"
    />
  );
}

export default App;
