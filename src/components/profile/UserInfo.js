import React from "react";
import { connect } from "react-redux";
import CreateHomeForm from "./CreateHomeForm";

const UserInfo = ({ user }) => {
  console.log("user", user);
  return (
    <>
      <div className="px-8 mb-4 text-center">
        <h3 className="pt-4 mb-2 text-2xl">Welcome {user.name}</h3>
        <p className="mb-4 text-sm text-gray-700">Name: {user.name}</p>
        <p className="mb-4 text-sm text-gray-700">Email: {user.email}</p>
        <p className="mb-4 text-sm text-gray-700">Home: {user.home.nickname}</p>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.currentUser,
  };
};

export default connect(mapStateToProps)(UserInfo);
