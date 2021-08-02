import React from "react";
import HomeInfo from "./HomeInfo";

const HomeSidebar = ({ currentUser }) => {
  return (
    <div>
      <HomeInfo currentUser={currentUser} />
    </div>
  );
};

export default HomeSidebar;
