import React, { Component } from 'react';

class New extends Component {

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componenetDidMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        console.log('render');
        return (
            <div style={ { backgroundColor: 'beige' } }>
                <h2 className="app__title">Title of new component</h2>
                <p className="app__paragraph">{ this.props.textContent }</p>
            </div>
        );
    }
}

export default New;
