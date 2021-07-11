const home = (state = {}, action) => {
  switch (action.type) {
    case ("ADD_HOME_INFO"):

      const users = action.payload.users.map(user => {
        return {
          name: user.attributes.name,
          id: user.id
        }
      })

      const homeInfo = action.payload.homeAttributes;

      const home = {
        attributes: {
          id: homeInfo.id,
          nickname: homeInfo.attributes.nickname,
          city: homeInfo.attributes.city,
          state: homeInfo.attributes.state,
          country: homeInfo.attributes.country
        },
        users
      }

      return home;

    default:
      return state;
  }
};

export default home;
