import React from "react";
import { connect } from "react-redux";
import toggleWateringEventCompletion from "../../../actions/toggleWateringEventCompletion.js";

const Checkbox = ({ toggleWateringEventCompletion, plantName, completed, id, name }) => {
  const handleChange = (e) => {
    const plant_event = {
      id: e.target.dataset.id,
      completed: e.target.checked,
    };
    toggleWateringEventCompletion(plant_event);
  };

  return (
    <div className="form-checkbox">
      <label className="mt-2 text-gray-500">
        <input
          type="checkbox"
          name={plantName}
          checked={completed}
          className="form-checkbox-input"
          onChange={handleChange}
          data-id={id}
        />
        {` ${name}`}
      </label>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleWateringEventCompletion: (data) =>
      dispatch(toggleWateringEventCompletion(data)),
  };
};

export default connect(null, mapDispatchToProps)(Checkbox);
