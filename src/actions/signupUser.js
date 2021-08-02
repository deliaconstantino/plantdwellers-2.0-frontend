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

    fetch("http://localhost:3001/api/v1/signup", configObj)
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

export default signupUser;
