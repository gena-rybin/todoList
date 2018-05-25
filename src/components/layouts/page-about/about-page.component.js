import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";

export default class AboutPage extends Component {
    state = {
        toMain: false,
    };

    render() {
        if (this.state.toMain === true) {
            return <Redirect to='/' />
        }

        return (
            <div className={'container'}>
                <h1>About page</h1>
                <Link to="/">
                    <button className="btn btn-info">back to main</button>
                </Link>
                <button className="btn btn-info" onClick={this.doGoToMainPage}>back to main (P)</button>


            </div>
        );
    }

    doGoToMainPage = () => {
        this.setState({
            toMain: true
        });
    }

}
