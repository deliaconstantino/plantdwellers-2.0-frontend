import React from "react";
import { connect } from "react-redux";
import toggleWateringEventCompletion from "../../../actions/toggleWateringEventCompletion.js"

const Checkbox = props => {

  const handleChange = e => {
    console.log("data", e.target.dataset.id)
    console.log('checked', e.target.checked)
    const plant_event = {
      id: e.target.dataset.id,
      completed: e.target.checked
    }
    console.log(plant_event)
    props.toggleWateringEventCompletion(plant_event)
  }

  return (
    <div className="form-checkbox">
      <label className="mt-2 text-gray-500">
        <input
          type="checkbox"
          name={props.info.plantName}
          checked={props.info.complete}
          className="form-checkbox-input"
          onChange={handleChange}
          data-id={props.info.id}
        />
        {props.info.plantName}
      </label>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    toggleWateringEventCompletion: data => dispatch(toggleWateringEventCompletion(data))
  }
}

export default connect(null, mapDispatchToProps)(Checkbox);
