import React from "react";

const CalendarPopUp = (props) => {
  console.log("popup props", props);
  console.log("plants", props.plants);
  return (
    <div>
      popup
      <button>Date: {props.date}</button>
      <button onClick={props.closePopUp}>close!</button>
      <ul>
        {props.plants.map((plant, index) => (
          <li key={index}>
            id: {plant.plantId}. Type: {plant.eventType}. Completed:{" "}
            {plant.completed ? "yes" : "no"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarPopUp;
