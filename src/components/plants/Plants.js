import React from "react";
import { connect } from "react-redux";
import Plant from "./Plant";
import PlantForm from "./PlantForm";

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
      <div className="container max-w-6xl font-mono">
      <div className="p-2 grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex flex-wrap justify-items-stretch">
        {plantList &&
          plantList.map((plantInfo) => {
            return (
              <Plant
                info={plantInfo.attributes}
                key={plantInfo.id}
                id={plantInfo.id}
              />
            );
          })}
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.currentUser.name,
    plants: state.plants.plants,
  };
};

export default connect(mapStateToProps)(Plants);
