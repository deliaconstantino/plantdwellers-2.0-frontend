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
          console.log("fetch response", response);
          this.props.dispatch({
            type: "SET_PLANTS",
            plants: response.data,
          });
        });
    }
  }

  render() {
    const plantList = this.props.plants.plants;
    console.log("plantList", plantList)
    return (
        <div className="p-2 grid grid-flow-row grid-cols-3 grid-rows-3 gap-4 md:grid-rows-6 flex flex-wrap">
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


export default connect(mapStateToProps)(Plants);
