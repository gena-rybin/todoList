import React, {Component} from 'react';
import {connect} from 'react-redux';
import {todosDeleted} from '../../reducers/todos-deleted';

class ListTodosDeleted extends Component {

    render() {
        if (!(this.props.todosDeleted && this.props.todosDeleted.length)) {
            return (
                <div></div>
            )
        } else {
            return (
                <div>
                    <h4>deleted:</h4>
                    {this.props.todosDeleted.map((todo) =>
                        <li key={todo.id}>
                            {todo.text}, {todo.selected ? 1 : 2} ({todo.id})
                        </li>
                    )}
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        todosDeleted: state.todosDeleted
    }
}

export default connect(mapStateToProps)(ListTodosDeleted);
