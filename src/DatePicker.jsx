import { useState, useRef } from "react"
import { CSSTransition } from "react-transition-group";

const DatePicker = ({inputClassName = ""}) => {

    const [showCalendar, setShowCalendar] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const calendarRef = useRef(null);

    const handleInputChange = (e) => {
        let value = e.target.value.replace(/\D/g, ""); // Remove non-digits

        if (value.length > 2 && value.length <= 4) {
            value = value.slice(0, 2) + "/" + value.slice(2);
        } else if (value.length > 4) {
            value = value.slice(0, 2) + "/" + value.slice(2, 4) + "/" + value.slice(4, 8);
        }

        setInputValue(value);
    };

    const monthsOptions = Array.from({ length: 12 }, (_, i) => {
        const date = new Date(0, i);
        return date.toLocaleString('default', { month: 'short' });
    });
    const yearsOptions = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

    return (
        <div className="datepicker-wrapper">
            <input 
                type="text" 
                className={inputClassName}
                placeholder="dd/mm/yyyy"
                onFocus={() => setShowCalendar(true)}
                // onBlur={() => setShowCalendar(false)}
                onChange={handleInputChange}
                value={inputValue}
                aria-controls="calendar"
                aria-haspopup="dialog"
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
                            <button className="calendar__prev">Prev</button>
                            <div className="calendar__date">
                                <select name="month" id="month">
                                    {monthsOptions.map((month, index) => (
                                        <option key={index} value={index}>
                                            {month}
                                        </option>
                                    ))}
                                </select>
                                <select name="year" id="year">
                                    {yearsOptions.map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button className="calendar__next">Next</button>
                        </div>
                        <div className="calendar__days">
                            <div className="calendar__day">Sun</div>
                            <div className="calendar__day">Mon</div>
                            <div className="calendar__day">Tue</div>
                            <div className="calendar__day">Wed</div>
                            <div className="calendar__day">Thu</div>
                            <div className="calendar__day">Fri</div>
                            <div className="calendar__day">Sat</div>
                        </div>
                        <div className="calendar__dates">
                            {/* Dates will be dynamically generated here */}
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default DatePicker