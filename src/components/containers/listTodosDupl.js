import React, {Component} from 'react';
import {connect} from 'react-redux';

class ListTodosDuplicated extends Component {

    render() {
        return (
            <div>
                <h4>duplicated:</h4>
                {this.props.todos.map((todo) =>
                    <li key={todo.id}>
                        {todo.text}, (id {todo.id}), {todo.completed ? 'COMPLETED' : 'TO DO'}
                    </li>
                )}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(ListTodosDuplicated);
