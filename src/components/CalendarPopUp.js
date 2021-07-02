import React from 'react';

const CalendarPopUp = props => {
  console.log('popup', props)
  return (
    <div>Popup!
      <button>Date: {props.date}</button>
      <button onClick={props.closePopUp}>close!</button>
      {props.plants.map((plant, index) => <p>{plant}</p>)}
    </div>
  )
}

export default CalendarPopUp;
