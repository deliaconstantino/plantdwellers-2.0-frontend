import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { connect } from "react-redux";
import CalendarPopUp from "./CalendarPopUp";
import CalendarTileContent from "./CalendarTileContent";
import BlankTileContent from "./BlankTileContent";
import addWateringEvents from "../../../actions/addWateringEvents";

const WateringScheduleCalendar = (props) => {
  const [date, setDate] = useState(new Date());
  const [showComponent, setShowComponent] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [currentPlantEvents, setCurrentPlantEvents] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token"); //TODO: make this a constant?
    fetch("http://localhost:3001/api/v1/plant_events", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((response) => {
        props.addWateringEvents(response.data);
      });
  }, []);

  const tileContent = ({ date, view }) => {
    const currDate = date.toISOString();
    if (props.wateringEvents.hasOwnProperty(currDate)) {
      return (
        <CalendarTileContent
          date={currDate}
          plants={props.wateringEvents[currDate]}
        />
      );
    } else {
      return <BlankTileContent />;
    }
  };

  const onClickDay = (value, event) => {
    const currValue = value.toISOString();

    if (props.wateringEvents.hasOwnProperty(currValue)) {
      setShowComponent(true);
      setCurrentDate(currValue);
    }
  };

  const closePopUp = () => {
    setShowComponent(false);
    setCurrentDate("");
  };

  return (
    <div className="flex flex-wrap space-x-4 space-y-4 items-start justify-center">
      <div className="reactCalendar">
        <Calendar
          className={"mx-auto px-4 italic text-green-600 bg-white"}
          date={date}
          tileContent={tileContent}
          calendarType={"US"}
          showNeighboringMonth={false}
          tileClassName={"text-blue-900"}
          onClickDay={onClickDay}
        />
      </div>

      {showComponent ? (
        <CalendarPopUp date={currentDate} closePopUp={closePopUp} />
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    wateringEvents: state.wateringEvents.dateEvents,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addWateringEvents: (data) => dispatch(addWateringEvents(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WateringScheduleCalendar);
