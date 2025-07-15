const DaysOfWeek = ({ daysOfWeekOptions }) => {
  <>
    {daysOfWeekOptions.map((day, index) => (
      <div key={index} className="calendar__day">
        {day}
      </div>
    ))}
  </>;
};

export default DaysOfWeek;
