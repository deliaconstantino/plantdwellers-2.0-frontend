import { ROOTURL } from "../constants";

const addUserToHome = (homeId) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    const configObj = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
        accept: "application/json",
      },
    };
    fetch(`${ROOTURL}/homes/${homeId}`, configObj)
      .then((resp) => resp.json())
      .then((resp) => {
        dispatch({
          type: "ADD_HOME_TO_CURRENT_USER",
          payload: resp.data,
        });
      });
  };
};

export default addUserToHome;
