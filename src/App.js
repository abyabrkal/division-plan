import React from 'react';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render() {

    return (
      <BrowserRouter>
        <div className="ui container">
          <h3 className="header">
            Hello
          </h3>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
