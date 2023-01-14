import React from "react";
import { connect } from "react-redux";
import { ROOTURL } from "../../constants";
import NoPlantNotice from "./NoPlantNotice";
import { Plant } from "./Plant";

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
      <div className="p-8 container max-w-6xl font-mono">
        <h1>Your Plants</h1>
        {plantList.length > 0 ? (
          <div className="pt-8 grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap justify-items-stretch">
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
          <NoPlantNotice />
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
