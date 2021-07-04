import React from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import CalendarPopUp from "./CalendarPopUp";
import CalendarTileContent from "./CalendarTileContent";

class Home extends React.Component {
  state = {
    dates: {
      // "Wed Jul 07 2021 00:00:00 GMT-0400 (Eastern Daylight Time)": {
      "2021-07-07T04:00:00.000Z": {
        complete: true,
        plants: [
          "cactus",
          "mango",
        ]
      }
      ,
      // "Thu Jul 08 2021 00:00:00 GMT-0400 (Eastern Daylight Time)": {
      "2021-07-08T04:00:00.000Z": {
        complete: false,
        plants: [
          "cactus",
          "pear",
        ]
      },
      // "Tue Jul 13 2021 00:00:00 GMT-0400 (Eastern Daylight Time)": {
      "2021-07-13T04:00:00.000Z": {
        complete: false,
        plants: [
          "aloe",
          "jade plant",
        ]
      }
    },
    date: new Date(),
    showComponent: false,
    currentDate: "",
    currentPlants: [],
  };

  onClickDay = (value, event) => {
    console.log("in onClickDay");
    console.log("value", value);
    console.log("from dates:", this.state.dates[value]);

    if (this.state.dates.hasOwnProperty(value.toISOString())) {
      this.setState({
        ...this.state,
        showComponent: true,
        currentDate: value.toISOString(),
        currentPlants: this.state.dates[value.toISOString()].plants,
      });
    }
  };

  closePopUp = () => {
    this.setState({
      ...this.state,
      showComponent: false,
      currentDate: "",
      currentPlants: [],
    })
  }

  onChange = (date) => this.setState({ date });

  tileContent = ({ date, view }) => {
    if (this.state.dates.hasOwnProperty(date.toISOString())) {
      return (
        <CalendarTileContent
          date={date}
          complete={this.state.dates[date.toISOString()].complete}
        />
      );
    }
  };

  handleChange = (event) => {};

  render() {
    return (
      <div className="container">
        <div className="flex flex-wrap">
          <Calendar
            onChange={this.handleChange}
            className={
              "container mx-auto px-4 italic text-green-600 bg-gray-300"
            }
            date={this.state.date}
            tileContent={this.tileContent}
            calendarType={"US"}
            onDrillDown={() => console.log("hi")}
            showNeighboringMonth={false}
            tileClassName={"text-blue-900"}
            onClickDay={this.onClickDay}
          />

          {this.state.showComponent ? (
            <CalendarPopUp
              date={this.state.currentDate}
              plants={this.state.currentPlants}
              closePopUp={this.closePopUp}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Home;
