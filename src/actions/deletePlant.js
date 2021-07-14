const deletePlant = (id) => {
  return (dispatch) => {
    const token = localStorage.getItem("token"); //TODO: make constant

    const configObj = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
        accept: "application/json",
      },
    };

    fetch(`http://localhost:3001/api/v1/plants/${id}`, configObj)
      .then((resp) => resp.json())
      .then((resp) => {
        dispatch({ type: "DELETE_PLANT", id: id });
      });
  };
};

export default deletePlant;
