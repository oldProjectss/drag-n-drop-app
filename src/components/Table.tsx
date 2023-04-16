import React from 'react';

const Table = () => {
  return (
    <div className="w-3/6 my-4">
      <h1 className="hidden">Table</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th className="border-2  p-2">ID</th>
            <th className="border-2  p-2">Value</th>
          </tr>
        </thead>
        <tbody className="border-2  p-2">
          <tr>
            <td className="border-2  p-2">101</td>
            <td className="border-2  p-2">Interview</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
