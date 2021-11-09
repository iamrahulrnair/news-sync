import React from 'react';

export default function Header() {
  return (
    <nav className="flex flex-row  justify-between items-center h-20 bg-gray-400">
      <div className="mx-2">
        <h1 className="text-4xl">NewSync</h1>
      </div>
      <div className="mx-16">
        <button className="btn flex justify-evenly items-center">
          <img
            className="inline mx-1"
            width="20px"
            src="https://img.icons8.com/color/48/000000/google-logo.png"
          />
          Login
        </button>
      </div>
    </nav>
  );
}
