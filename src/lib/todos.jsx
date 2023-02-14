import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { Box, IconButton, Button } from "@mui/material";
import Add from "@mui/icons-material/Add";
import Droppable from "./droppable-strict";
import { useState } from "react";
import { signIn } from "./account";
import Todo from "./todo";
import { useEffect } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  function handleOnDragEnd(result) {
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items);
  }

  useEffect(() => {

  }, [todos]);

  let onUpdate = () => {};

  function handleDelete(todo) {
    const items = Array.from(todos);
    items.splice(items.indexOf(todo), 1);
    setTodos(items);
  }

  return (
    <>
      <Button
        onClick={() =>
          signIn().then(({ todos, update }) => {
            setTodos(todos);
            onUpdate = update;
          })
        }
      >
        Sign in
      </Button>
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
                      <Todo todo={todo} onDelete={() => handleDelete(todo)} />
                    </Box>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
      <IconButton
        sx={{ position: "fixed", bottom: "1rem", right: "1rem" }}
        children={<Add />}
        onClick={() => setTodos([...todos, {name: "Todo name", id:}])}
      />
    </>
  );
}
