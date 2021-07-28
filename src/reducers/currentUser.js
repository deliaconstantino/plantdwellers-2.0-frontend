const currentUser = (state = {}, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      let userHome = {};
      if (action.user.home) {
        userHome = {
          id: action.user.home.id,
          nickname: action.user.home.nickname,
          city: action.user.home.city,
          state: action.user.home.state,
          country: action.user.home.country,
        };
      }

      return {
        name: action.user.name,
        email: action.user.email,
        home: userHome,
      };
    case "ADD_HOME_TO_CURRENT_USER":
      const homeObj = {
        id: action.payload.id,
        nickname: action.payload.attributes.nickname,
        city: action.payload.attributes.city,
        state: action.payload.attributes.state,
        country: action.payload.attributes.country,
      };

      const newState = {
        ...state,
        home: homeObj,
      };
      return {
        ...state,
        home: homeObj,
      };
    case "CLEAR_CURRENT_USER":
      //TODO: this format or simply {}
      return {
        name: "",
        email: "",
        home: {},
      };
    default:
      return state;
  }
};

export default currentUser;
