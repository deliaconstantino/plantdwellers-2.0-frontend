const plants = (state = {plants: []}, action) => {
  switch (action.type) {
    case 'SET_PLANTS':
      return {
        plants: action.plants
      }
    case 'ADD_PLANT':
      return {
        ...state.plants,
        plants: state.plants.concat(action.plant)
      }
    case "DELETE_PLANT":
      console.log("id in reducer", action.id)
      console.log(state.plants.length)
      const updatedPlants = state.plants.filter(plant => {
        if (plant.id !== action.id) {
          return plant
        }
      })
      console.log(updatedPlants.length)

    return {
      ...state,
      plants: updatedPlants
    }
    default:
      return state
  }
};

export default plants;
