// Imported atoms
import ChevronButton from "../atoms/ChevronButton";
import HomeButton from "../atoms/HomeButton";
import CloseButton from "../atoms/CloseButton";
import Select from "../atoms/Select";

// Imported molecules
import DaysOfWeek from "../molecules/DaysOfWeek";
import CalendarDatesGrid from "../molecules/CalendarDatesGrid";

const Calendar = ({
  calendarRef,
  resolvedLocale,
  buttonDisabled,
  handlePrev,
  handleNext,
  handleCurrentDate,
  handleDateChange,
  handleDateClick,
  handleDateKeyUp,
  handleCalendarCellClasses,
  isDisabledDate,
  monthsOptions,
  yearsOptions,
  daysOfWeekOptions,
  calendarGrid,
  dateValue,
  setShowCalendar,
}) => (
  <div
    className="calendar"
    id="calendar"
    role="dialog"
    aria-modal="true"
    ref={calendarRef}
  >
    <div className="calendar__content">
      <div className="calendar__header">
        <HomeButton onClick={handleCurrentDate} />
        <span className="calendar__title">
          {resolvedLocale.selectDate || "Select Date"}
        </span>
        <CloseButton onClick={() => setShowCalendar(false)} />
      </div>
      <div className="calendar__nav">
        <ChevronButton
          className={`calendar__icon calendar__icon--prev ${
            buttonDisabled.prev ? "button--disabled" : ""
          }`}
          onClick={handlePrev}
          direction="left"
          aria-label="Previous Month"
        />
        <div className="calendar__date">
          <Select
            options={monthsOptions}
            value={dateValue.month}
            onChange={handleDateChange}
            name="month"
            id="month"
          />
          <Select
            options={yearsOptions}
            value={dateValue.year}
            onChange={handleDateChange}
            name="year"
            id="year"
          />
        </div>
        <ChevronButton
          className={`calendar__icon calendar__icon--next ${
            buttonDisabled.next ? "button--disabled" : ""
          }`}
          onClick={handleNext}
          direction="right"
          aria-label="Next Month"
        />
      </div>
      <div className="calendar__days">
        <DaysOfWeek daysOfWeekOptions={daysOfWeekOptions} />
      </div>
      <CalendarDatesGrid
        calendarGrid={calendarGrid}
        handleCalendarCellClasses={handleCalendarCellClasses}
        isDisabledDate={isDisabledDate}
        handleDateClick={handleDateClick}
        handleDateKeyUp={handleDateKeyUp}
      />
    </div>
  </div>
);

export default Calendar;
