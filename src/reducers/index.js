import { combineReducers } from 'redux';
import todos from './todos';
import todoClicked from './todo-clicked';
import todoRemoved from './todo-removed';

const todoApp = combineReducers({
    todos,
    todoClicked, // new "state", because "reducer" is in separate file from todos.js and added in combineReducers
    todoRemoved
});

export default todoApp
