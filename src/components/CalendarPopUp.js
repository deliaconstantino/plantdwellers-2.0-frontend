import React from 'react';

const CalendarPopUp = props => {
  console.log('popup', props)
  return (
    <div>Popup!
      <button>Date: {props.date}</button>
    </div>
  )
}

export default CalendarPopUp;
