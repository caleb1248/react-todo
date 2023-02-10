import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { Box, IconButton } from '@mui/material';
import Add from '@mui/icons-material/Add';
import Droppable from './droppable-strict';
import { useState } from 'react';
import Todo from './todo';

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBR3UXL4WTJGLQQqHEsOULC3M-azptms_8',
  authDomain: 'todobase-1.firebaseapp.com',
  projectId: 'todobase-1',
  storageBucket: 'todobase-1.appspot.com',
  messagingSenderId: '622496433907',
  appId: '1:622496433907:web:2c2c62f924fd6c7a93d986',
  measurementId: 'G-CS8ZZ4EDNK',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

async function signIn() {
  const provider = new GoogleAuthProvider();
  const { user } = await signInWithPopup(auth, provider);
}

class TodoObject {
  constructor() {
    this.id = Math.round(Math.random() * 1000).toString();
    this.name = 'Todo name';
  }

  onNameChange(newName) {
    this.name = newName;
  }
}

export default function Todos() {
  const _todos = [];

  const [todos, setTodos] = useState(_todos);
  function handleOnDragEnd(result) {
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items);
  }

  function handleDelete(todo) {
    const items = Array.from(todos);
    items.splice(items.indexOf(todo), 1);
    console.log(items);
    setTodos(items);
  }

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <Box
              className="todos"
              {...provided.droppableProps}
              ref={provided.innerRef}
              sx={{
                gap: '10px',
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
        sx={{ position: 'fixed', bottom: '1rem', right: '1rem' }}
        children={<Add />}
        onClick={() => setTodos([...todos, new TodoObject()])}
      />
    </>
  );
}
