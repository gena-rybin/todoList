export default function (state=[], action) {
    switch (action.type) {
        case 'REMOVE_TODO':
            console.log('reducer REMOVE_TODO state:', state);
            console.log('reducer REMOVE_TODO action:', action);
            return [
                action.todos.slice(0, action.todoSelected)
                // ...action.todos.slice(0, action.todoSelected),
                // ...action.todos.slice(action.todoSelected + 1)
            ];
        default: return state;
    }
}