// Action Types
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
export const ADDINPUT_TODO = 'ADDINPUT_TODO';
export const DELETEINPUT_TODO='DELETEINPUT_TODO';
export const EDITINPUT_TODO='EDITINPUT_TODO'
// Action Creators
debugger
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const editTodo = (id, newText) => ({
  type: EDIT_TODO,
  payload: { id, newText },
});
export const updateInputValue = (id,inputvalue) => ({
  type: 'UPDATE_INPUT_VALUE',
  payload: {id , inputvalue},
});
export const addInputTodo = (text) => ({
  type: ADDINPUT_TODO,
  payload: { text },
});
export const deleteInputTodo = (id) => ({
  type: DELETEINPUT_TODO,
  payload: { id },
});
export const editInputTodo = (id,edittext) => ({
  type: EDITINPUT_TODO,
  payload: { id , edittext},
});

