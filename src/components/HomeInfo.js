import React from "react";

const HomeInfo = ({ attributes, users }) => {
  return (
    <div>
      <h1>Your home:</h1>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full md:w-48" src="../../img/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="Stock photo of home with plants"/>
          </div>
          <div className="p-8">
            <a href="#" className="uppercase block mt-1 text-lg leading-tight font-medium text-green-800 hover:underline">{attributes.nickname}</a>
            <p className="mt-2 text-gray-500">Located in {attributes.city}, {attributes.state} {attributes.country}</p>
            <div className="tracking-wide text-sm text-gray-800 font-semibold">Occupants:</div>
            <ul>
              {users.map(user => <li className="mt-2 text-gray-500" key={user.id}>{user.name}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeInfo;
