import React from "react";
import HomeInput from "./HomeInput";

const CreateHomeForm = props => {
  return (
    <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
      <div className="mb-4">
        <HomeInput value="nickname" />
        <HomeInput value="city" />
        <HomeInput value="state" />
        <HomeInput value="country" />
      </div>
      <div className="mb-6 text-center">
        <button
          className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline"
          type="button"
        >
          Create new home
        </button>
      </div>
      <hr className="mb-6 border-t" />
      <div className="text-center">
        <a
          className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
          href="./register.html"
        >
          Create an Account!
        </a>
      </div>
      <div className="text-center">
        <a
          className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
          href="./index.html"
        >
          Already have an account? Login!
        </a>
      </div>
    </form>

  )
}

export default CreateHomeForm;

//TODO: dispatch user selection to backend to update home
