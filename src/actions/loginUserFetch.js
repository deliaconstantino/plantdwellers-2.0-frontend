const loginUserFetch = (formData) => {
  console.log('in loginUserFetch')
  console.log(formData)

  return (dispatch) => {
    // dispatch({type: "REQUESTING_USER_INFO"}) //TODO: implement a loading screen/icon

    const configObject = {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(formData)
    }

    fetch('http://localhost:3001/api/v1/login', configObject)
      .then(resp => resp.json())
      .then(response => {
        // console.log(!!response.error)
        if (response.error) {
          alert(response.error)
        } else {
          localStorage.setItem("token", response.jwt)
          dispatch({type: "SET_CURRENT_USER", user: response.user.data.attributes})
        }
        // console.log(response)
      })
  }
}

export default loginUserFetch;
