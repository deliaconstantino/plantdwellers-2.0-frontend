const createHome = (homeData) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    const configObj = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(homeData),
    };

    fetch("http://localhost:3001/api/v1/homes", configObj)
      .then((resp) => resp.json())
      .then((resp) => {
        dispatch({ type: "ADD_HOME_TO_CURRENT_USER", payload: resp.data });
      });
  };
};

export default createHome;
