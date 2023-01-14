import React from "react";

const UncheckedCircle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2.5"
    stroke="#FF0000"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const Checkmark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12.75l6 6 9-13.5"
    />
  </svg>
);

const CalendarTileContent = ({ plants }) => {
  const allComplete = plants.find((plant) => plant.completed === false)
    ? false
    : true;

  return (
    <div className="tileContent mx-auto flex justify-center mt-2">
      {allComplete ? (
        <div>
          <Checkmark />
        </div>
      ) : (
        <div className="text-red-500">
          <UncheckedCircle />
        </div>
      )}
    </div>
  );
};

export default CalendarTileContent;
