import React from 'react';
import { Link } from 'react-router-dom';
function Setting() {
  return (
    <div className="flex  rounded-lg mt-10 flex-col justify-center align-start items-center h-96">
      <div className="flex flex-col  shadow-md p-5">
        <div className="h-2 bg-yellow-400 rounded-t-md "></div>
        <div className="flex justify-between m-2 items-center">
          <label className="mr-4">Change username:</label>
          <input
            className="border w-fill h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
            type="text"
            placeholder="type here"
          ></input>
        </div>
        <div className="flex justify-between m-2 items-center">
          <label>Change name:</label>
          <input
            className="border w-fill h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
            type="text"
            placeholder="type here"
          ></input>
        </div>
        <label>Type new password:</label>
        <input
          className="border w-fill h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
          type="password"
          placeholder="type here"
        ></input>
        <label>Confirm password:</label>
        <input
          className="border w-fill h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
          type="password"
          placeholder="type here"
        ></input>
        <div>
          <input className="mt-4" type="file"></input>
          <Link
            to="/"
            className="mt-4 bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600 mt-2"
          >
            Confirm
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Setting;
