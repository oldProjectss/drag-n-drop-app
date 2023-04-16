import React from 'react';

type Props = {
  items: {
    id: 'string';
    name: 'string';
  };
};
const Table = ({ items }: Props) => {
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
            <td className="border-2  p-2">{items.id}</td>
            <td className="border-2  p-2">{items.name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
