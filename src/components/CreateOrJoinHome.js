import React from "react";
import CreateHomeForm from "./CreateHomeForm";

const CreateOrJoinHome = props => {
  return (
    <>
      <div className="px-8 mb-4 text-center">
        <h3 className="pt-4 mb-2 text-2xl">Create or Join a Home:</h3>
        <p className="mb-4 text-sm text-gray-700">
          Find your home in the dropdown or add your information. We'll help you track plant care needs for your house!
        </p>
      </div>
      <CreateHomeForm />
    </>
  )
}

export default CreateOrJoinHome;
