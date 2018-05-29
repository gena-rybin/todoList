import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {newToDoAction} from '../../actions';
import {connect} from 'react-redux';

class NewTodo extends Component {

    render() {
        let inputText;

        return (
            <div>
                <form onSubmit={() => {
                    if (!inputText.value.trim()) {return}
                    this.props.newToDoHandler(inputText.value);
                    inputText.value = '';}}>
                    <input ref={inputTag => {inputText=inputTag}}/>
                </form>
            </div>
        );

    }
}

// function mapStateToProps(state) {
//     return {
//         startingTodos: state.TodosReducer
//     }
// }

function mapDispatchToProps(dispatch) {
    return {
        newToDoHandler: bindActionCreators(newToDoAction, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(NewTodo);
