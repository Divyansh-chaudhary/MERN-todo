import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { TodoContext } from '../../context/TodoContext';
import useTodoContext from '../../hooks/useTodoContext';
import axios from '../../services/axios';
import Todo from '../Todo';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('/todo').then((res) => {
      setTodos(res.data);
    });
  }, []);

  const completedTasks = useMemo(
    () => todos.filter((item) => item.completed),
    [todos]
  );

  const pendingTasks = useMemo(
    () => todos.filter((item) => !item.completed),
    [todos]
  );

  const getTitle = useCallback((tasks) => {
    return (
      tasks.length > 0 && (
        <p className="text-gray-200 my-3 text-sm">
          {tasks[0].completed ? 'Completed' : 'Pending'} Tasks -{' '}
          {tasks.length < 10 ? `0${tasks.length}` : tasks.length}
        </p>
      )
    );
  }, []);

  const setCompleted = (id) => {
    axios.put('/todo/completed', { id }).then((res) => {
      setTodos((prev) => prev.filter(({ _id }) => id !== _id));
    });
  };
  const deleteTask = (id) => {
    axios.delete('/todo/delete', { data: { id } }).then(() => {
      setTodos((prev) => prev.filter(({ _id }) => id !== _id));
    });
  };

  const getList = useCallback(
    (tasks) => {
      return tasks.map((item) => (
        <Todo
          key={item._id}
          text={item.title}
          completed={item.completed}
          id={item._id}
          setCompleted={setCompleted}
          deleteTask={deleteTask}
        />
      ));
    },
    [deleteTask, setCompleted]
  );

  return (
    <article className="py-4">
      <div className="flex gap-3 flex-col">
        {getTitle(pendingTasks)}
        {getList(pendingTasks)}
        {getTitle(completedTasks)}
        {getList(completedTasks)}
      </div>
    </article>
  );
};

export default memo(Todos);
