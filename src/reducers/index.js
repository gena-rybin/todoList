import { combineReducers } from 'redux';
import todos from './todos';
import todoClicked from './todo-clicked';
import todosDeleted from './todos-deleted';

const todoApp = combineReducers({
    todos,
    todosDeleted,
    todoClicked // new "state", because "reducer" is in separate file from todos.js and added in combineReducers
});

export default todoApp
