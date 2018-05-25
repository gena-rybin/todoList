export default function (state={}, action) {
    switch (action.type) {
        case 'SELECTED_TODO':
            console.log('state', state);
            console.log('action', action);
            return action.payload;
        default: return state;
    }
}
