import React, { useState } from "react";
import { useDispatch } from "react-redux";
import createNewPlantFetch from "../../actions/createNewPlantFetch";

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const WATERING_RATE_MIN = 1;
const WATERING_RATE_MAX = 14;

export const ShowPlantBeforeSave = ({
  data,
  pic,
  showModal,
  clearSearchTerm,
  location,
}) => {
  const [isCorrectInfo, setIsCorrectInfo] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setIsCorrectInfo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isCorrectInfo === "yes") {
      const plantData = {
        commonName: data?.attributes?.name,
        scientificName: data?.attributes?.binomial_name,
        wateringRate: randomNumber(WATERING_RATE_MIN, WATERING_RATE_MAX),
        description: data?.attributes?.description,
        imageUrl: pic?.attributes?.canopy_url,
      };

      dispatch(createNewPlantFetch(plantData));
    } else {
      //close modal and clear form...
      showModal(false);
      clearSearchTerm("");
    }
  };

  return (
    //TODO: increase size of modal
    //TODO: address CLS from image
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg font-medium leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Search Results:
                  </h3>
                  <div>
                    <h2 className="text-sm text-gray-500">
                      Common name: {data?.attributes?.name}
                    </h2>
                    <h2 className="text-sm text-gray-500">
                      Scientific name: {data?.attributes?.binomial_name}
                    </h2>
                    {pic?.attributes?.canopy_url ? (
                      <img alt="plant name" src={pic?.attributes?.canopy_url} />
                    ) : (
                      <div>No image found</div>
                    )}

                    <form
                      onSubmit={handleSubmit}
                      className="text-sm text-gray-500"
                    >
                      <div className="px-5 py-7">
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">
                          Is this correct?
                        </label>
                        <input
                          type="radio"
                          id="yes"
                          name="plantVerification"
                          value="yes"
                          onChange={handleChange}
                        />
                        <label htmlFor="yes"> Yes! Add this plant.</label>
                        <br />
                        <input
                          type="radio"
                          id="no"
                          name="plantVerification"
                          value="No"
                          onChange={handleChange}
                        />
                        <label htmlFor="no"> No! Let me search again.</label>
                      </div>
                      <input
                        type="submit"
                        value="Save"
                        className="transition duration-200 mt-5 bg-lime-400 hover:bg-green-500 focus:bg-green-600 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
