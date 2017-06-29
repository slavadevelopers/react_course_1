import React, { Component } from 'react';
import ReactDom from 'react-dom';
import New from './new';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            array: [
                {
                    id: 1,
                    text: 'It`s item number 1'
                },
                {
                    id: 2,
                    text: 'It`s item number 2'
                },
                {
                    id: 3,
                    text: 'It`s item number 3'
                },
                {
                    id: 4,
                    text: 'It`s item number 4'
                },
                {
                    id: 5,
                    text: 'It`s item number 5'
                }
            ]
        }
    }



    render() {
        return (
            <div style={ { backgroundColor: 'aliceblue' } }>
                <h1 className="app__main-title">What is it...</h1>
                <New array={ this.state.array } />
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
);