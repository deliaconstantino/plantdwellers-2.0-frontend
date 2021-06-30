
const createNewPlantFetch = (plantData) => {
  return (dispatch) => {
    console.log('hi')
    console.log("plantData", plantData)

    const data = {
      plant: {
        common_name: plantData.commonName,
        scientific_name: plantData.scientificName,
        location: plantData.location
      }
    }

    const token = localStorage.getItem("token")

    const configObj = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch('http://localhost:3001/api/v1/plants', configObj)
    .then(res => res.json())
    .then(response => {
      console.log(response)
      dispatch({
        type: "ADD_PLANT",
        plant: response.data,
      });
    })
  }
}

export default createNewPlantFetch;
