import React, {Component} from 'react';
import {Link} from "react-router-dom";


export default class NotFoundPage extends Component {

    render() {
        return (
            <div className={'container'}>
                <h1>Not Found page</h1>
                <Link to="/">
                    <button className="btn btn-info" onClick={this.doGoToMainPage}>back to main</button>
                </Link>

            </div>
        );
    }

    doGoToMainPage() {
        // alert('goto');
    }

}
