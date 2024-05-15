import './App.css';
import TodoList from './toDoList';
import AddInput from './addInput';
import DisplayTodoList from './displaytodolist';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      
   
      <div>
      <p>
          Edit  and save to reload.
        </p>
        {/* <TodoList /> */}
        <AddInput/>
        <DisplayTodoList/>
      </div>

   
        
     
    </div>
    </Provider>
  );
}


export default App;
