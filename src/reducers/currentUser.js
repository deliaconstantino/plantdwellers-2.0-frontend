const currentUser = (state = {}, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        name: action.user.name,
        email: action.user.email,
        home: action.user.home,
      };
    case "CLEAR_CURRENT_USER":
      return {
        name: "",
        email: ""
      };
    default:
      return state;
  }
};

export default currentUser
