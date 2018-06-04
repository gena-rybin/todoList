import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import SelectedTodosSelector from '../../selector/getVisibleTodos';
import {
    clickedTodoAction,
    deletedTodosAction,
    deleteTodoAction,
    selectedAction,
    toggleCompleteAction
} from "../../actions";

class SelectedTodosList extends Component {

    render() {
        console.log(555);
        console.log(this);
        return (
            <div>
                {this.props.todos.map(todo => {
                    <li key={todo.id}
                        className={`${todo.completed ? 'completed-todo' : 'not-completed-todo'}
                                ${todo.selected ? 'selected-todo' : false}`}
                        // style={{fontWeight: todo.selected ? 'bold' : 'inherit'}}
                        // todo.selected ? 'selected' : ''}
                        // onClick={() => {
                        //     console.log('selection clicked');
                        //     this.props.selected(todo);
                        //     this.props.clickedTodo(todo);
                        //     this.props.toggleCompleteTodo(todo);
                        // }}
                    >
                        {todo.text}, (id {todo.id})
                        {/*<button onClick={() => {*/}
                        {/*this.handleClick;*/}
                        {/*console.log('deletion clicked');*/}
                        {/*this.props.deleteTodo(todo);*/}
                        {/*this.props.deletedTodos(todo)}}>*/}
                        {/*delete*/}
                        {/*</button>*/}
                        {/*{todo.completed ? 'COMPLETED' : 'TO DO'}*/}
                    </li>
                })}
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    console.log(777);
    console.log(state);
    return {
        todos: SelectedTodosSelector(state),
        // todoSelected: state.todoSelected,
        // todoRemoved: state.todoRemoved
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        clickedTodo: bindActionCreators(clickedTodoAction, dispatch),
        selected: bindActionCreators(selectedAction, dispatch),
        deleteTodo: bindActionCreators(deleteTodoAction, dispatch),
        deletedTodos: bindActionCreators(deletedTodosAction, dispatch),
        toggleCompleteTodo: bindActionCreators(toggleCompleteAction, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedTodosList);
