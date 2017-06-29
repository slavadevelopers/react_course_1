import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1 className="app__main-title">This is App with React</h1>
                <p className="app__paragraph">Yes, people, yes, it`s true, it`s app with react</p>
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
);