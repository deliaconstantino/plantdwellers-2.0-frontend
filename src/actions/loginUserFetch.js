import { ROOTURL } from "../constants";

const loginUserFetch = (formData) => {
  return (dispatch) => {
    const configObject = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch(`${ROOTURL}/login`, configObject)
      .then((resp) => resp.json())
      .then((response) => {
        if (response.error) {
          alert(response.error);
        } else {
          localStorage.setItem("token", response.jwt);
          dispatch({
            type: "SET_CURRENT_USER",
            user: response.user.data.attributes,
          });
        }
      });
  };
};

export default loginUserFetch;
