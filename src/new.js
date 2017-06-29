import React, { Component } from 'react';

class New extends Component {

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    renderItem(item) {
       return(
           <li key={ item.id }>{ item.text }</li>
       );
    }


    render() {
        return (
            <div style={ { backgroundColor: 'beige' } }>
                <h2 className="app__title">Title of new component</h2>
                <ul>
                    {this.props.array.map(this.renderItem.bind(this))}
                </ul>
            </div>
        );
    }
}

export default New;
