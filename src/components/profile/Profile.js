import React from "react";
import { connect } from "react-redux";
import CreateOrJoinHome from "./CreateOrJoinHome";
import UserInfo from "./UserInfo";

const Profile = ({ currentUser }) => {
  return (
    <div className="font-mono profileBg px-3">
      <div className="container mx-auto">
        <div className="flex justify-center align-center">
          <div className="w-full lg:w-1/2 mt-10 p-5 border-box bg-white rounded-xl shadow-md">
            {currentUser.home.nickname ? <UserInfo /> : <CreateOrJoinHome />}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(Profile);
