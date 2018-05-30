import { combineReducers } from 'redux';
import todos from './todos';
import todoClicked from './todo-clicked';
import todosDeleted from './todos-deleted';
import filters from './filters';

const todoApp = combineReducers({
    todos,
    todosDeleted,
    todoClicked, // new "state", because "reducer" is in separate file from todos.js and added in combineReducers
    filters
});

export default todoApp
