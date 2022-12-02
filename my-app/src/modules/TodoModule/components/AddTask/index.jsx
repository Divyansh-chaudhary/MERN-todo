import React, { memo, useState } from 'react';
import { LOADING_TYPES } from '../../context/TodoContext';
import useTodoContext from '../../hooks/useTodoContext';
import PlusIcon from '../../icons/PlusIcon';

function AddTask() {
  const [input, setInput] = useState('');
  const {
    addTodo,
    loadings: { [LOADING_TYPES.ADD_TODO]: loader },
  } = useTodoContext();

  const addNewTodo = () => {
    if (input.trim() !== '') {
      addTodo(input);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addNewTodo();
    }
  };

  return (
    <div className="border-2 border-slate-700 rounded-2xl p-2 flex">
      <button
        type="button"
        disabled={false}
        onClick={addNewTodo}
        className="bg-red-300 rounded-xl p-1 w-7 h-7 flex items-center justify-center cursor-pointer disabled:cursor-not-allowed"
      >
        <PlusIcon />
      </button>
      <input
        onKeyDown={handleKeyDown}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="min-w-0 flex-1 px-3 bg-transparent outline-none border-none text-gray-300"
        type="text"
        placeholder="Add a Task"
      />
    </div>
  );
}

export default memo(AddTask);
