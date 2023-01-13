import React from "react";
import { connect } from "react-redux";
import deletePlant from "../../actions/deletePlant";

const Plant = ({ deletePlant, info, id }) => {
  const handleChange = (event) => {
    deletePlant(id);
  };

  return (
    <div className="p-8 border-box bg-white rounded-xl shadow-md flex flex-wrap">
      <div>
        <h3 className="pt-4 mb-2 text-3xl text-lime-800 font-bold">
          {info.common_name}
        </h3>
        <p className="p-2">Scientific Name: {info.scientific_name}</p>
      </div>
      <div className="p-2">
        <img
          src="../../img/palm-4211167_1920.jpg"
          width="100"
          alt="palm leaf"
        />
      </div>
      <div className="px-2">
        <p className="px-2">Location: {info.location}</p>
        <p className="px-2">
          Water every {info.watering_repeat_rate_days} days
        </p>
        <button
          className="bg-lime-500 hover:bg-lime-700 text-white font-bold mt-2 py-2 px-4 rounded"
          onClick={handleChange}
        >
          delete
        </button>
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
