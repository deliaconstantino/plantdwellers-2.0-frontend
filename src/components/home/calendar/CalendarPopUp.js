import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import XIcon from "../../navbar/XIcon";
import Checkbox from "./Checkbox";

const CalendarPopUp = (props) => {
  const date = new Date(props.date).toDateString();

  return (
    // <div>
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8 fit-height">
      <button onClick={props.closePopUp}>
        <XIcon />
      </button>
      {/* <div className="md:flex"> */}
        {/* <div className="md:flex-shrink-0"> */}
          <div className="uppercase block mt-1 text-lg leading-tight font-medium text-green-800 hover:underline">
            Date: {date}
          </div>

          {/* <img className="h-48 w-full md:w-48" src="../../img/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="Stock photo of home with plants"/> */}
        {/* </div> */}

        <div className="p-8">
          {props.reduxPlantEvents.map((event) => {
            return (
              <Checkbox key={event.plantId} completed={event.completed} name={event.plantName} id={event.id}/>
            );
          })}
        </div>
      {/* </div> */}
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
