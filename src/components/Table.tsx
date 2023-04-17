import React from 'react';

type Props = {
  items: {
    [key: string]: {
      id: null | string;
      content: null | string;
    };
  };
};
const Table = ({ items }: Props) => {
  return (
    <div className="w-full my-4">
      <h1 className="hidden">Table</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th className="border-2  p-2">ID</th>
            <th className="border-2  p-2">Value</th>
          </tr>
        </thead>
        <tbody className="border-2  p-2">
          {Object.values(items).map((item) => (
            <tr key={item.id}>
              <td className="border-2  p-2">{item.id}</td>
              <td className="border-2  p-2">{item.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
