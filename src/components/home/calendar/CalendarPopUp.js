import React from "react";
import { connect } from "react-redux";
import XIcon from "../../navbar/XIcon";
import Checkbox from "./Checkbox";

const CalendarPopUp = ({ date, closePopUp, reduxPlantEvents }) => {
  const currentDate = new Date(date).toDateString();

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative min-h-[220px] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg p-4">
            <div className="flex justify-between">
              <div className="p-2 uppercase block mt-1 text-lg leading-tight font-medium text-lime-700 hover:underline">
                {currentDate}
              </div>
              <button onClick={closePopUp}>
                <XIcon />
              </button>
            </div>

            <div className="mt-4 sm:ml-4 text-left">
              <h3
                className="text-lg font-medium leading-6 text-gray-900"
                id="modal-title"
              >
                Mark Watered:
              </h3>
              <div className="mt-2">
                <div>
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
            </div>
          </div>
        </div>
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
