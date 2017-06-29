import React, { Component } from 'react';
import ReactDom from 'react-dom';
import New from './new';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={ { backgroundColor: 'aliceblue' } }>
                <h1 className="app__main-title">What is State...</h1>
                <New textContent="It`s description new component"/>
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
);