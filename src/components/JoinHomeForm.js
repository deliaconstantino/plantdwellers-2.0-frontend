import React, { useEffect } from "react";
import { connect } from "react-redux";
import loadAllHomes from "../actions/loadAllHomes";

const JoinHomeForm = (props) => {
  const handleChange = (event) => {
    console.log("in handle change");
  };

  useEffect(() => {
    const token = localStorage.getItem("token"); //TODO: make this a constant?
    token && props.loadAllHomes(token);
  }, []);

  return (
    <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
      <div className="mb-4">
        <div className="py-2">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            for="email"
          >
            Select home by nickname:
          </label>
          <select id="home" className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
            <option value=""></option>
            {props.homes &&
              props.homes.map((home) => (
                <option key={home.id} value={home.id}>{home.attributes.nickname}</option>
              ))}
          </select>
        </div>
      </div>
      <div className="mb-6 text-center">
        <button
          className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline"
          type="button"
        >
          Join this home
        </button>
      </div>
      <hr className="mb-6 border-t" />
      <div className="text-center">
        <a
          className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
          href="./register.html"
        >
          Create an Account!
        </a>
      </div>
      <div className="text-center">
        <a
          className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
          href="./index.html"
        >
          Already have an account? Login!
        </a>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JoinHomeForm);

//TODO: grab all existing homes from backend, render them in dropdown then send selection to backend to update user
