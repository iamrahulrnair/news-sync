import React from 'react';

export default function SignIn() {
  return (
    <div className="relative py-3 sm:max-w-xl sm:max-auto text-grey-800 antialiased">
      <span className="text-2xl font-light">Login to you account</span>
      <div className="mt-4 bg-white shadow-md rounded-lg">
        <div className="h-2 bg-indigo-400 rounded-t-md"></div>
        <div className="px-8 py-6">
          <label className="block font-semi-bold">Username or Email</label>
          <input
            type="text"
            placeholder="type your name here"
            className="border w-fill h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
          ></input>
          <label className="block font-semi-bold">Password</label>
          <input
            type="password"
            className="border w-fill h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
          ></input>
          <div className="flex justify-between items-baseline">
            <button
              type="submit"
              className="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-md hover:bg-indigo-600"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
