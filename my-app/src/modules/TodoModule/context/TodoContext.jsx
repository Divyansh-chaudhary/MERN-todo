import React, { createContext, useCallback, useEffect, useState } from 'react';
import axios from '../services/axios';

export const TodoContext = createContext();

export const LOADING_TYPES = {
  ADD_TODO: 'addTodo',
};

function TodoContextProvider({ children }) {
  const [state, setState] = useState({
    todos: [],
    loadings: {
      [LOADING_TYPES.ADD_TODO]: false,
    },
  });

  const setLoading = useCallback(
    (loadingType, status) =>
      setState((prev) => ({
        ...prev,
        loadings: { ...prev.loadings, [loadingType]: status },
      })),
    []
  );

  useEffect(() => {
    axios.get('/todo').then((res) => {
      setState((prev) => ({ ...prev, todos: res.data }));
    });
  }, []);

  const addTodo = useCallback(async (title) => {
    setLoading(LOADING_TYPES.ADD_TODO, true);

    try {
      const res = await axios.post('/todo/create', { title });
      setState((prev) => ({ ...prev, todos: [...prev.todos, res] }));
    } catch (error) {
    } finally {
      setLoading(LOADING_TYPES, false);
    }
  }, []);

  console.log('context', state.todos);

  return (
    <TodoContext.Provider value={{ ...state, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
