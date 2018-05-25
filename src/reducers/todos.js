const STARTING_TODOS = [
    {
        id: 1,
        text: 'notify Idle',
        completed: false,
        selected: false
    },
    {
        id: 2,
        text: 'continue Redux-course',
        completed: false,
        selected: false
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
            console.log('state', state);
            console.log('action', action);
            return state.map(todo => {
                return Object.assign({}, todo, {selected: todo.id === action.payload.id});
            });
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        default: return state;
    }
}

