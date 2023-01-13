import React, { useState } from "react";
import { ShowPlantBeforeSave } from "./ShowPlantBeforeSave";

export const PlantSearch = () => {
  //TODO: add location into a separate step after confirmation that this is correct plant.
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [showFoundPlant, setShowFoundPlant] = useState(false);
  const [plantData, setPlantData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://openfarm.cc/api/v1/crops/?filter=${searchTerm}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then(({ data, included }) => {
        const plantInfo = {
          data: data[0],
          pic: included[0],
        };

        setPlantData(plantInfo);
        setShowFoundPlant(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-top justify-left md:py-8">
          <div className="bg-white shadow w-full rounded-lg">
            <h2 className="pl-5 pt-7 font-semibold text-lg text-gray-600 pb-1 block">
              Search for a plant by it's common name, for example "coconut".
            </h2>
            <div className="px-5 py-7">
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Common Name:
              </label>
              <input
                type="text"
                name="commonName"
                value={searchTerm}
                onChange={handleSearchTermChange}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Location in home:
              </label>
              <input
                type="text"
                name="location"
                value={location}
                onChange={handleLocationChange}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />

              <input
                type="submit"
                value="Search"
                className="transition duration-200 mt-5 bg-lime-400 hover:bg-green-500 focus:bg-green-600 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              />
            </div>
          </div>
        </div>
      </form>
      {showFoundPlant && (
        <ShowPlantBeforeSave
          data={plantData.data}
          pic={plantData.pic}
          showModal={setShowFoundPlant}
          clearSearchTerm={setSearchTerm}
          location={location}
        />
      )}
    </>
  );
};
