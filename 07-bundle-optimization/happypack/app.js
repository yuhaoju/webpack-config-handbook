import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>react-demo</h1>
                <ul>
                    <li><a href="https://facebook.github.io/react/docs/hello-world.html" target="_blank">Docs</a></li>
                    <li><a href="https://facebook.github.io/react/tutorial/tutorial.html" target="_blank">Tutorial</a></li>
                </ul>
            </div>
        );
    }
}

const render = () => ReactDOM.render(
    <App/>, document.getElementById('app')
);

render();
