import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {

    consoleLog() {
        console.log('Boom');
    }

    render() {
        return (
            <div style={ { backgroundColor: 'aliceblue' } }>
                <h1 className="app__main-title">This is App with React</h1>
                <p className="app__paragraph">Yes, people, yes, it`s true, it`s app with react</p>
                <button className="app__btn" onClick={ this.consoleLog }>{ this.props.children }</button>
            </div>
        );
    }
}

ReactDom.render(
    <App>Click and look in console</App>,
    document.getElementById('app')
);