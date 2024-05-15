import { ADD_TODO, DELETE_TODO, EDIT_TODO, UPDATE_INPUT_VALUE, ADDINPUT_TODO ,DELETEINPUT_TODO,EDITINPUT_TODO} from './actions';

const initialState = {
  todos: [],
  input:[],
  updateId:'',
  showAdd:true,
  showUpdate:false,
  updatetext:''
 
};

const todoReducer = (state = initialState, action) => {
  debugger
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload.text }],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, text: action.payload.newText } : todo
        ),
      };
      case DELETEINPUT_TODO:
        return {
          ...state,
          input: state.input.filter(todo => todo.id !== action.payload.id),
        };
      case ADDINPUT_TODO:
        return {
          ...state,
          input: [...state.input, { id: Date.now(), text: action.payload.text }],
        };
        case EDITINPUT_TODO:
          return {
            ...state,
            // input: [...state.input, { id:action.payload.id, text: action.payload.edittext }],
            showAdd:false,
            showUpdate:true,
            updateId:action.payload.id,
            updatetext:action.payload.edittext

        }
      case UPDATE_INPUT_VALUE:
      return {
        ...state,
        input: state.input.map(input =>
          input.id === action.payload.id ? { ...input, text: action.payload.inputvalue } : input
        ),
      };
    default:
      return state;
  }
};


export default todoReducer;
