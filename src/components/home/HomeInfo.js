import React, { useState, useEffect } from "react";
import addHomeInfo from "../../actions/addHomeInfo.js";
import { connect } from "react-redux";
import Loading from "../Loading";

const HomeInfo = ({ currentUser, users, addHomeInfo, }) => {
  const [isLoading, setIsLoading] = useState(true);

  console.log(currentUser);
  const homeId = currentUser.home.id;
  console.log(homeId)
  const home = currentUser.home
  console.log(users)

  useEffect(() => {
    //refactor into action called 'getHousemates'
    const token = localStorage.getItem("token"); //TODO: make this a constant?
    fetch(`http://localhost:3001/api/v1/homes/${homeId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp)
        debugger;
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
      <div>
        <h1>Your home:</h1>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full md:w-48"
                src="../../img/house-157112_1280.png"
                alt="Stock photo of home with plants"
              />
            </div>
            <div className="p-8">
              <a
                href="#"
                className="uppercase block mt-1 text-lg leading-tight font-medium text-green-800 hover:underline"
              >
                {home.nickname}
              </a>
              <p className="mt-2 text-gray-500">
                Located in {home.city}, {home.state}{" "}
                {home.country}
              </p>
              <div className="tracking-wide text-sm text-gray-800 font-semibold">
                Occupants:
              </div>
              <ul>
                {users && users.map((user) => (
                  <li className="mt-2 text-gray-500" key={user.id}>
                    {user.name}
                  </li>
                ))}
              </ul>
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
