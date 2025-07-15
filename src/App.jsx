import { useId } from "react";
import DatePicker from "./DatePicker";

function App() {
  const today = new Date();
  const monthAgo = new Date();
  monthAgo.setMonth(today.getMonth() - 1);

  return (
    <DatePicker
      inputId={`datepicker-${useId()}`}
      locale="fr"
    />
  );
}

export default App;
