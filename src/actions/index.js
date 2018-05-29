// import STARTING_TODOS from '../reducers/todos';

let todoId = 10;
// let todoId = 10;

export function newToDoAction (text) {
    let newToDo = {
        type: 'ADD_TODO',
        id: ++todoId,
        text: text
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

export function removedTodoAction(todo) {
    // console.log('removedTodoAction, todo to remove: ', todo);
    // console.log('removedTodoAction, todos: ', todos);
    return {
        type: 'REMOVE_TODO',
        payload: todo
    }
}
