import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'React Component',
    };
  }
  render() {
    return (
      <div>
        <h1>
          {this.state.header}
        </h1>
        <div>
                Welcome to a Componet Construction
        </div>
      </div>
    );
  }
}

export default App;
