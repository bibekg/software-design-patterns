import React from 'react';
import PatternSelector from '../PatternSelector';
import ComparisonColumns from '../ComparisonColumns';
import './PatternComparisons.scss';

export default class PatternComparisons extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedPatterns: this.groupPatterns(props.patterns)
    };

    this.onSelectedPatternsChange = this.onSelectedPatternsChange.bind(this)
  }

  groupPatterns(patterns) {
    const groupedPatterns = patterns.slice();

    groupedPatterns.sort((patternA, patternB) => {
      if (patternA.type < patternB.type) { return -1; }
      if (patternA.type > patternB.type) { return 1; }
      return 0;
    });

    return groupedPatterns;
  }

  onSelectedPatternsChange(newPatternNames) {

    const newPatternsSelected = this.props.patterns.filter(pattern => (
      newPatternNames.find(newName => newName === pattern.name)
    ));

    this.setState({
      selectedPatterns: this.groupPatterns(newPatternsSelected)
    });
  }

  render() {

    return (
      <div className='pattern-comparisons'>

      <h1 className='main-title'>Software Design Patterns</h1>

      <PatternSelector
        allPatterns={this.groupPatterns(this.props.patterns)}
        onPatternChange={this.onSelectedPatternsChange}
      />

      <ComparisonColumns patterns={this.state.selectedPatterns} />
      </div>
    );
  }
}
