import React from 'react';
import AddTask from './components/AddTask';
import Todos from './components/Todos';
import TodoContextProvider from './context/TodoContext';

function TodoModule() {
  return (
    <TodoContextProvider>
      <AddTask />
      <Todos />
    </TodoContextProvider>
  );
}

export default TodoModule;
