import React from "react";
import { connect } from "react-redux";
import XIcon from "../../navbar/XIcon";
import Checkbox from "./Checkbox";

const CalendarPopUp = ({date, closePopUp, reduxPlantEvents}) => {
  const currentDate = new Date(date).toDateString();

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl pl-8 pr-8 pb-8 fit-height">
      <div className="flex justify-end">
        <button onClick={closePopUp}>
          <XIcon />
        </button>
      </div>
      <div className="p-2 uppercase block mt-1 text-lg leading-tight font-medium text-lime-700 hover:underline">
        {currentDate}
      </div>
      <div className="p-2">
        {reduxPlantEvents.map((event) => {
          return (
            <Checkbox
              key={event.plantId}
              completed={event.completed}
              name={event.plantName}
              id={event.id}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { date } = ownProps;

  return {
    reduxPlantEvents: state.wateringEvents.dateEvents[date],
  };
};

export default connect(mapStateToProps)(CalendarPopUp);
