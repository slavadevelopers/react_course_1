import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: 'test'
        };
    }

    textChange(event) {
        const text = event.target.value;
        this.setState({
            text: text
        });
        console.log('textChange', text);
    }

    render() {
        return (
            <div style={ { backgroundColor: 'aliceblue' } }>
                <h1 className="app__main-title">What is State...</h1>
                <input type="text" value={ this.state.text } onChange={ this.textChange.bind(this) } />
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
);