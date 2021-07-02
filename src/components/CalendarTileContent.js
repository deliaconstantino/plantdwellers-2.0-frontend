import React from 'react';

const CalendarTileContent = props => {
  console.log('tile', props)
  return (
    <div className="">
      {props.complete ? <p>✅</p> : <p>🔴</p>}
    </div>
  )
}

export default CalendarTileContent;
