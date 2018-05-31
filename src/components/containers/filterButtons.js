import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {showActiveCompletedTodosAction} from '../../actions'  // new "state", because "reducer" is in separate file from todos.js and added in combineReducers

class FilterButtonsTodos extends Component {

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
                <button onClick={() => {
                    // this.handleClick;
                    console.log('show_active clicked');
                    this.props.showActiveCompletedTodos(this.props.todos, false)}}>
                    active
                </button>
                <button onClick={() => {
                    // this.handleClick;
                    console.log('show_active clicked');
                    this.props.showActiveCompletedTodos(this.props.todos, true)}}>
                    completed
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
        showActiveCompletedTodos: bindActionCreators(showActiveCompletedTodosAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterButtonsTodos);
