import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePlant } from "../../actions/deletePlant";
import { ShowMore } from "./ShowMore";

export const Plant = ({ info, id }) => {
  const [showDescription, setShowDescription] = useState(false);
  const dispatch = useDispatch();

  const handleDescriptionClick = () => {
    setShowDescription(!showDescription);
  };

  const handleClick = () => {
    dispatch(deletePlant(id));
  };

  return (
    <div className=" rounded overflow-hidden shadow-lg bg-white">
      {info.image_url ? (
        <img
          className="w-full"
          src={info.image_url}
          alt="Sunset in the mountains"
          height="300px"
          width="auto"
        />
      ) : (
        <img
          src="../../img/palm-4211167_1920.jpg"
          width="100"
          alt="palm leaf"
        />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-2xl leading-10 text-gray-900">
          {info.common_name}
        </div>
        <p className="text-sm font-semibold text-gray-700 italic leading-6">
          {info.scientific_name}
        </p>
        <p className="text-sm font-semibold text-gray-900 leading-6">
          Water every{" "}
          <span className="text-green-700">
            {info.watering_repeat_rate_days}
          </span>{" "}
          day(s).
        </p>
      </div>
      <div className="flex align-center justify-between px-6 pb-8 mt-4">
        <div className="">
          <button
            className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleClick}
          >
            delete
          </button>
        </div>
        {info?.description && (
          <ShowMore
            chevronUp={showDescription}
            handleDescriptionClick={handleDescriptionClick}
          />
        )}
      </div>
      {showDescription && (
        <p className="text-gray-700 text-base px-6 pb-8">{info?.description}</p>
      )}
    </div>
  );
};
