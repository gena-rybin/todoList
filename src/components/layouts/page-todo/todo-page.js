import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import ListTodos from '../../containers/listTodos';
import ListTodosDuplicated from '../../containers/listTodosDupl';
import NewTodo from '../../containers/new-todo';
import SelectedTodo from '../../containers/selected-todo';
import ListTodosDeleted from '../../containers/todos-deleted';

export default class TodoPage extends Component {
    state = {
        toMain: false,
    };


    render() {
        if (this.state.toMain === true) {
            return <Redirect to='/' />
        }

        return (
            <div className={'container'}>
                <button className="btn btn-info" onClick={this.doGoToMainPage}>back to main</button>
                <br/>

                <NewTodo />
                <ListTodos />

                <hr/>
                <ListTodosDuplicated />
                <hr/>
                <h4>selected:</h4>
                <SelectedTodo></SelectedTodo>

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
