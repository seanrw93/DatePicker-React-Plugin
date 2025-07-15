import { useState, useRef, useEffect, useMemo } from "react";
import { CSSTransition } from "react-transition-group";
import { i18n } from "./utils/i18nDateData";

//Imported atoms
import DateInput from "./components/atoms/DateInput";

//Imported organisms
import Calendar from "./components/organisms/Calendar";

const DatePicker = ({
  inputId = "",
  inputClassName = "",
  inputName = "",
  value,
  onInputChange = () => {},
  isRequired = false,
  isInvalid = null,
  isValid = null,
  isDisabled = false,
  maxDate = undefined,
  minDate = undefined,
  minYear = new Date().getFullYear() - 100,
  maxYear = new Date().getFullYear(),
  locale = "en-gb",
}) => {
  // States and Refs START

  const [showCalendar, setShowCalendar] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [dateValue, setDateValue] = useState({
    date: "",
    month: "",
    year: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState({
    prev: false,
    next: false,
  });

  const calendarRef = useRef(null);

  // States and Refs END

  // Handlers START

  const handleInputFocus = () => {
    setShowCalendar(true);
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDateValue((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  const handleDateFormat = (e) => {
    let rawValue = e.target.value.replace(/\D/g, "");
    let format = resolvedLocale.dateFormat || "DD/MM/YYYY";
    // Detect separator (supports "/", "-", ".")
    const separatorMatch = format.match(/[^A-Za-z]/);
    const separator = separatorMatch ? separatorMatch[0] : "/";
    const formatParts = format.split(separator);

    // Build value with separators after each interval
    let value = "";
    let cursor = 0;
    formatParts.forEach((part, idx) => {
      let len = part === "YYYY" ? 4 : 2;
      if (rawValue.length >= cursor + len) {
        value += rawValue.slice(cursor, cursor + len);
        cursor += len;
      } else {
        value += rawValue.slice(cursor);
        cursor = rawValue.length;
      }
      // Add separator if not last part and there's more input
      if (idx < formatParts.length - 1 && cursor < rawValue.length) {
        value += separator;
      }
    });

    setInputValue(value);

    // Parse value into day/month/year according to formatParts
    const parts = value.split(separator);
    if (parts.length === 3) {
      let day, month, year;
      formatParts.forEach((part, index) => {
        if (part === "DD") day = parts[index];
        if (part === "MM") month = parts[index];
        if (part === "YYYY") year = parts[index];
      });

      if (
        day &&
        month &&
        year &&
        day.length === 2 &&
        month.length === 2 &&
        year.length === 4
      ) {
        let numericYear = Number(year);
        if (numericYear > maxYear) year = String(maxYear);
        if (numericYear < minYear) year = String(minYear);

        // Reconstruct value in correct order
        const reconstructed = format
          .replace("DD", day)
          .replace("MM", month)
          .replace("YYYY", year);

        setInputValue(reconstructed);

        setDateValue({
          date: Number(day),
          month: Number(month) - 1,
          year: Number(year),
        });
      }
    }
  };

  const handleCurrentDate = () => {
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    setDateValue({
      date: date,
      month: month,
      year: year,
    });
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setDateValue((prev) => {
      // Only block if at min year and January
      if (isDisabled || (prev.month === 0 && prev.year === minYear))
        return prev;
      const newMonth = prev.month === 0 ? 11 : prev.month - 1;
      const newYear = prev.month === 0 ? prev.year - 1 : prev.year;
      return {
        ...prev,
        month: newMonth,
        year: newYear,
      };
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setDateValue((prev) => {
      // Only block if at max year and December
      if (isDisabled || (prev.month === 11 && prev.year === maxYear))
        return prev;
      const newMonth = prev.month === 11 ? 0 : prev.month + 1;
      const newYear = prev.month === 11 ? prev.year + 1 : prev.year;
      return {
        ...prev,
        month: newMonth,
        year: newYear,
      };
    });
  };

  const handleDateClick = (e) => {
    const selectedDate = e.target?.textContent;

    if (selectedDate) {
      setDateValue((prev) => ({
        ...prev,
        date: Number(selectedDate),
      }));
      const newDateObj = new Date(
        dateValue.year,
        dateValue.month,
        Number(selectedDate)
      );
    }
    setShowCalendar(false);
  };

  const handleDateKeyUp = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const selectedDate = e.target?.textContent;

      if (selectedDate) {
        setDateValue((prev) => ({
          ...prev,
          date: Number(selectedDate),
        }));
        const newDateObj = new Date(
          dateValue.year,
          dateValue.month,
          Number(selectedDate)
        );
      }
      setShowCalendar(false);
    }
  };

  const handleCalendarCellClasses = (cellDate) => {
    const today = new Date();
    const { date, month, year } = dateValue;

    const isToday =
      Number(cellDate) === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();

    const isSelected = Number(cellDate) === date && month !== "" && year !== "";

    if (isToday) {
      return " calendar__date-cell--today";
    } else if (isSelected) {
      return " calendar__date-cell--selected";
    } else {
      return "";
    }
  };

  // Handlers END

  // Logic & Data START

  const formatDateByLocale = (dateObj, format) => {
    if (!(dateObj instanceof Date) || isNaN(dateObj.getTime())) return "";
    const dd = String(dateObj.getDate()).padStart(2, "0");
    const mm = String(dateObj.getMonth() + 1).padStart(2, "0");
    const yyyy = dateObj.getFullYear();

    return format.replace("DD", dd).replace("MM", mm).replace("YYYY", yyyy);
  };

  const getDisplayValue = (isoDate, format) => {
    if (!isoDate) return "";
    const dateObj = new Date(isoDate);
    if (isNaN(dateObj.getTime())) return "";
    return formatDateByLocale(dateObj, format);
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendarDates = () => {
    const year = dateValue.year;
    const month = dateValue.month;
    const daysInMonth = getDaysInMonth(month, year);
    const firstDayOfWeek = new Date(year, month, 1).getDay();

    const calendarDates = [];
    let dayCounter = 1;

    const totalCells = daysInMonth + firstDayOfWeek;
    const totalDays = totalCells <= 35 ? 35 : 42;

    for (let i = 0; i < totalDays; i++) {
      if (i < firstDayOfWeek) {
        calendarDates.push("");
      } else if (dayCounter > daysInMonth) {
        calendarDates.push("");
      } else {
        calendarDates.push(dayCounter);
        dayCounter++;
      }
    }

    return calendarDates;
  };

  const calendarGrid = generateCalendarDates();

  const isDisabledDate = (cellDay) => {
    if (!cellDay) return true; // Disable empty cells

    const cellDate = new Date(dateValue.year, dateValue.month, cellDay);

    if (minDate && cellDate < new Date(minDate)) return true;
    if (maxDate && cellDate > new Date(maxDate)) return true;

    return false;
  };

  // Memoize resolved locale to avoid unnecessary recalculations
  const resolvedLocale = useMemo(() => {
    return typeof locale === "string"
      ? i18n[locale] || i18n[locale.split("-")[0]] || i18n.en
      : locale;
  }, [locale]);

  const daysOfWeekOptions = resolvedLocale.dayOfWeekShort || [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  const monthsOptions = resolvedLocale.months || [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const yearsOptions = Array.from(
    { length: maxYear - minYear + 1 },
    (_, i) => maxYear - i
  );
  

  const classNames = [
    inputClassName,
    isValid && "is-valid",
    isInvalid && "is-invalid",
  ].filter(Boolean);

  // Logic & Data END

  // Effects START

  // Update inputValue when dateValue changes into correct format
  useEffect(() => {
    const { date, month, year } = dateValue;
    if (
      typeof date === "number" &&
      !isNaN(date) &&
      typeof month === "number" &&
      !isNaN(month) &&
      typeof year === "number" &&
      !isNaN(year)
    ) {
      const jsDate = new Date(year, month, date);
      setInputValue(
        formatDateByLocale(jsDate, resolvedLocale.dateFormat || "DD/MM/YYYY")
      );
    }
  }, [dateValue, resolvedLocale]);

  // Initialize dateValue with current date if showCalendar is true and no date is set
  useEffect(() => {
    if (
      showCalendar &&
      !dateValue.date &&
      !dateValue.month &&
      !dateValue.year
    ) {
      handleCurrentDate();
    }
  }, [dateValue, showCalendar]);

  // Update button disabled state based on dateValue and min/max year/month
  useEffect(() => {
    setButtonDisabled({
      prev: dateValue.month === 0 && dateValue.year === minYear,
      next: dateValue.month === 11 && dateValue.year === maxYear,
    });
  }, [dateValue, minYear, maxYear, isDisabled]);

  // Effects END

  return (
    <div className="datepicker-wrapper">
      <DateInput
        id={inputId}
        name={inputName}
        className={classNames.join(" ")}
        placeholder={resolvedLocale.dateFormat || "DD/MM/YYYY"}
        value={getDisplayValue(value, resolvedLocale.dateFormat) || inputValue}
        required={isRequired}
        disabled={isDisabled}
        onInputChange={onInputChange}
        onFocus={handleInputFocus}
        handleDateFormat={handleDateFormat}
        aria-label="Date Picker Input"
        aria-controls="calendar"
        aria-haspopup="dialog"
        aria-expanded={showCalendar}
        aria-invalid={isInvalid ? "true" : undefined}
      />
      <CSSTransition
        in={showCalendar}
        timeout={500}
        classNames="calendar-anim"
        unmountOnExit
        nodeRef={calendarRef}
      >
        <Calendar
          calendarRef={calendarRef}
          resolvedLocale={resolvedLocale}
          buttonDisabled={buttonDisabled}
          handlePrev={handlePrev}
          handleNext={handleNext}
          handleCurrentDate={handleCurrentDate}
          handleDateChange={handleDateChange}
          handleDateClick={handleDateClick}
          handleDateKeyUp={handleDateKeyUp}
          handleCalendarCellClasses={handleCalendarCellClasses}
          isDisabledDate={isDisabledDate}
          monthsOptions={monthsOptions}
          yearsOptions={yearsOptions}
          daysOfWeekOptions={daysOfWeekOptions}
          calendarGrid={calendarGrid}
          dateValue={dateValue}
          setShowCalendar={setShowCalendar}
        />
      </CSSTransition>
    </div>
  );
};

export default DatePicker;
