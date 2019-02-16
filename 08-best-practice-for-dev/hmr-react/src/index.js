import { hot } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import library from './library';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>new title</div>
      </div>
    );
  }
}

const AppComponent = hot(module)(App);
const render = () => ReactDOM.render(<AppComponent />, document.body);

render();
