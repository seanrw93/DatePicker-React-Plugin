import { HomeIcon } from "@heroicons/react/24/solid";

const HomeButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="calendar__icon calendar__icon--home"
      onClick={onClick}
      aria-label="Go to today"
    >
      <HomeIcon />
    </button>
  );
};

export default HomeButton;
