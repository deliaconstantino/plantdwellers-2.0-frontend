import { ROOTURL } from "../constants"; 

const loadAllHomes = (token) => {
  return (dispatch) => {
    fetch(`${ROOTURL}/homes`, {
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
  };
};

export default loadAllHomes;
