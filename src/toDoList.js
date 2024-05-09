import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from './actions';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = (id, newText) => {
    dispatch(editTodo(id, newText));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            <button onClick={() => handleEditTodo(todo.id, 'Edited Text')}>Edit</button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddTodo('New Todo')}>Add Todo</button>
    </div>
  );
};

export default TodoList;
