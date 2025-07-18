const CloseButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="calendar__close calendar__icon--close"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      aria-label="Close calendar"
    >
      ×
    </button>
  );
};

export default CloseButton;
