import React from "react";
import HomeInfo from "./HomeInfo";

const HomeSidebar = ({ currentUser }) => {
  return (
    // <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
      <div>
        <HomeInfo currentUser={currentUser} />
        <div class="border-b">
          <div class="my-4 px-6">
            <h2 class="font-semibold text-2xl">Expense Tracker</h2>
          </div>
        </div>
        <div class="px-8 py-2">
          <h4 class="text-lg text-gray-500 font-thin">Your Balance</h4>
          <h4 class="text-2xl font-semibold">RM 430.00</h4>
        </div>
        <div class="flex space-x-0 flex-col lg:flex-row lg:space-x-2 my-2 px-6">
          <div class="bg-green-600 p-4 border-2 rounded-md shadow-lg  w-full text-white text-center">
            <h1 class="text-xl font-light">INCOME</h1>
            <h1 class="text-2xl text-green-100 font-semibold">RM 600.00</h1>
          </div>
          <div class="bg-red-600 p-4 border-2 rounded-md shadow-lg  w-full text-white text-center">
            <h1 class="text-xl font-light">EXPENSE</h1>
            <h1 class="text-2xl text-red-100 font-semibold">RM 170.00</h1>
          </div>
        </div>
        <div class="px-8 my-6">
          <div class="my-4 border-b w-full">
            <h2 class="font-semibold text-lg">History</h2>
          </div>
          <div class="ml-6 relative bg-white p-4 border-r-8 shadow-md my-4 flex justify-between border-green-500">
            <div class="absolute -left-6">
              <div class="cursor-pointer bg-red-600 p-2 w-6 flex items-center text-xs text-white justify-center">
                x
              </div>
            </div>
            <div>
              <p>My wallet</p>
            </div>
            <div>
              <p>RM +400</p>
            </div>
          </div>
          <div class="ml-6 relative bg-white p-4 border-r-8 shadow-md my-4 flex justify-between border-green-500">
            <div class="absolute -left-6">
              <div class="cursor-pointer bg-red-600 p-2 w-6 flex items-center text-xs text-white justify-center">
                x
              </div>
            </div>
            <div>
              <p>Deck</p>
            </div>
            <div>
              <p>RM +200</p>
            </div>
          </div>
          <div class="ml-6 relative bg-white p-4 border-r-8 shadow-md my-4 flex justify-between border-red-500">
            <div class="absolute -left-6">
              <div class="cursor-pointer bg-red-600 p-2 w-6 flex items-center text-xs text-white justify-center">
                x
              </div>
            </div>
            <div>
              <p>Wheel</p>
            </div>
            <div>
              <p>RM -170</p>
            </div>
          </div>
        </div>
        <div class="px-8 my-6">
          <div class="my-4 border-b w-full">
            <h2 class="font-semibold text-lg">Add new transaction</h2>
          </div>
          {/* start */}
          {/* <div class="bg-white p-4 border-2 rounded-md">
            <form class="mt-4">
              <div class="my-5 text-sm">
                <label htmlFor="text" class="block text-black">
                  Text
                </label>
                <input
                  type="text"
                  autoFocus
                  class="rounded-sm px-4 py-3 mt-1 focus:outline-none bg-gray-100 w-full"
                  placeholder="Enter Text"
                />
              </div>
              <div class="my-5 text-sm">
                <label htmlFor="amount" class="block text-black">
                  Amount
                  <small class="text-gray-600">
                    {" "}
                    (<span class="text-red-400"> negative-expense</span> ,
                    <span class="text-green-400"> positive-income</span>)
                  </small>
                </label>
                <input
                  type="number"
                  autoFocus
                  class="rounded-sm px-4 py-3 mt-1 focus:outline-none bg-gray-100 w-full"
                  placeholder="Enter Amount"
                />
              </div>
              <div class="my-5">
                <button class="rounded-sm block text-center text-white bg-gray-800 p-3 duration-300  hover:bg-black w-full">
                  Add Transaction
                </button>
              </div>
            </form>
          </div> */}
          {/* end */}
        </div>
      </div>
    // </div>
  );
};

export default HomeSidebar;
