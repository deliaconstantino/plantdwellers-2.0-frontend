import history from "../components/history";

const createNewPlantFetch = (plantData) => {
  return (dispatch) => {
    const data = {
      plant: {
        common_name: plantData.commonName,
        scientific_name: plantData.scientificName,
        location: plantData.location,
        watering_repeat_rate_days: plantData.wateringRate,
      },
    };

    const token = localStorage.getItem("token");

    const configObj = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch("http://localhost:3001/api/v1/plants", configObj)
      .then((res) => res.json())
      .then((response) => {
        dispatch({
          type: "ADD_PLANT",
          plant: response.data,
        });
        history.push("/plants");
      });
  };
};

export default createNewPlantFetch;
