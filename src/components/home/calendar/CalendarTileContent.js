import React from "react";

const CalendarTileContent = ({ plants }) => {
  const allComplete = plants.find((plant) => plant.completed === false)
    ? false
    : true;

  return (
    <div className="tileContent">{allComplete ? <p>✅</p> : <p>🔴</p>}</div>
  );
};

export default CalendarTileContent;
