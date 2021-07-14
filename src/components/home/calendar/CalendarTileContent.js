import React from 'react';

const CalendarTileContent = props => {
  const allComplete = (props.plants.find(plant => plant.completed === false)) ? false : true

  return (
    <div className="">
      {allComplete ? <p>✅</p> : <p>🔴</p> }
    </div>
  )
}

export default CalendarTileContent;
