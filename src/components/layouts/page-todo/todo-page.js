import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import ListTodos from '../../containers/listTodos';
import NewTodo from '../../containers/new-todo';
import SelectedTodo from '../../containers/selected-todo';

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
                <p>Todo Selected:</p>
                <SelectedTodo></SelectedTodo>

            </div>
        );

    }

    doGoToMainPage = () => {
        this.setState({
            toMain: true
        });
    };

}
