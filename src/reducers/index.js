import { combineReducers } from 'redux';
import todos from './todos';
import todoClicked from './todo-clicked';
import todosDeleted from './todos-deleted';
import filters from './filters';
import setVisibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
    todos,
    todosDeleted,
    todoClicked, // new "state", because "reducer" is in separate file from todos.js and added in combineReducers
    filters,
    setVisibilityFilter
});

export default todoApp
