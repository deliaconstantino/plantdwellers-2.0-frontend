import { ROOTURL } from "../constants";

export const deletePlant = (id) => {
  return (dispatch) => {
    const token = localStorage.getItem("token");

    const configObj = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
        accept: "application/json",
      },
    };

    fetch(`${ROOTURL}/plants/${id}`, configObj)
      .then((resp) => resp.json())
      .then((resp) => {
        dispatch({ type: "DELETE_PLANT", id: id });
      });
  };
};
