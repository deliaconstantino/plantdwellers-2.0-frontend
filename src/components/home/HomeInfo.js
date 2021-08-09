import React, { useState, useEffect } from "react";
import addHomeInfo from "../../actions/addHomeInfo.js";
import { connect } from "react-redux";
import Loading from "../Loading";
import { ROOTURL } from "../../constants";

const HomeInfo = ({ currentUser, users, addHomeInfo }) => {
  const [isLoading, setIsLoading] = useState(true);

  const homeId = currentUser.home.id;
  const home = currentUser.home;

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${ROOTURL}/homes/${homeId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        const homeInfo = {
          homeAttributes: resp.data,
          users: resp.included,
        };
        addHomeInfo(homeInfo);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  } else {
    return (
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
        <div>
          <p className="mt-2 text-lime-700 uppercase block mt-1 text-3xl">
            Your Home
          </p>
          <p className="mt-2 text-gray-500">City: {home.city}</p>
          <p className="mt-2 text-gray-500">State: {home.state}</p>
          <p className="mt-2 text-gray-500">Country: {home.country}</p>
          <br />
          <div className="tracking-wide text-md text-gray-800 font-bold">
            <p className="mt-2 text-gray-500">Occupants</p>
          </div>
          <ul>
            {users &&
              users.map((user) => (
                <li className="mt-2 text-gray-500" key={user.id}>
                  {user.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addHomeInfo: (home) => dispatch(addHomeInfo(home)),
  };
};

const mapStateToProps = (state) => {
  return {
    users: state.home.roommates,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeInfo);
