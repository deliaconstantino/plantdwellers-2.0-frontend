import history from "../components/history";
import { ROOTURL } from "../constants";

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

    fetch(`${ROOTURL}/plants`, configObj)
      .then((res) => res.json())
      .then((response) => {
        if (response.errors) {
          alert(response.errors.join(". "))
        } else {
          dispatch({
            type: "ADD_PLANT",
            plant: response.data,
          });
          history.push("/plants");
        }
      });
  };
};

export default createNewPlantFetch;
