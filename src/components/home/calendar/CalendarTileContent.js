import React from 'react';

const CalendarTileContent = props => {
  const allComplete = (props.plants.find(plant => plant.completed === false)) ? false : true

  return (
    // <div className="p-10 px-10">
    <div className="tileContent">
      {allComplete ? <p>✅</p> : <p>🔴</p> }
    </div>
  )
}

export default CalendarTileContent;
