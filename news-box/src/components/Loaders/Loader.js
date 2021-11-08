import React from 'react';
/*

import() is chunk loading operation,its async so,
 in-line css is better since it doesnt require a css to be loaded.
 
 */
const Loader = () => {
  return (
    <div
      className="_loader-container"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <p className="animate-pulse font-serif font-bold">Loading....</p>
    </div>
  );
};
export { Loader };
