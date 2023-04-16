import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

type Props = {
  columnId: string;
  column: {
    id: string;
    title: string;
    taskIds: Array<string>;
  };
  tasks: {
    id: string;
    content: string;
  }[];
};
const Column = ({ columnId, column, tasks }: Props) => {
  return (
    <div key={column.id} className="bg-white/30 border rounded-md p-4 shadow-md h-96 w-96 my-4">
      <h2>{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <ul ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <Draggable key={index} draggableId={task.id} index={index}>
                {(provided) => (
                  <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="border-2 p-2 m-2 rounded-md active:bg-gray-100 bg-gray-200/70 cursor-move">
                    {task.content}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
