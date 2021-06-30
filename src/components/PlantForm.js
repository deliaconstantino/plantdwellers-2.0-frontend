import React from "react";

class PlantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commonName: "",
      scientificName: "",
      location: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("in submit");
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  render() {
    return (
      <div className="container mx-auto px-12 object-left-top">
        <form onSubmit={this.handleSubmit}>
          <div className="min-h-screen flex flex-col justify-top justify-left md:py-12">
            <div className="bg-white shadow w-full rounded-lg">
              <h1 className="pl-5 pt-7 font-semibold text-lg text-gray-600 pb-1 block">
                Add a plant
              </h1>
              <div className="px-5 py-7">
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Common Name
                </label>
                <input
                  type="text"
                  name="commonName"
                  value={this.state.commonName}
                  onChange={this.handleChange}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Scientific Name
                </label>
                <input
                  type="text"
                  name="scientificName"
                  value={this.state.scientificName}
                  onChange={this.handleChange}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Location
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
                  className="transition duration-200 bg-green-400 hover:bg-green-500 focus:bg-green-600 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PlantForm;
