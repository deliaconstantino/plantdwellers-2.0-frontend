const loadAllHomes = (token) => {
  return (dispatch) => {
    fetch("http://localhost:3001/api/v1/homes", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((resp) => resp.json())
    .then((resp) => {
      dispatch({
        type: "ADD_ALL_HOMES",
        homes: resp.data,
      });
    });
  }
}

export default loadAllHomes;
