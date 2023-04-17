import React from 'react';

const RightContainer = () => {
  return (
    <div className="flex flex-col m-6">
      <div className="bg-white/30 border rounded-md p-4 shadow-md backdrop-blur-xl h-96 w-96 my-4">
        <ul>
          <li className="border-2  p-2 m-2 rounded-md hover:bg-gray-100 cursor-move">Interview</li>
          <li className="border-2  p-2 m-2 rounded-md hover:bg-gray-100 cursor-move">Meeting</li>
          <li className="border-2  p-2 m-2 rounded-md hover:bg-gray-100 cursor-move">Lunch</li>
        </ul>
      </div>
      <button type="button" className="p-2 bg-green-200 rounded-xl border">
        Save
      </button>
    </div>
  );
};

export default RightContainer;
