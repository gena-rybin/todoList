import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactRouterDOM from "react-router-dom";

import App from './components/app';
import AboutPage from "./components/layouts/page-about/about-page.component";
import NotFoundPage from "./components/layouts/page-not-found/not-found-page.component";
import TodoPage from "./components/layouts/page-todo/todo-page";
import {createStore} from "redux";
import todoApp from "./reducers";
import {Provider} from "react-redux";

import './styles.css';

const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;

const store = createStore(todoApp);

ReactDOM.render(
    // <App />, document.getElementById('root')

    // <Router>
    //     <Switch>
    //         <Route exact path="/" component={App} />
    //         <Route exact path="/todo" component={TodoPage} />
    //         <Route exact path="/about" component={AboutPage} />
    //         <Route component={NotFoundPage} />
    //     </Switch>
    // </Router>,
    // document.getElementById('root')

    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/todo" component={TodoPage} />
                <Route exact path="/about" component={AboutPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

