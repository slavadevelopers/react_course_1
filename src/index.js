import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

class App extends Component {

    static propTypes = {
        btnText: PropTypes.string.isRequired,
        mainTitle: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired,
        arrayApp: PropTypes.array.isRequired
    }

    static defaultProps = {
        btnText: 'Simply click me!'
    }

    consoleLog() {
        console.log('Boom');
    }

    render() {
        console.log('Props', this.props);
        return (
            <div style={ { backgroundColor: 'aliceblue' } }>
                <h1 className="app__main-title">{ this.props.mainTitle }</h1>
                <p className="app__paragraph">{ this.props.paragraph }</p>
                <button className="app__btn" onClick={ this.consoleLog }>{ this.props.btnText }</button>
            </div>
        );
    }
}

ReactDom.render(
    <App btnText="Click and look in console"
         mainTitle="This is App with React"
         paragraph="Yes, people, yes, it`s true, it`s app with react"
         arrayApp={ [1, 2, 3] }
    />,
    document.getElementById('app')
);