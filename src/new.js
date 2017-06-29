import React, { Component } from 'react';

class New extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={ { backgroundColor: 'beige' } }>
                <h2 className="app__title">New component</h2>
            </div>
        );
    }
}

export default New;
