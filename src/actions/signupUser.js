import { ROOTURL } from "../constants";

const signupUser = (userData) => {
  return (dispatch) => {
    const configObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ user: userData }),
    };

   return fetch(`${ROOTURL}/signup`, configObj)
      .then((resp) => resp.json())
      .then((response) => {
        if (response.errors) {
          alert(response.errors.join(". "))
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

export default signupUser;
