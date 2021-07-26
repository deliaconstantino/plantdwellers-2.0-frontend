import React from "react";

const HomeInput = ({ value }) => {
  return (
    <div className="py-2">
      <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
        {value.charAt(0).toUpperCase() + value.slice(1)}
      </label>
      <input
        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id={value}
        type="text"
        placeholder={`${value}...`}
      />
    </div>
  )
}

export default HomeInput;
