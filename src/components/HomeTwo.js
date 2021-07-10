import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { connect } from "react-redux";

// import "react-calendar/dist/Calendar.css";
import CalendarPopUp from "./CalendarPopUp";
import CalendarTileContent from "./CalendarTileContent";
import addWateringEvents from "../actions/addWateringEvents";

const HomeTwo = props => {
  console.log('wateringEvents', props.wateringEvents)

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
        props.addWateringEvents(response)
      })
  }, [])

  return (
    <div>HomeTwo</div>
  )
}

const mapStateToProps = state => {
  return {
    wateringEvents: state.wateringEvents
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addWateringEvents: data => dispatch(addWateringEvents(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeTwo);
