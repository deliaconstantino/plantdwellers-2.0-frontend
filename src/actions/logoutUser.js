const logoutUser = () => {

  return (dispatch) => {
    dispatch({type: "CLEAR_CURRENT_USER"})
  }
}

export default logoutUser;
