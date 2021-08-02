import React, { useState } from "react";
import { connect } from "react-redux";
import HomeInput from "./HomeInput";
import createHome from "../../actions/createHome.js";

const CreateHomeForm = ({ createHome }) => {
  const [nickname, setNickname] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newHomeData = {
      nickname,
      city,
      state,
      country,
    };
    createHome(newHomeData);
  };

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <form
      className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <HomeInput
          value="nickname"
          currentState={nickname}
          onChange={handleNicknameChange}
        />
        <HomeInput
          value="city"
          currentState={city}
          onChange={handleCityChange}
        />
        <HomeInput
          value="state"
          currentState={state}
          onChange={handleStateChange}
        />
        <HomeInput
          value="country"
          currentState={country}
          onChange={handleCountryChange}
        />
      </div>
      <div className="mb-6 text-center">
        <button
          className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Create new home
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

const mapDispatchToProps = (dispatch) => {
  return {
    createHome: (homeData) => dispatch(createHome(homeData)),
  };
};

export default connect(null, mapDispatchToProps)(CreateHomeForm);

//TODO: dispatch user selection to backend to update home
