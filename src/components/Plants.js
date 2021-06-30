import React from "react";
import { connect } from "react-redux";
import Plant from "./Plant";

class Plants extends React.Component {
  componentDidMount() {
    //TODO: auto-login functionality
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3001/api/v1/plants", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((response) => {
          console.log("fetch response", response);
          this.props.dispatch({
            type: "SET_PLANTS",
            plants: response.data,
          });
        });
    }
  }

  render() {
    const plantList = this.props.plants;

    return (
      <div className="p-6 grid grid-flow-row grid-cols-3 grid-rows-3 gap-4 md:grid-rows-6 flex flex-wrap">
        {plantList &&
          plantList.map((plantInfo) => {
            return <Plant info={plantInfo.attributes} key={plantInfo.id} />;
          })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.currentUser.name,
    plants: state.plants,
  };
};

// const mapDispatchToProps = dispatch => {
//   return ({
//     updatePlantList: (plantList) => dispatch(updatePlantList(plantList))
//   })
// }

export default connect(mapStateToProps)(Plants);

//prev code
{
  /* <div className="p-6 grid grid-flow-row grid-cols-3 grid-rows-3 gap-4 md:grid-rows-6">
      <div className="p-6 rounded-xl shadow-md max-w-sm mx-auto">
        <p className="p-2">{props.userName}</p>
        <p className="p-2">{props.plants[0].common_name}</p>
        <p className="p-2">{props.plants[0].location}</p>
      </div>
    </div> */
}
