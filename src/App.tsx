import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './assets/initial-data';
import Column from './components/Column';
import Table from './components/Table';

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
  const [items, setItems] = useState({});

  const onDragEnd = (result: { destination: any; source: any; draggableId: any; }) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    // Moving tasks within the same column
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
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
    }

    // Moving tasks to another column
    if (start !== finish) {
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...start,
        taskIds: startTaskIds,
      };

      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        taskIds: finishTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };

      setState(newState);
      return;
    }
  };

  const handleSave = () => {
    const { taskIds } = state.columns['column-2'];
    const items = taskIds.map((taskId) => state.tasks[taskId]);
    setItems(items);
    setState({ ...state, columns: { ...state.columns, 'column-2': { ...state.columns['column-2'], taskIds: [] } } });
  };

  return (
    <>
      <div className="text-center bg-gradient-to-br from-purple-200 to-purple-700 font-bold w-full flex flex-col justify-start items-center min-h-screen">
        <h1 className="mt-6 text-3xl">React TypeScript Drag and Drop App</h1>
        <p className="mt-4">Drag the inputs from the left to the right and click Save to add the items to the table</p>
        <div className="my-4 xl:w-2/3 flex flex-col xl:flex-row justify-center items-start">
          <DragDropContext onDragEnd={onDragEnd}>
            {state.columnOrder.map((columnId) => {
              const column = state.columns[columnId];
              const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
              return <Column key={column.id} column={column} tasks={tasks} columnId={''} />;
            })}
          </DragDropContext>
        </div>
        <div className="w-96 xl:w-3/6 flex flex-col justify-start xl:items-end">
          <button type="button" onClick={handleSave} className="xl:w-1/3 bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-xl">
            Save
          </button>
          <Table items={items} />
        </div>
      </div>
    </>
  );
};

export default App;
