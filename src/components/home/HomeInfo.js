import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import addHomeInfo from "../../actions/addHomeInfo.js";
import { ROOTURL } from "../../constants";
import Loading from "../Loading";
import { Avatar } from "./Avatar.js";

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
  }, [addHomeInfo, homeId]);

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  } else {
    return (
      <div className="flex flex-col lg:flex-row w-full">
        <div className="rounded-t lg:rounded-t-none lg:rounded-l lg:w-1/2 bg-cover">
          <img
            src="/img/kristina-delp-292bCjhyG7Y-unsplash.jpg"
            alt=""
            width="auto"
            height="100%"
          />
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal lg:w-1/2">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              Home Information
            </div>
            <ul>
              <li className="text-gray-700 text-base">City: {home.city}</li>
              <li className="text-gray-700 text-base">State: {home.state}</li>
              <li className="text-gray-700 text-base">
                Country: {home.country}
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              Roommates
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              {users && users.map((user) => <Avatar name={user.name} />)}
            </div>
          </div>
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
