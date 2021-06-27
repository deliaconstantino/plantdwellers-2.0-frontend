//TODO: delete if not using - moved login state to component state
const initialState = {
  email: "",
  password: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_LOGIN_FORM":
      return action.formData;
    default:
      return state;
  }
};

export default loginReducer
