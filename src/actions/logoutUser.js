const logoutUser = () => {
  console.log('in logoutUser')
  console.log('token', localStorage.getItem("token"))
  const token = localStorage.getItem("token")

  return (dispatch) => {
    dispatch({type: "CLEAR_CURRENT_USER"})
  }
}

export default logoutUser;
