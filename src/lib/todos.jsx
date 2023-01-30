import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { Box } from "@mui/material";
import Droppable from "./droppable-strict";
import { useState } from "react";
import Todo from "./todo";

class TodoObject {
  constructor() {
    this.id = Math.round(Math.random() * 1000).toString();
    this.name = "Todo name";
  }

  onNameChange(newName) {
    this.name = newName;
  }
}

export default function Todos() {
  const _todos = [new TodoObject(), Object.assign(new TodoObject(), {name: "ur mom"})];

  const [todos, setTodos] = useState(_todos);
  function handleOnDragEnd(result) {
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="todos">
        {(provided) => (
          <Box
            className="todos"
            {...provided.droppableProps}
            ref={provided.innerRef}
            sx={{
              gap: "10px",
            }}
          >
            {todos.map((todo, index) => (
              <Draggable draggableId={todo.id} key={todo.id} index={index}>
                {(provided) => (
                  <Box
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Todo todo={todo} />
                  </Box>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
}
