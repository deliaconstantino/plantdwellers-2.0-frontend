import React from "react";
import HomeInfo from "./HomeInfo";

const HomeSidebar = ({ currentUser }) => {
  return (
    // <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
      <div>
        <HomeInfo currentUser={currentUser} />

      </div>
    // </div>
  );
};

export default HomeSidebar;
