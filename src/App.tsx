import React, { useState } from 'react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import initialData from './assets/initial-data';
import Column from './components/Column';

interface Data {
  tasks: {
    [key: string]: {
      id: string;
      content: string;
    };
  };
  columns: {
    [key: string]: {
      id: string;
      title: string;
      taskIds: string[];
    };
  };
  columnOrder: string[];
}

const App = () => {
  const [state, setState] = useState<Data>(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const column = state.columns[source.droppableId];

    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newColumn.id]: newColumn,
      },
    };

    setState(newState);
    console.log(newState);
  };

  return (
    <>
      <div className="bg-gradient-to-br from-orange-200 to-black font-bold w-full flex flex-col justify-start items-center min-h-screen">
        <h1 className="my-4 text-3xl">React TypeScript Drag and Drop App</h1>
        <p>Drag the inputs from the left to the right and click Save to add the items to the table</p>
        <div className="xl:w-2/3 flex flex-col xl:flex-row justify-center items-start">
          <DragDropContext onDragEnd={onDragEnd}>
            {state.columnOrder.map((columnId) => {
              const column = state.columns[columnId];
              const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
              return <Column key={column.id} column={column} tasks={tasks} />;
            })}
          </DragDropContext>
        </div>
      </div>
    </>
  );
};

export default App;
