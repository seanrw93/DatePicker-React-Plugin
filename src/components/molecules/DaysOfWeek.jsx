const DaysOfWeek = ({ daysOfWeekOptions }) => {
  return (
    <>
      {daysOfWeekOptions.map((day, index) => (
        <div key={index} className="calendar__day">
          {day}
        </div>
      ))}
    </>
  );
};

export default DaysOfWeek;