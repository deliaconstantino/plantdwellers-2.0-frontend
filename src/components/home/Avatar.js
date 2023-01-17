import React from "react";

const getFirstInitial = (name) => {
  return name.slice(0, 1).toUpperCase();
};

const avatarColors = [
  "bg-green-100",
  "bg-red-100",
  "bg-orange-100",
  "bg-amber-100",
  "bg-lime-100",
  "bg-cyan-100",
  "bg-indigo-100",
];

const getRandomAvatarColor = () => {
  return avatarColors[Math.floor(Math.random() * avatarColors.length)];
};

export const Avatar = ({ name }) => {
  const initial = getFirstInitial(name);
  const color = getRandomAvatarColor();

  return (
    <div className="flex items-center space-x-2">
      <div
        className={`relative inline-flex items-center justify-center w-10 h-10 overflow-hidden ${color} rounded-full dark:bg-gray-600`}
      >
        <span className="font-medium text-gray-600 dark:text-gray-300">
          {initial}
        </span>
      </div>
      <div className="font-medium dark:text-white">
        <div>{name}</div>
      </div>
    </div>
  );
};
