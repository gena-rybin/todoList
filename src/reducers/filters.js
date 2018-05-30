export default function (state=[], action) {
    switch (action.type) {
        case 'SHOW_ACTIVE_TODOS':
            console.log(111, state);
            const filtered = state.slice().filter(item => {
                return item.completed === action.payload
            });
            console.log(filtered);
            return filtered;
        default: return state;
    }
}

