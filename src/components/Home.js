import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// function tileContent() {
//   // Add class to tiles in month view only
//   return <p>Sample</p>
// }

const onClickDay = (value, event) => {
  // alert("Clicked day: " + value.toString());
  console.log(value.toString())
};

const Home = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <Calendar
        className={"bg-gray-300"}
        onChange={setValue}
        value={value}
        // tileContent={({ date, view }) => <p>date</p>}
        onClickDay={onClickDay}
      />
      ;
    </div>
  );
};

export default Home;
