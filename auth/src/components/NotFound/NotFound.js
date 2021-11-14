import React from 'react';
import Image from '../../asset/NotfoundBro.png';

export default function NotFound() {
  return (
    <div className="error-container">
      <h1 className="error-heading text-8xl">NotFound 404</h1>
      <img className="error-image" src={Image}></img>
    </div>
  );
}
// TODO: animation for buddha up and down ppbly
