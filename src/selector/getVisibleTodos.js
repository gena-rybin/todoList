import { createSelector } from 'reselect'

const getTodos = (state) => {
    // console.log('*** 222.1  from selector:');
    // console.log(state);
    return state.todos;
};
const getVisibilityFilter = (state) => {
    // console.log('*** 222.2  from selector:');
    // console.log(state);
    return state.visibilityFilter;
};

const getVisibleTodos = (todos, visibilityFilter) => {
    console.log('*** 444  from selector.getVisibleTodos:');
    console.log(todos, visibilityFilter);
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed === true);
      case 'SHOW_ACTIVE':
        return todos.filter(t => t.completed === false);
        default: return todos;
    }
};

export default createSelector(
  getTodos,
  getVisibilityFilter,
  getVisibleTodos
);
