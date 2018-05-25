import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {selectedTodoAction} from '../../actions'  // new "state", because "reducer" is in separate file from todos.js and added in combineReducers
import {selectedAction} from '../../actions'  // same "state" as in todos.js
import {removedTodoAction} from '../../actions'

class ListTodos extends Component {

    // componentDidMount() {
    //     ReactDOM.findDOMNode(this).addEventListener('click', (event) => {
    //         event.stopPropagation();
    //     }, false);
    // }

    handleClick = e => {
        // e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        this.props.onClick();
    };

    render() {
        console.log('ListTodos');
        console.log(this.props.todos);
        console.log('todoSelected');
        console.log(this.props.todoSelected);


        return (
                <div>
                    {this.props.todos.map((todo, i, todos) =>
                            <li key={todo.id}
                                onClick={() => {
                                                this.props.selected(todo);
                                                this.props.selectedTodo(todo);
                                }}
                            >
                                {todo.text}, {todo.selected ? 1 : 2} ({todo.id})
                                <button onClick={() => {
                                        this.handleClick;
                                        this.props.removedTodo(todos, todo)}}>
                                    remove
                                </button>
                            </li>
                    )}
                </div>
        );

    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        todoSelected: state.todoSelected,
        // todoRemoved: state.todoRemoved
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectedTodo: bindActionCreators(selectedTodoAction, dispatch),
        selected: bindActionCreators(selectedAction, dispatch),
        removedTodo: bindActionCreators(removedTodoAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTodos);
