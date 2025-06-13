import { useState, useRef, useEffect } from "react"
import { CSSTransition } from "react-transition-group";

const DatePicker = ({
        inputId = "", 
        inputClassName = "", 
        isRequired = false,
        isInvalid = null,
        isValid = null,
        isDisabled = false,
        maxDate = undefined,
        minDate = undefined
    }) => {

    const [showCalendar, setShowCalendar] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [dateValue, setDateValue] = useState({
        day: "",
        date: "",
        month: "",
        year: ""
    })

    const calendarRef = useRef(null);

    const handleInputFocus = () => {
        setShowCalendar(true);
    }


    const handleDateChange = (e) => {
        const { name, value } = e.target;
        setDateValue(prev => ({
            ...prev,
            [name]: name === "month" || name === "year" ? Number(value) : value
        }));
    };
    
    useEffect(() => {
        const { date, month, year } = dateValue;
        if (date && month !== "" && year) {
            setInputValue(`${date.toString().padStart(2, "0")}/${(month + 1).toString().padStart(2, "0")}/${year}`);
        } 
    }, [dateValue]);

    const handleInputChange = (e) => {
        let value = e.target.value.replace(/\D/g, ""); // Remove non-digits

        if (value.length > 2 && value.length <= 4) {
            value = value.slice(0, 2) + "/" + value.slice(2);
        } else if (value.length > 4) {
            value = value.slice(0, 2) + "/" + value.slice(2, 4) + "/" + value.slice(4, 8);
        }

        setInputValue(value);

        const parts = value.split("/");
        if (parts.length === 3) {
            const [date, month, year] = parts;
            if (date.length === 2 && month.length === 2 && year.length === 4) {
                const day = parseInt(new Date(year, month - 1, date).getDay(), 10);
                setDateValue({
                    day: day,
                    date: Number(date),
                    month: Number(month) - 1, // zero-based
                    year: Number(year)
                });
            }
        }
    };

    const handleCurrentDate = () => {
        const today = new Date();
        const day = today.getDay();
        const date = today.getDate();
        const month = today.getMonth();
        const year = today.getFullYear();

        setDateValue({
            day: day,
            date: date,
            month: month,
            year: year
        });
    }

    useEffect(() => {
        if (showCalendar && !dateValue.date && !dateValue.month && !dateValue.year) {
            handleCurrentDate();
        }
    }, [showCalendar]);

    const handlePrev = (e) => {
        e.preventDefault();

        setDateValue(prev => {
            const newMonth = prev.month == 0 ? 11 : prev.month - 1;
            const newYear = prev.month == 0 ? prev.year - 1 : prev.year;
            return {
                ...prev,
                month: newMonth,
                year: newYear
            };
        })
    };

    const handleNext = (e) => {
        e.preventDefault();
        setDateValue(prev => {
            const newMonth = prev.month == 11 ? 0 : prev.month + 1;
            const newYear = prev.month == 11 ? prev.year + 1 : prev.year;
            return {
                ...prev,
                month: newMonth,
                year: newYear
            };
        })
    };

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
        const totalDays = 42;

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

    const daysOfWeekOptions = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    const monthsOptions = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const yearsOptions = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

    console.log("Date Value:", dateValue);
    console.log("Input Value:", inputValue);

    return (
        <div className="datepicker-wrapper">
            <input 
                type="text" 
                id={inputId}
                className={`${inputClassName} ${isInvalid === true ? "is-invalid" : ""} ${isValid === true ? "is-valid" : ""}`}
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
                        <button className="close" onClick={() => setShowCalendar(false)}>Close</button>
                        <div className="calendar__header">
                            <button className="calendar__prev" onClick={handlePrev}>Prev</button>
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
                            <button className="calendar__next" onClick={handleNext}>Next</button>
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
                                    className={`calendar__date-cell ${handleCalendarCellClasses(date)}`}
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