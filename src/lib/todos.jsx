import { DragDropContext, Draggable } from "react-beautiful-dnd";
import Droppable from './droppable-strict';
export default function Todos() {
  const todos = [
    { id: "1", name: "make this app" },
    { id: "2", name: "this is another todo" },
  ];
  return (
    <div>
      hi
      <DragDropContext>
        <Droppable droppableId="todos">
          {(provided) => (
            <ul
              className="todos"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {provided.placeholder}
              {todos.map((todo, index) => (
                <Draggable draggableId={todo.id} key={todo.id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {todo.name}
                    </li>
                  )}
                </Draggable>
              ))}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
