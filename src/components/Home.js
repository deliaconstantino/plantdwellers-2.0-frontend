import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CalendarPopUp from "./CalendarPopUp";
import CalendarTileContent from "./CalendarTileContent";

class Home extends React.Component {
  state = {
    dates: {
      "Wed Jul 07 2021 00:00:00 GMT-0400 (Eastern Daylight Time)": [
        "cactus",
        "mango",
      ],
      "Thu Jul 08 2021 00:00:00 GMT-0400 (Eastern Daylight Time)": [
        "cactus",
        "pear",
      ],
      "Tue Jul 13 2021 00:00:00 GMT-0400 (Eastern Daylight Time)": [
        "aloe",
        "jade plant",
      ],
    },
    date: new Date(),
    showComponent: false,
    currentDate: ''
  };

  onClickDay = (value, event, date) => {
    console.log('in onClickDay')
    console.log('value', value);
    console.log("date", date);
    this.setState({
      ...this.state,
      showComponent: !this.state.showComponent,
      currentDate: value.toString()
    });
  };

  onChange = (date) => this.setState({ date });

  tileContent = ({ date, view }) => {
    if (this.state.dates.hasOwnProperty(date.toString())) {
      return (
        <CalendarTileContent
          date={date}
          plants={this.state.dates[date.toString()]}
        />
      );
    }
  };

  handleChange = (event) => {};

  render() {
    return (
      <div classname="container">
        <div className="flex flex-wrap">
          <Calendar
            onChange={this.handleChange}
            className={"container mx-auto px-4 italic text-green-600 bg-gray-300"}
            date={this.state.date}
            tileContent={this.tileContent}
            calendarType={"US"}
            onDrillDown={() => console.log("hi")}
            showNeighboringMonth={false}
            tileClassName={"text-blue-900"}
            onClickDay={this.onClickDay}
          />

          {this.state.showComponent ? <CalendarPopUp date={this.state.currentDate}/> : null}
        </div>
      </div>
    );
  }
}

export default Home;
