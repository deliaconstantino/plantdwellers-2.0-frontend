import React from "react";
import WateringScheduleCalendar from "./calendar/WateringScheduleCalendar";

const CalendarContainer = (props) => {
  return (
    <div class="absolute inset-0 z-20 flex items-center justify-center h-full">
      <div class="flex justify-center h-full items-center ">
        <WateringScheduleCalendar />
        {/* <p class="text-white text-5xl lg:text-7xl">
          <span class="border-2 p-4 rounded-md" id="time"></span>
        </p> */}
      </div>
    </div>
  );
};

export default CalendarContainer;
