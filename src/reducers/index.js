import { combineReducers } from 'redux';
import todos from './todos';
import todoSelected from './todo-selected';
import todoRemoved from './todo-removed';

const todoApp = combineReducers({
    todos,
    todoSelected, // new "state", because "reducer" is in separate file from todos.js and added in combineReducers
    todoRemoved
});

export default todoApp
