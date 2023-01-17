import React from "react";

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);

const ChevronUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="2.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M4.5 15.75l7.5-7.5 7.5 7.5"
    />
  </svg>
);

export const ShowMore = ({ showDescription, handleDescriptionClick }) => {
  return (
    <div className="flex gap-2">
      <div className="text-black flex items-center">See More</div>
      <button
        onClick={handleDescriptionClick}
        className="bg-gray-200 hover:bg-gray-600 rounded-full px-2"
      >
        {showDescription ? <ChevronUp /> : <ChevronDown />}
      </button>
    </div>
  );
};
