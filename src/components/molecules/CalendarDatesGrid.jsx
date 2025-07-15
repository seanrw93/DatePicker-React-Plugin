const CalendarDatesGrid = ({
  calendarGrid,
  handleCalendarCellClasses,
  isDisabledDate,
  handleDateClick,
  handleDateKeyUp,
}) => (
  <div className="calendar__dates">
    {calendarGrid.map((date, index) => (
      <div
        key={index}
        className={`calendar__date-cell ${handleCalendarCellClasses(date)} ${
          isDisabledDate(date) ? "calendar__date-cell--disabled" : ""
        }`}
        aria-label={date ? `Select date ${date}` : "Empty cell"}
        tabIndex={date ? 0 : -1}
        role="button"
        onClick={handleDateClick}
        onKeyUp={handleDateKeyUp}
      >
        {date}
      </div>
    ))}
  </div>
);

export default CalendarDatesGrid;
