import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ isSignedIn, onSignOut }) {
  const signout = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };
  return (
    <nav className="flex flex-row  justify-between items-center h-20 bg-gray-400">
      <div className="mx-2">
        <Link to="/">
          <h1 className="text-4xl">NewSync</h1>
        </Link>
      </div>
      <div className="mx-16">
        <Link
          onClick={signout}
          to={isSignedIn ? '/' : '/auth/signin'}
          className="btn flex justify-evenly items-center"
        >
          <img
            width="30px"
            src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-user-management-kiranshastry-gradient-kiranshastry-3.png"
          />
          {isSignedIn ? 'Logout' : 'Login'}
        </Link>
      </div>
    </nav>
  );
}
