import React from 'react';
import { Link } from 'react-router-dom';

import faker from 'faker/locale/en_IND';

import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from '@mui/icons-material/Settings';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

export default function Header({ isSignedIn, onSignOut }) {
  const signout = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };
  return (
    <nav className="flex backdrop-filter backdrop-blur-sm bg-gray-900 bg-opacity-50 flex-row sticky top-0 z-50  justify-between items-center h-20 w-full">
      <div className="mx-2">
        <Link to="/">
          <h1 className="text-5xl hover:text-white duration-200 ">NewSync</h1>
        </Link>
      </div>
      {isSignedIn && (
        <div className="flex justify-center items-center">
          <img
            className="rounded-full flex items-center justify-center"
            width="60px"
            src={faker.image.avatar()}
          ></img>
          <p className="ml-5 font-light antialiased">
            <span className="animate-pulse">Hey</span>,
            <span className="text-white"> {faker.name.findName()}</span>
          </p>
        </div>
      )}
      <div className="mx-16 flex">
        {isSignedIn && (
          <Link
            to="/settings"
            className="btn flex justify-evenly items-center mr-5"
          >
            <SettingsIcon />
            <span className="text-sm">Settings</span>
          </Link>
        )}

        <Link
          onClick={signout}
          to={isSignedIn ? '/' : '/auth/signin'}
          className="btn flex justify-evenly items-center"
        >
          {isSignedIn ? <MeetingRoomIcon /> : <LoginIcon />}
          <span className="text-sm">{isSignedIn ? 'Logout' : 'Login'}</span>
        </Link>
      </div>
    </nav>
  );
}
