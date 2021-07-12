import React from "react";
import XIcon from "./XIcon";

const CalendarPopUp = (props) => {
  console.log("popup props", props);
  console.log("plants", props.plants);

  const date = new Date(props.date).toDateString();
  console.log(date);

  return (
    <div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
        <button onClick={props.closePopUp}><XIcon /></button>
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <div className="uppercase block mt-1 text-lg leading-tight font-medium text-green-800 hover:underline">
              Date: {date}
            </div>

            {/* <img className="h-48 w-full md:w-48" src="../../img/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="Stock photo of home with plants"/> */}
          </div>
          <div className="p-8">
            <ul>
              {props.plants.map((plant, index) => {
                return (
                  <li className="mt-2 text-gray-500" key={plant.plantId}>
                    {plant.eventType} {plant.plantName}: Completed:{" "}
                    {plant.completed ? "yes" : "no"}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPopUp;
