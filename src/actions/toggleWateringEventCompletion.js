const toggleWateringEventCompletion = (data) => {
  return (dispatch) => {
    const token = localStorage.getItem("token");

    const params = {
      plant_event: data,
    };

    const configObj = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(params),
    };

    fetch(`http://localhost:3001/api/v1/plant_events/${data.id}`, configObj)
      .then((resp) => resp.json())
      .then((response) => {
        dispatch({
          type: "UPDATE_EVENT_COMPLETION",
          action: response.data,
        });
      });
  };
};

export default toggleWateringEventCompletion;
