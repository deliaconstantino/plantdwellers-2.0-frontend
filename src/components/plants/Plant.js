import React from "react";
import { connect } from "react-redux";
import deletePlant from "../../actions/deletePlant";

const Plant = (props) => {
  const handleChange = (event) => {
    props.deletePlant(props.id);
  };

  return (
    <div className="p-8 border-box bg-white rounded-xl shadow-md max-w-sm flex flex-wrap">
      <div>
        <h3 className="pt-4 mb-2 text-2xl">{props.info.common_name}</h3>
        <p className="p-2">Scientific Name: {props.info.scientific_name}</p>
      </div>
      <div className="p-2">
        <img src="../../img/palm-4211167_1920.jpg" width="100" />
      </div>
      <div className="p-2">
        {/* <p className="p-2">{props.info.common_name}</p> */}

        <p className="p-2">Location: {props.info.location}</p>
        <p className="p-2">
          Water every {props.info.watering_repeat_rate_days} days
        </p>
        <button onClick={handleChange}>delete</button>
      </div>

    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePlant: (id) => dispatch(deletePlant(id)),
  };
};

export default connect(null, mapDispatchToProps)(Plant);

// flex, flex-shrink-0, and p-6
