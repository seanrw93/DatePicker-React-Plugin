import { useState, useRef, useEffect, useMemo } from "react"
import { CSSTransition } from "react-transition-group";
import { HomeIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { i18n } from "./utils/i18nDateData";

const DatePicker = ({
        inputId = "", 
        inputClassName = "", 
        isRequired = false,
        isInvalid = null,
        isValid = null,
        isDisabled = false,
        maxDate = undefined,
        minDate = undefined,
        minYear = new Date().getFullYear() - 100,
        maxYear = new Date().getFullYear(),
        locale = "en"
    }) => {

    // States and Refs START

    const [showCalendar, setShowCalendar] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [dateValue, setDateValue] = useState({ 
        date: "",
        month: "",
        year: ""
    })
    const [buttonDisabled, setButtonDisabled] = useState({
        prev: false,
        next: false
    });

    const calendarRef = useRef(null);

    // States and Refs END


    // Handlers START

    const handleInputFocus = () => {
        setShowCalendar(true);
    }

    const handleDateChange = (e) => {
        const { name, value } = e.target;
        setDateValue(prev => ({
            ...prev,
            [name]: Number(value)
        }));
    };

    const handleInputChange = (e) => {
        let value = e.target.value.replace(/\D/g, ""); // Remove non-digits

        if (value.length > 2 && value.length <= 4) {
            value = value.slice(0, 2) + "/" + value.slice(2);
        } else if (value.length > 4) {
            value = value.slice(0, 2) + "/" + value.slice(2, 4) + "/" + value.slice(4, 8);
        }

        // Split and check year bounds
        const parts = value.split("/");
        if (parts.length === 3) {
            let [date, month, year] = parts;
            if (date.length === 2 && month.length === 2 && year.length === 4) {
                let numericYear = Number(year);
                if (numericYear > maxYear) {
                    year = String(maxYear);
                } else if (numericYear < minYear) {
                    year = String(minYear);
                }
                // Reconstruct value if year was changed
                value = `${date}/${month}/${year}`;
                setDateValue({
                    date: Number(date),
                    month: Number(month) - 1,
                    year: Number(year)
                });
            }
        }

        setInputValue(value);
    };

    const handleCurrentDate = () => {
        const today = new Date();
        const day = today.getDay();
        const date = today.getDate();
        const month = today.getMonth();
        const year = today.getFullYear();

        setDateValue({ 
            date: date,
            month: month,
            year: year
        });
    }

    const handlePrev = (e) => {
        e.preventDefault();
        setDateValue(prev => {
            // Only block if at min year and January
            if (isDisabled || (prev.month === 0 && prev.year === minYear)) return prev;
            const newMonth = prev.month === 0 ? 11 : prev.month - 1;
            const newYear = prev.month === 0 ? prev.year - 1 : prev.year;
            return {
                ...prev,
                month: newMonth,
                year: newYear
            };
        });
    };

    const handleNext = (e) => {
        e.preventDefault();
        setDateValue(prev => {
            // Only block if at max year and December
            if (isDisabled || (prev.month === 11 && prev.year === maxYear)) return prev;
            const newMonth = prev.month === 11 ? 0 : prev.month + 1;
            const newYear = prev.month === 11 ? prev.year + 1 : prev.year;
            return {
                ...prev,
                month: newMonth,
                year: newYear
            };
        });
    };

    const handleDateClick = (e) => {
        const selectedDate = e.target?.textContent;

        if (selectedDate) {
            setDateValue(prev => ({
                ...prev,
                date: Number(selectedDate)
            }))
        }
    }

    const handleCalendarCellClasses = (cellDate) => {
        const today = new Date()
        const {date, month, year} = dateValue;

        const isToday = 
            Number(cellDate) === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

        const isSelected = 
            Number(cellDate) === date &&
            month !== "" &&
            year !== "";

        if (isToday) {
            return " calendar__date-cell--today"
        } else if (isSelected) {
            return " calendar__date-cell--selected"
        } else {
            return "";
        }
    }

    // Handlers END


    // Effects START

    // Update input value when dateValue changes
    useEffect(() => {
        const { date, month, year } = dateValue;
        if (date && month !== "" && year) {
            const jsDate = new Date(year, month, date);
            setInputValue(jsDate.toLocaleDateString("en-GB")); // "dd/mm/yyyy" format
        }
    }, [dateValue]);

    // Initialize dateValue with current date if showCalendar is true and no date is set
    useEffect(() => {
        if (showCalendar && !dateValue.date && !dateValue.month && !dateValue.year) {
            handleCurrentDate();
        }
    }, [showCalendar]);

    // Update button disabled state based on dateValue and min/max year/month
    useEffect(() => {
        setButtonDisabled({
            prev: dateValue.month === 0 && dateValue.year === minYear,
            next: dateValue.month === 11 && dateValue.year === maxYear
        });
    }, [dateValue, minYear, maxYear, isDisabled]);

    // Effects END


    // Logic & Data START

    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    }

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
                dayCounter++
            }
        }

        return calendarDates
    }

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
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
    ];

    const monthsOptions = resolvedLocale.months || [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const yearsOptions = Array.from({ length: maxYear - minYear + 1 }, (_, i) => maxYear - i);

    const classNames = [inputClassName, isValid && "is-valid", isInvalid && "is-invalid"].filter(Boolean);

    // Logic & Data END

    return (
        <div className="datepicker-wrapper">
            <input 
                type="text" 
                id={inputId}
                className={classNames.join(" ")}
                placeholder="dd/mm/yyyy"
                value={inputValue}
                required={isRequired}
                disabled={isDisabled}

                onFocus={handleInputFocus}
                onChange={handleInputChange}

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
                <div
                    className="calendar"
                    id="calendar"
                    role="dialog"
                    aria-modal="true"
                    ref={calendarRef} 
                >
                    <div className="calendar__content">
                        <div className="calendar__header">
                            <HomeIcon className="calendar__icon calendar__icon--home" onClick={handleCurrentDate} />
                            <span className="calendar__title">{resolvedLocale.selectDate || "Select Date"}</span>
                            <button className="calendar__close calendar__icon--close" onClick={() => setShowCalendar(false)}>×</button>
                        </div>
                        <div className="calendar__nav">
                            <button className={`calendar__icon calendar__icon--prev ${buttonDisabled.prev ? "button--disabled" : ""}`} onClick={handlePrev} aria-label="Previous Month">
                                <ChevronLeftIcon />
                            </button>
                            <div className="calendar__date">
                                <select name="month" id="month" 
                                    onChange={handleDateChange}
                                    value={dateValue.month}
                                >
                                    {monthsOptions.map((month, index) => (
                                        <option key={index} value={index}>
                                            {month}
                                        </option>
                                    ))}
                                </select>
                                <select name="year" id="year" 
                                    onChange={handleDateChange}
                                    value={dateValue.year}
                                >
                                    {yearsOptions.map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button className={`calendar__icon calendar__icon--next ${buttonDisabled.next ? "button--disabled" : ""}`} onClick={handleNext} aria-label="Next Month">
                                <ChevronRightIcon />
                            </button>
                        </div>
                        <div className="calendar__days">
                            {daysOfWeekOptions.map((day, index) => (
                                <div key={index} className="calendar__day">
                                    {day}
                                </div>
                            ))}
                        </div>
                        <div className="calendar__dates">
                            {calendarGrid.map((date, index) => (
                                <div 
                                    key={index} 
                                    className={`calendar__date-cell ${handleCalendarCellClasses(date)} ${isDisabledDate(date) ? "calendar__date-cell--disabled" : ""}`}
                                    aria-label={date ? `Select date ${date}` : "Empty cell"}
                                    tabIndex={date ? 0 : -1}
                                    role="button"
                                    onClick={(e) => {
                                        handleDateClick(e);
                                        setShowCalendar(false);
                                    }}
                                >
                                    {date}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default DatePicker