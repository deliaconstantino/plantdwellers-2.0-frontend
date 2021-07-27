import React, { useState } from "react";
import CreateHomeForm from "./CreateHomeForm";
import JoinHomeForm from "./JoinHomeForm";

const CreateOrJoinHome = props => {
  const [showNewForm, setShowNewForm] = useState(false);
  const [showJoinForm, setShowJoinForm] = useState(false);

  const handleNewForm = event => {
    console.log('in handleNewForm')
    setShowNewForm(true)
    setShowJoinForm(false)
  }

  const handleJoinForm = event => {
    console.log('in handleJoinForm')
    setShowNewForm(false)
    setShowJoinForm(true)
  }
  return (
    <>
      <div className="px-8 mb-4 text-center">
        <h3 className="pt-4 mb-2 text-2xl">Create or Join a Home:</h3>
        <p className="mb-4 text-sm text-gray-700">
          Find your existing home in the app or add your information. We'll help you track plant care needs for your house!
        </p>
      </div>

      <div className="min-h-screen  justify-top sm:py-12">
        <button className="m-1.5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded max-w-xs" onClick={handleJoinForm}>Join Existing Home</button>
        <button className="m-1.5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded max-w-xs" onClick={handleNewForm}>Create New Home</button>
        { showNewForm && <CreateHomeForm /> }
        { showJoinForm && <JoinHomeForm/> }
      </div>

    </>
  )
}

export default CreateOrJoinHome;
