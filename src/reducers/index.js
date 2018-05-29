import { combineReducers } from 'redux';
import todos from './todos';
import todoClicked from './todo-clicked';

const todoApp = combineReducers({
    todos,
    todoClicked // new "state", because "reducer" is in separate file from todos.js and added in combineReducers
});

export default todoApp
