import React from 'react';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from '@mui/icons-material/Settings';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import CloseIcon from '@mui/icons-material/Close';

export default function SideBar({ show, setShow, isSignedIn, onSignOut }) {
  const signout = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };
  return (
    <div className={show ? 'side-bar active' : 'side-bar'}>
      <button onClick={() => setShow(false)}>
        <CloseIcon />
      </button>
      <ul>
        <li>login</li>
        <li>home</li>
        <li>about</li>
        <li>settings</li>
        <li>clear</li>
      </ul>
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
    </div>
  );
}
