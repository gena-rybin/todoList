import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import ListTodos from '../../containers/listTodos';
import ListTodosDuplicated from '../../containers/listTodosDupl';
import NewTodo from '../../containers/new-todo';
import SelectedTodo from '../../containers/selected-todo';
import ListTodosDeleted from '../../containers/todos-deleted';
import FilterButtonsTodos from '../../containers/filterButtonsRedux';
import _SelectedTodosList from '../../containers/_SelectedTodosList';

import {connect} from "react-redux";

class TodoPage extends Component {
    state = {
        toMain: false,
    };

    render() {
        if (this.state.toMain === true) {
            return <Redirect to='/' />
        }

        let listTodosDuplicated = !!this.props.todos && !!this.props.todos.length && <ListTodosDuplicated />;
        const hr_listTodosDuplicated = !!this.props.todos && !!this.props.todos.length && <hr/>;

        return (
            <div className={'container'}>
                <button className="btn btn-info" onClick={this.doGoToMainPage}>back to main</button>
                <br/>

                <NewTodo />
                <ListTodos />

                <hr/>
                <_SelectedTodosList />

                <hr/>
                <FilterButtonsTodos />

                {hr_listTodosDuplicated}
                {listTodosDuplicated}

                <hr/>
                <h4>selected:</h4>
                <SelectedTodo />

                <hr/>
                <ListTodosDeleted />

            </div>
        );

    }

    doGoToMainPage = () => {
        this.setState({
            toMain: true
        });
    };

}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        todoSelected: state.todoSelected,
        // todoRemoved: state.todoRemoved
    }
}
export default connect(mapStateToProps)(TodoPage);

