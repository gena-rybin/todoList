import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

export default class NavbarTop extends Component {
    state = {
        toAboutPage: false,
        toToDoPage: false,
    };

    render() {
        if (this.state.toAboutPage === true) {
            return <Redirect to='/about' />
        }
        if (this.state.toToDoPage === true) {
            return <Redirect to='/todo' />
        }

        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Note Manager</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active" onClick={this.doGoToTODOPage}>
                                <a href="#">ToDo task<span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                        {/*<form className="navbar-form navbar-left">*/}
                            {/*<div className="form-group">*/}
                                {/*<input type="text" className="form-control" placeholder="Search" />*/}
                            {/*</div>*/}
                            {/*<button type="submit" className="btn btn-default">Submit</button>*/}
                        {/*</form>*/}
                        <ul className="nav navbar-nav navbar-right">
                            <li onClick={this.doGoToAboutPage}><a href="#">About</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

    doGoToAboutPage = () => {
        this.setState({
            toAboutPage: true
        });
    };
    doGoToTODOPage = () => {
        this.setState({
            toToDoPage: true
        });
    }

}
