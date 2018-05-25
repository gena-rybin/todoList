import React, {Component} from 'react';
import {connect} from 'react-redux';

class ClickedTodo extends Component {
    render() {
        // console.log('todoSelected');
        // console.log(this.props.todoSelected);
        if (this.props.todoClicked && this.props.todoClicked.text) {
            return (
                <li>{this.props.todoClicked.text}</li>
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
        todoClicked: state.todoClicked
    }
}


export default connect(mapStateToProps)(ClickedTodo);
