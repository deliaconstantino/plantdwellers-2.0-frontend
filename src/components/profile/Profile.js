import React from "react";
import CreateOrJoinHome from "./CreateOrJoinHome";
import UserInfo from "./UserInfo";
import { connect } from "react-redux";

const Profile = ({ currentUser }) => {
  return (
    <div className="font-mono">
      <div className="container mx-auto">
        <div className="flex justify-center align-center">
          <div className="w-full lg:w-1/2 mt-10 p-5 border-box bg-white rounded-xl shadow-md rounded-lg">
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
