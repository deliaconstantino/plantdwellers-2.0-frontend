import React from "react";

const NoPlantNotice = () => {
  return (
    <div className="font-mono">
      <div className="container mx-auto">
        <div className="flex justify-center align-center">
          <div className="w-full lg:w-1/2 mt-10 p-5 border-box bg-white rounded-xl shadow-md rounded-lg">
            <div className="px-8 mb-4 text-center">
              <h3 className="pt-4 mb-2 text-2xl text-lime-800">
                You don't have any plants. Click{" "}
                <a className="underline" href="/plants/new">
                  here
                </a>{" "}
                to add a plant and start using the calendar!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoPlantNotice;
