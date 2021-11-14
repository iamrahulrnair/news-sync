import React from 'react';
import { Link } from 'react-router-dom';

export default function SignIn({ onSignin }) {
  return (
    <div className="flex justify-center align-center items-center">
      <div className="relative py-3 w-96 sm:max-auto text-grey-800 antialiased text-center ">
        <span className="text-2xl font-light">Login to you account</span>
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="h-2 bg-yellow-400 rounded-t-md "></div>

          <div className="px-8 py-6">
            <label className="block font-semi-bold">Username or Email</label>
            <input
              type="text"
              placeholder="type here"
              className="border w-fill h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
            ></input>
            <label className="block font-semi-bold">Password</label>
            <input
              type="password"
              className="border w-fill h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"
            ></input>
            <div className="flex justify-between items-baseline">
              <Link
                to="/"
                onClick={() => {
                  onSignin();
                }}
                type="submit"
                className="mt-4 bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600"
              >
                Login
              </Link>
              <Link
                to="/auth/signup"
                className="text-sm hover:underline cursor-pointer"
              >
                new user?
              </Link>
              <p className="text-sm hover:underline cursor-pointer">
                forgot password?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
