// AnotherComponent.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addInputTodo, updateInputValue , deleteInputTodo,editInputTodo} from './actions'

const DisplayTodoList = () => {
    const input = useSelector(state => state.input);
    // const [updateId, setupdateId] = useState('');
  
    const dispatch = useDispatch();
    const handleDeleteTodo = (id) => {
        dispatch(deleteInputTodo(id));
    };

    const handleEditTodo = (id, newText) => {
        dispatch(editInputTodo(id, newText));
        // setupdateId(useSelector(state => state.updateId))
        // setupdateId(id);
    };
    console.log(input)
    return (
        <div>
            <h2>Added Data:</h2>
            <ul>
                
                {input.map((item, index) => (
                    <li key={index}>{item.text}
                      <button onClick={() => handleDeleteTodo(item.id)}>Delete</button>
                        <button onClick={() => handleEditTodo(item.id, item.text)}>Edit</button>
                        </li>
                ))}
            </ul>
        </div>
    );
};

// const mapStateToProps = state => ({
//     data: selectData(state.input)
// });

export default DisplayTodoList;