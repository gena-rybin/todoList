export default function (state=[], action) {
    switch (action.type) {
        case 'DELETED_TODOS':
            console.log('reducer DELETED_TODO', state, action);
            console.log(state, action);
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: action.payload.completed
                }
            ];
        default: return state;
    }
}
