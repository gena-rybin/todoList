const STARTING_TODOS = [
    {
        id: 1,
        text: 'notify Idle',
        completed: true,
        selected: false
    },
    {
        id: 2,
        text: 'continue Redux-course',
        completed: false,
        selected: true
    },
    {
        id: 3,
        text: 'continue React-course',
        completed: false,
        selected: false
    }
];

export default function (state=STARTING_TODOS, action) {
    switch (action.type) {
        case 'SELECTED':
            // console.log('SELECTED');
            // console.log('action', action);
            return state.slice().map(todo => {
                return Object.assign({}, todo, {selected: todo.id === action.payload.id});
            });
        case 'TOGGLE_COMPLETED':
            // console.log('TOGGLE_COMPLETED');
            // console.log('action', action);
            return state.map(todo => {
                return Object.assign({}, todo, {completed: (todo.id === action.payload.id) ? !action.payload.completed
                                                                                            : todo.completed});
            });
        case 'SHOW_TODOS':
            // console.log('SHOW_TODOS');
            return [
                ...state
            ];
        case 'ADD_TODO':
            return [
                ...state,
                action.payload
            ];
        // case 'SHOW_ACTIVE_TODOS':
        //     console.log(111, state);
        //     console.log(222, action);
        //     const filtered = action.todos.slice().filter(item => {
        //         return item.completed === action.filter
        //     });
        //     console.log(333, filtered);
        //     return filtered;
        case 'DELETE_TODO':
            // console.log('DELETE_TODO');
            // console.log(state.slice().filter(item => {
            //     return item.id !== action.payload.id
            // }));
            return state.slice().filter(item => {
                return item.id !== action.payload.id
            });
        default: return state;
    }
}

