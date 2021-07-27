const addUserToHome = (homeId) => {
  const token = localStorage.getItem("token")
  return (dispatch) => {
    const configObj = {
      method: "PUT",
      headers: {
        //TODO: verify syntax below
        "Authorization": `Bearer ${token}`,
        "content-type": "application/json",
        "accept": "application/json",
      }
    }
    fetch(`http://localhost:3001/api/v1/homes/${homeId}`, configObj)
    .then((resp) => resp.json())
    .then((resp) => {
      console.log('resp', resp)

      dispatch({
        type: "ADD_HOME_TO_CURRENT_USER",
        payload: resp.data
      })
    });
  }
}

export default addUserToHome;
