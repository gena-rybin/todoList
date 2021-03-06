// import STARTING_TODOS from '../reducers/todos';

let todoId = 10;
// let todoId = 10;

export function newToDoAction (text) {
    let newToDo = {
        type: 'ADD_TODO',
        payload: {
            id: ++todoId,
            text: text,
            completed: false,
            selected: false
        }
    };
    console.log('new todo - ', newToDo);
    return newToDo;
}

// same "state" as in todos.js
export function selectedAction(todo) {
    // console.log('action, NEW selected: ', todo);
    return {
        type: 'SELECTED',
        payload: todo
    }
}

// new "state", because "reducer" is in separate file from todos.js and added in combineReducers
export function clickedTodoAction(todo) {
    console.log('action, selected: ', todo);
    return {
        type: 'CLICKED_TODO',
        payload: todo
    }
}

export function toggleCompleteAction(todo) {
    // console.log('action, NEW selected: ', todo);
    return {
        type: 'TOGGLE_COMPLETED',
        payload: todo
    }
}

export function showActiveCompletedTodosAction(todos, filter) {
    console.log('showActiveTodosAction: ', filter);
    // console.log('removedTodoAction, todos: ', todos);
    return {
        type: 'SHOW_ACTIVE_TODOS',
        todos: todos,
        filter: filter
    }
}

export function deleteTodoAction(todo) {
    // console.log('removedTodoAction, todo to remove: ', todo);
    // console.log('removedTodoAction, todos: ', todos);
    return {
        type: 'DELETE_TODO',
        payload: todo
    }
}

export function deletedTodosAction(todo) {
    // console.log('removedTodoAction, todo to remove: ', todo);
    // console.log('removedTodoAction, todos: ', todos);
    return {
        type: 'DELETED_TODOS',
        payload: todo
    }
}

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

