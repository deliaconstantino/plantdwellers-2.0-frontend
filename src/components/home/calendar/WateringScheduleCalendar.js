import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { connect } from "react-redux";
import addWateringEvents from "../../../actions/addWateringEvents";
import { ROOTURL } from "../../../constants";
import BlankTileContent from "./BlankTileContent";
import CalendarPopUp from "./CalendarPopUp";
import CalendarTileContent from "./CalendarTileContent";

const WateringScheduleCalendar = ({ addWateringEvents, wateringEvents }) => {
  const [date] = useState(new Date());
  const [showComponent, setShowComponent] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${ROOTURL}/plant_events`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((response) => {
        addWateringEvents(response.data);
      });
  }, [addWateringEvents]);

  const tileContent = ({ date, view }) => {
    const currDate = date.toISOString();
    if (wateringEvents.hasOwnProperty(currDate)) {
      return (
        <CalendarTileContent
          date={currDate}
          plants={wateringEvents[currDate]}
        />
      );
    } else {
      return <BlankTileContent />;
    }
  };

  const onClickDay = (value, event) => {
    const currValue = value.toISOString();

    if (wateringEvents.hasOwnProperty(currValue)) {
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
