import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import ReactDom from 'react-dom';
import New from './new';
import createBrowserHistory from 'history/createBrowserHistory'

const newHistory = createBrowserHistory();

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={ { backgroundColor: 'aliceblue' } }>
                <h1 className="app__main-title">App component</h1>
            </div>
        );
    }
}

ReactDom.render(
    <Router history={newHistory}>
        <div>
            <Route path={'/'} component={ App } />
            <Route path={'/new'} component={ New } />
        </div>
    </Router>,
    document.getElementById('app')
);