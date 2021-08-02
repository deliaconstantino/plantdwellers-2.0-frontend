import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import loadAllHomes from "../../actions/loadAllHomes";
import addUserToHome from "../../actions/addUserToHome";

const JoinHomeForm = (props) => {
  const [homeId, setHomeId] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token"); //TODO: make this a constant?
    token && props.loadAllHomes(token);
  }, []);

  const handleChange = (event) => {
    setHomeId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!homeId) {
      alert("Please select an existing home or add one to our system.");
    } else {
      props.addUserToHome(homeId);
    }
  };

  return (
    <form className="px-8 pt-6 mb-1 bg-white rounded" onSubmit={handleSubmit}>
      <div className="mb-4">
        <div className="py-2">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Select home by nickname:
          </label>
          <select
            id="home"
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          >
            <option value=""></option>
            {props.homes &&
              props.homes.map((home) => (
                <option key={home.id} value={home.id}>
                  {home.attributes.nickname}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="mb-2 text-center">
        <button
          className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Join this home
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    homes: state.home.allHomes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadAllHomes: (token) => dispatch(loadAllHomes(token)),
    addUserToHome: (homeId) => dispatch(addUserToHome(homeId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JoinHomeForm);
