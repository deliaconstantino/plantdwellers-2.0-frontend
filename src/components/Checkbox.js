import React from "react";

const Checkbox = props => {
  return (
    <div className="form-checkbox">
      <label className="mt-2 text-gray-500">
        <input
          type="checkbox"
          name={props.info.plantName}
          checked={props.info.complete}
          className="form-checkbox-input"
          onChange={props.onChange}
          data-idx={props.idx}
        />
        {props.info.plantName}
      </label>
    </div>
  )
}

export default Checkbox;
