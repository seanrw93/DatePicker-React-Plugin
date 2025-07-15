const CloseButton = ({ onClick }) => {
  return (
    <button
      className="calendar__close calendar__icon--close"
      onClick={onClick}
      aria-label="Close calendar"
    >
      ×
    </button>
  );
};

export default CloseButton;
