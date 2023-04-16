import React from 'react';

const LeftConatainer = () => {
  return (
    <div className="m-6">
      <div className="bg-white/30 border rounded-md p-4 shadow-md backdrop-blur-xl h-96 w-96 my-4">
        <ul>
          <li className="border-2  p-2 m-2 rounded-md hover:bg-gray-100 cursor-move">Interview</li>
          <li className="border-2  p-2 m-2 rounded-md hover:bg-gray-100 cursor-move">Meeting</li>
          <li className="border-2  p-2 m-2 rounded-md hover:bg-gray-100 cursor-move">Lunch</li>
        </ul>
      </div>
    </div>
  );
};

export default LeftConatainer;
