import React from 'react';
function Setting() {
  return (
    <div className="flex shadow-md rounded-lg bg-gray-300 mt-10 flex-col justify-center align-center items-center h-96">
      <div>
        <label>Change username:</label>
        <input type="text" placeholder="type here"></input>
      </div>
      <div>
        <label>Change name:</label>
        <input type="text" placeholder="type here"></input>
      </div>
      <div>
        <label>Type new password:</label>
        <input type="password" placeholder="type here"></input>
        <label>Confirm password:</label>
        <input type="password" placeholder="type here"></input>
      </div>
      <input type="file"></input>
    </div>
  );
}
export default Setting;
