import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
// import SelectedTodosSelector from '../../selector/getVisibleTodos';
import {setVisibilityFilter} from "../../actions";


class FilterButtonsReselect extends Component {

    render() {
        // if (!this.props.todos) {
        //     return null;
        // }
        console.log('*** 333 from FilterButtonsReselect:');
        console.log(this);
        return (
            <div>
                <button onClick={() => {
                    this.props.setVisibilityFilter('SHOW_ALL')}}>
                    all
                </button>
                <button onClick={() => {
                    this.props.setVisibilityFilter('SHOW_ACTIVE')}}>
                    active
                </button>
                <button onClick={() => {
                    this.props.setVisibilityFilter('SHOW_COMPLETED')}}>
                    completed
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('*** 111 from FilterButtonsReselect:');
    console.log(state);
    return {
        // todos: SelectedTodosSelector(state),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setVisibilityFilter: bindActionCreators(setVisibilityFilter, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterButtonsReselect);
