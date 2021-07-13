import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import XIcon from "../../navbar/XIcon";
import Checkbox from "./Checkbox";
import toggleWateringEventCompletion from "../../../actions/toggleWateringEventCompletion.js"

const CalendarPopUp = (props) => {
  console.log("popup props", props);
  console.log("plants", props.plantEvents);

  const date = new Date(props.date).toDateString();
  console.log(date);

  const [completed, setCompleted] = useState([])


  useEffect(() => {
    if(props.plantEvents.length > 0) {
    const initialState = props.plantEvents.map(event => ({ eventId: event.id, complete: event.completed}));
    setCompleted(initialState);
  }
}, [props.plantEvents]);

  const handleChange = e => {
    console.log("in handle change")
    console.log("data", e.target.dataset.idx)
    console.log(e.target.checked)
    console.log("completed", completed)
    const completedCopy = [...completed];
    completedCopy[e.target.dataset.idx].complete = e.target.checked;
    console.log("nowComplete", completedCopy)
    // console.log('arr', completedArray)
    setCompleted(completedCopy)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('in submit', completed)
  }

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
            <form onSubmit={handleSubmit}>
              {props.plantEvents.map((event, index) => {
                return (
                  // <p className="mt-2 text-gray-500" key={plant.plantId}>
                  //   {plant.eventType} {plant.plantName}: Completed:{" "}
                  //   {plant.completed ? "yes" : "no"}
                  // </p>
                  <Checkbox key={event.plantId} info={event} idx={index} onChange={handleChange}/>
                );
              })}
              <input type="submit" value="save"/>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    toggleWateringEventCompletion: formData => dispatch(toggleWateringEventCompletion(formData))
  }
}

export default connect(null, mapDispatchToProps)(CalendarPopUp);
