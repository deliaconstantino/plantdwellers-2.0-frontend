const home = (state = {}, action) => {
  switch (action.type) {
    case ("ADD_HOME_INFO"):
      if (!action.payload.users) {
        return state;
      }
      const users = action.payload.users.map(user => {
        return {
          name: user.attributes.name,
          id: user.id
        }
      })
      const homeInfo = action.payload.homeAttributes;

      return {
        ...state,
        roommates: users
      };

      case "ADD_ALL_HOMES":
        return {
          ...state,
          allHomes: action.homes
        };
    default:
      return state;
  }
};

export default home;
