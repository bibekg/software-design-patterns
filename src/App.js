import React, { Component } from 'react';
import patternsData from './data/patterns-data';
import PatternComparisons from './components/PatternComparisons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PatternComparisons patterns={patternsData} />
      </div>
    );
  }
}

export default App;
