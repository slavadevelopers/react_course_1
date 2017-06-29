import React, { Component } from 'react';
import ReactDom from 'react-dom';
import New from './new';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timer: 0
        }
    }

    componentWillMount() {
        setInterval(() => {
            this.setState({
                timer: this.state.timer + 1
            })
        }, 500)
    }

    render() {
        return (
            <div style={ { backgroundColor: 'aliceblue' } }>
                <h1 className="app__main-title">What is Lifecycle...</h1>
                <p className="app__paragraph">Look in console, wait 5 sec.</p>
                <p>{ this.state.timer }</p>
                { this.state.timer <= 10 ? <New textContent="It`s description new component"/> : null }
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
);