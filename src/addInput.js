import React, { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { addInputTodo, updateInputValue , deleteInputTodo} from './actions'
// import { createRoot } from 'react-dom';
import { connect } from 'react-redux';

const AddInput = () => {
    const input = useSelector(state => state.input);
    // const [updateId, setupdateId] = useState('');
    // const [showAdd, setShowAdd] = useState(true);
    // const [showUpdate, setShowUpdate] = useState(false);
    const updateId = useSelector(state => state.updateId);
    const showAdd = useSelector(state => state.showAdd);
    const showUpdate = useSelector(state => state.showUpdate);
    const updatetext = useSelector(state => state.updatetext);
    useEffect(() => {
        setInputForm({ ...InputForm, inputvalue:updatetext});
    }, [updatetext])


   
    // console.log(input, 'input-123')
    const [InputForm, setInputForm] = useState({
        inputvalue: '',
    });
    // setInputForm({ ...InputForm, inputvalue:useSelector(state => state.updatetext)})
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setInputForm({ ...InputForm, [name]: value });
    };
    const dispatch = useDispatch();
    const handleAddTodo = (text) => {
        dispatch(addInputTodo(text));
        // addInputTodo(text);
        setInputForm({ ...InputForm, inputvalue: " " });
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteInputTodo(id));
    };

    // const handleEditTodo = (id, newText) => {
    //     // dispatch(editInputTodo(id, newText));
    //     setupdateId(id);
    //     setShowAdd(false);
    //     setShowUpdate(true)
    //     setInputForm({ ...InputForm, inputvalue:newText});
    // };
    const handleUpdateTodo=()=>{
        dispatch(updateInputValue(updateId,InputForm.inputvalue));
        setInputForm({ ...InputForm, inputvalue:''});
    }



    return (
        <div>
            <form >
                <div>
                    <input
                        type="text"
                        className="form-control"
                        name="inputvalue"
                        value={InputForm.inputvalue}
                        onChange={handleChange}
                    />
                    <div>
                   { showAdd ? (
                        <button type="button" onClick={() => handleAddTodo(InputForm.inputvalue)}>Add Todo</button>)
                        : ''}
                        {
                            showUpdate ? (
                                <button type="button" onClick={() => handleUpdateTodo()}>Update Todo</button>)
                                : ''}
                    </div>
                </div>

            </form>
            {/* <h1>Todo List</h1>
            <ul>
                {input.map(todo => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                        <button onClick={() => handleEditTodo(todo.id, todo.text)}>Edit</button>
                    </li>
                ))}
            </ul> */}
        </div>

    );
}


export default AddInput;
// export default connect(null, { addInputTodo })(AddInput);