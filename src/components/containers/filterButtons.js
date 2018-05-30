import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {showActiveTodosAction} from '../../actions'  // new "state", because "reducer" is in separate file from todos.js and added in combineReducers

class ListFilteredTodos extends Component {

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
        return (
            <div>
                <h4>filters:</h4>
                {this.props.todos.map((todo, i, todos) =>
                    <li key={todo.id}
                        className={todo.completed ? 'completed-todo' : 'not-completed-todo'}
                        style={{fontWeight: todo.selected ? 'bold' : 'inherit'}}
                        // todo.selected ? 'selected' : ''}
                        onClick={() => {
                            console.log('selection clicked');
                            this.props.selected(todo);
                            this.props.clickedTodo(todo);
                            this.props.toggleCompleteTodo(todo);
                        }}
                    >
                        {todo.selected ? '==> ' : false} {todo.text}, (id {todo.id})
                        {todo.completed ? 'COMPLETED' : 'TO DO'}
                    </li>
                )}
                <button onClick={() => {
                    this.handleClick;
                    console.log('show_active clicked');
                    this.props.showActiveTodos(false)}}>
                    active
                </button>

            </div>
        );

    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        // todoSelected: state.todoSelected,
        // todoRemoved: state.todoRemoved
    }
}

function mapDispatchToProps(dispatch) {
    return {
        showActiveTodos: bindActionCreators(showActiveTodosAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListFilteredTodos);
