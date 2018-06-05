export default function (state = 'SHOW_ALL', action) {
  console.log('*** from reducer:');
  console.log(action);
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};
