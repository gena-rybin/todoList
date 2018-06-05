import React from 'react';
import {connect} from 'react-redux';
import SelectedTodosSelector from '../../selector/getVisibleTodos';

const ListTodosFilteredByReselect = (props) => {
    console.log('======================');
    console.log(props);
    return (
        <div>
            <h4>reselect WWW:</h4>
            {props.todos.map(todo =>
                <li key={todo.id}
                    className={`${todo.completed ? 'completed-todo' : 'not-completed-todo'}
                                ${todo.selected ? 'selected-todo' : false}`}
                >
                    {todo.text}, (id {todo.id})
                </li>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        todos: SelectedTodosSelector(state)
    };
};

export default connect(mapStateToProps)(ListTodosFilteredByReselect);
