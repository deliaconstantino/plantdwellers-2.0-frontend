import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { connect } from "react-redux";

// import "react-calendar/dist/Calendar.css";
import CalendarPopUp from "./CalendarPopUp";
import CalendarTileContent from "./CalendarTileContent";
import addWateringEvents from "../../../actions/addWateringEvents";


const WateringScheduleCalendar = props => {
  const [date, setDate] = useState(new Date())
  const [showComponent, setShowComponent] = useState(false)
  const [currentDate, setCurrentDate] = useState("")
  const [currentPlantEvents, setCurrentPlantEvents] = useState([])

  // console.log('wateringEvents', props.wateringEvents)

  useEffect(() => {
    const token = localStorage.getItem("token"); //TODO: make this a constant?
    fetch("http://localhost:3001/api/v1/plant_events", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((resp) => resp.json())
      .then(response => {
        props.addWateringEvents(response.data)
      })
  }, [])

  const tileContent = ({ date, view }) => {
    const currDate = date.toISOString()
    if (props.wateringEvents.hasOwnProperty(currDate)) {
      return (
        <CalendarTileContent
          date={currDate}
          plants={props.wateringEvents[currDate]}
        />
      );
    }
  };

  const onClickDay = (value, event) => {
    console.log("in onClickDay");
    const currValue= value.toISOString()
    console.log("value", currValue);
    console.log("from dates:", props.wateringEvents[currValue]);

    if (props.wateringEvents.hasOwnProperty(currValue)) {
      setShowComponent(true);
      setCurrentDate(currValue);
      setCurrentPlantEvents(props.wateringEvents[currValue])
    }
  };

  const closePopUp = () => {
    setShowComponent(false);
    setCurrentDate("");
    setCurrentPlantEvents([])
  };

  // const onChange = (date) => this.setState({ date }); ??

  return (
    <div className="container">
        <div className="flex flex-wrap">
          <Calendar
            // onChange={this.handleChange}
            className={
              "container mx-auto px-4 italic text-green-600 bg-gray-300"
            }
            date={date}
            tileContent={tileContent}
            calendarType={"US"}
            onDrillDown={() => console.log("hi")}
            showNeighboringMonth={false}
            tileClassName={"text-blue-900"}
            onClickDay={onClickDay}
          />

          {showComponent ? (
            <CalendarPopUp
              date={currentDate}
              plantEvents={currentPlantEvents}
              closePopUp={closePopUp}
            />
          ) : null}
        </div>
      </div>
  )
}

const mapStateToProps = state => {
  return {
    wateringEvents: state.wateringEvents.dateEvents
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addWateringEvents: data => dispatch(addWateringEvents(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WateringScheduleCalendar);
