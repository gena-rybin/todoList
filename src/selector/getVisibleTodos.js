import { createSelector } from 'reselect'

const getTodos = (state) => {
    console.log(444444);
    console.log(state);
    state.todos;
};
const getVisibilityFilter = (state) => state.visibilityFilter;

const getVisibleTodos = (todos, visibilityFilter) => {
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed === true);
      case 'SHOW_ACTIVE':
        return todos.filter(t => t.completed === false)
    }
};

export default createSelector(
  getTodos,
  getVisibilityFilter,
  getVisibleTodos
);
