import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {clickedTodoAction} from '../../actions'  // new "state", because "reducer" is in separate file from todos.js and added in combineReducers
import {selectedAction} from '../../actions'  // same "state" as in todos.js
import {deleteTodoAction} from '../../actions'
import {deletedTodosAction} from '../../actions'
import {toggleCompleteAction} from '../../actions'

class ListTodos extends Component {

    // componentDidMount() {
    //     ReactDOM.findDOMNode(this).addEventListener('click', (event) => {
    //         event.stopPropagation();
    //     }, false);
    // }

    handleClick = e => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        e.nativeEvent.stopImmediatePropagation();
    };

    render() {
        // let completedClass = todo.completed ? 'completed-todo' : 'not-completed-todo';
        // let selectedClass = todo.selected ? 'selected-todo' : false;
        return (
                <div>
                    {this.props.todos.map((todo, i, todos) =>
                            <li key={todo.id}
                                className={`${todo.completed ? 'completed-todo' : 'not-completed-todo'}
                                            ${todo.selected ? 'selected-todo' : false}`}
                                // style={{fontWeight: todo.selected ? 'bold' : 'inherit'}}
                                            // todo.selected ? 'selected' : ''}
                                onClick={() => {
                                                console.log('selection clicked');
                                                this.props.selected(todo);
                                                this.props.clickedTodo(todo);
                                                this.props.toggleCompleteTodo(todo);
                                }}
                            >
                                {todo.text}, (id {todo.id})
                                <button onClick={() => {
                                        this.handleClick;
                                        console.log('deletion clicked');
                                        this.props.deleteTodo(todo);
                                        this.props.deletedTodos(todo)}}>
                                    delete
                                </button>
                                {todo.completed ? 'COMPLETED' : 'TO DO'}
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
        clickedTodo: bindActionCreators(clickedTodoAction, dispatch),
        selected: bindActionCreators(selectedAction, dispatch),
        deleteTodo: bindActionCreators(deleteTodoAction, dispatch),
        deletedTodos: bindActionCreators(deletedTodosAction, dispatch),
        toggleCompleteTodo: bindActionCreators(toggleCompleteAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTodos);
