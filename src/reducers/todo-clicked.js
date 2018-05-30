export default function (state={}, action) {
    switch (action.type) {
        case 'CLICKED_TODO':
            // console.log('state', state);
            // console.log('action', action);
            return action.payload;
        default: return state;
    }
}
