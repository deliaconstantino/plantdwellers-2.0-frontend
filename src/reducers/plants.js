const plants = (state = { plants: [] }, action) => {
  switch (action.type) {
    case "SET_PLANTS":
      return {
        plants: action.plants,
      };
    case "ADD_PLANT":
      return {
        ...state.plants,
        plants: state.plants.concat(action.plant),
      };
    case "DELETE_PLANT":
      const updatedPlants = state.plants.filter(plant => plant.id !== action.id)
      return {
        ...state,
        plants: updatedPlants,
      };
    default:
      return state;
  }
};

export default plants;
