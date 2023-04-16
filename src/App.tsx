import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Table from './components/Table';
import LeftConatainer from './components/LeftConatainer';
import RightContainer from './components/RightContainer';

const App = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-orange-200 to-black font-bold w-full flex flex-col justify-start items-center min-h-screen">
        <h1 className="my-4 text-3xl">React TypeScript Drag and Drop App</h1>
        <p>Drag the inputs from the left to the right and click Save to add the items to the table</p>
        <div className="w-2/3 flex justify-center items-start">
          <LeftConatainer />
          <RightContainer />
        </div>
        <Table />
      </div>
    </>
  );
};

export default App;
