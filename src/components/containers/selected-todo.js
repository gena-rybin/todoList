import React, {Component} from 'react';
import {connect} from 'react-redux';

class SelectedTodo extends Component {
    render() {
        // console.log('todoSelected');
        // console.log(this.props.todoSelected);
        if (this.props.todoSelected && this.props.todoSelected.text) {
            return (
                <li>{this.props.todoSelected.text}</li>
            )
        } else {
            return (
                <span>choose something...</span>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        todoSelected: state.todoSelected
    }
}


export default connect(mapStateToProps)(SelectedTodo);
