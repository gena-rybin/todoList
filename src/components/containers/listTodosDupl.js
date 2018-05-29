import React, {Component} from 'react';
import {connect} from 'react-redux';

class ListTodosDuplicated extends Component {

    render() {
        return (
            <div>
                <h4>duplicated:</h4>
                {this.props.todos.map((todo) =>
                    <li key={todo.id}>
                        {todo.text}, {todo.selected ? 1 : 2} ({todo.id})
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
