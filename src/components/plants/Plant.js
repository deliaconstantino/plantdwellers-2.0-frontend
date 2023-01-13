import React from "react";
import { useDispatch } from "react-redux";
import { deletePlant } from "../../actions/deletePlant";
import { PlantDescription } from "./PlantDescription";

export const Plant = ({ info, id }) => {
  const dispatch = useDispatch();
  console.log("info", info);

  const handleClick = () => {
    dispatch(deletePlant(id));
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
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
        <div className="font-bold text-xl mb-2">{info.common_name}</div>
        <span className="inline-block bg-gray-200 rounded-full py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Scientific Name: {info.scientific_name}
        </span>
        <span className="inline-block bg-gray-200 rounded-full py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Location in home: {info.location}
        </span>
        <span className="inline-block bg-gray-200 rounded-full py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Water every {info.watering_repeat_rate_days} day(s).
        </span>
        <div className="pt-4 pb-2">
          <button
            className="bg-lime-500 hover:bg-lime-700 text-white font-bold mt-2 py-2 px-4 rounded"
            onClick={handleClick}
          >
            delete
          </button>
        </div>
      </div>
      {info?.description && (
        <PlantDescription description={info?.description} />
      )}
    </div>
  );
};
