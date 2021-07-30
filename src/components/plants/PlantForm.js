import React from "react";
import { connect } from "react-redux";
import createNewPlantFetch from "../../actions/createNewPlantFetch";

const selectOptions = [];

for (let i = 0; i < 29; i++) {
  let currValue = i === 0 ? "" : i;

  selectOptions.push(
    <option key={i} value={currValue}>
      {currValue}
    </option>
  );
}

class PlantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commonName: "",
      scientificName: "",
      location: "",
      wateringRate: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.sendPlants(this.state);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="container mx-auto px-6 object-left-top font-mono">
        <form onSubmit={this.handleSubmit}>
          <div className="min-h-screen flex flex-col justify-top justify-left md:py-8">
            <div className="bg-white shadow w-full rounded-lg">
              <h1 className="pl-5 pt-7 font-semibold text-lg text-gray-600 pb-1 block">
                Add a plant
              </h1>
              <div className="px-5 py-7">
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Common Name:
                </label>
                <input
                  type="text"
                  name="commonName"
                  value={this.state.commonName}
                  onChange={this.handleChange}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Scientific Name:
                </label>
                <input
                  type="text"
                  name="scientificName"
                  value={this.state.scientificName}
                  onChange={this.handleChange}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Water every blank days:
                  {/* TODO: refactor to have dropdown inline */}
                </label>
                <select
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  name="wateringRate"
                  value={this.state.wateringRate}
                  onChange={this.handleChange}
                >
                  {selectOptions}
                </select>
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Location in home:
                </label>
                <input
                  type="text"
                  name="location"
                  value={this.state.location}
                  onChange={this.handleChange}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
                <input
                  type="submit"
                  value="Create"
                  className="transition duration-200 bg-lime-400 hover:bg-green-500 focus:bg-green-600 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendPlants: (plantData) => dispatch(createNewPlantFetch(plantData)),
  };
};

export default connect(null, mapDispatchToProps)(PlantForm);
