export default function (state=[], action) {
    switch (action.type) {
        case 'SHOW_ACTIVE_TODOS':
            console.log(111, state);
            console.log(222, action);
            const filtered = action.todos.slice().filter(item => {
                return item.completed === action.filter
            });
            console.log(333, filtered);
            return filtered;
        default: return state;
    }
}

