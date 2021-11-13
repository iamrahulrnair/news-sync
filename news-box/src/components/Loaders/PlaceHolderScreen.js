import React from 'react';

export const renderPlaceHolder = new Array(16)
  .fill(
    <div className="border shadow rounded-md p-4  m-4">
      <div className="animate-pulse flex">
        <div className="rounded-full bg-gray-400 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-400 rounded"></div>
            <div className="h-4 bg-gray-400 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  )
  .map((el, ind) => {
    return <div className={ind}>{el}</div>;
  });
