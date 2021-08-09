import React from "react";
import { connect } from "react-redux";
import Plant from "./Plant";
import PlantForm from "./PlantForm";
import NoPlantWarning from "./NoPlantWarning";
import { ROOTURL } from "../../constants"; 

class Plants extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`${ROOTURL}/plants`, {
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
        {plantList.length > 0 ? (
          <div className="p-2 grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex flex-wrap justify-items-stretch">
            {plantList.map((plantInfo) => {
              return (
                <Plant
                  info={plantInfo.attributes}
                  key={plantInfo.id}
                  id={plantInfo.id}
                />
              );
            })}
          </div>
        ) : (
          <NoPlantWarning />
        )}
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
