import React from 'react';
import PatternSelector from '../PatternSelector';
import ComparisonColumns from '../ComparisonColumns';
import './PatternComparisons.scss';

export default class PatternComparisons extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedPatterns: props.patterns
    };

    this.onSelectedPatternsChange = this.onSelectedPatternsChange.bind(this)
  }

  onSelectedPatternsChange(newPatternNames) {

    const newPatternsSelected = this.props.patterns.filter(pattern => (
      newPatternNames.find(newName => newName === pattern.name)
    ));

    this.setState({
      selectedPatterns: newPatternsSelected
    });
  }

  render() {
    const { patterns } = this.props;

    return (
      <div className='pattern-comparisons'>

      <h1 className='main-title'>Software Design Patterns</h1>

      <PatternSelector
        allPatterns={patterns}
        onPatternChange={this.onSelectedPatternsChange}
      />

      <ComparisonColumns patterns={this.state.selectedPatterns} />
      </div>
    );
  }
}
