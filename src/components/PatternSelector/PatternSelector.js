import React from 'react';
import PatternOption from '../PatternOption';
import { PATTERN_TYPES } from '../../data/patterns-data';
import './PatternSelector.scss';

export default class PatternSelector extends React.Component {

  constructor(props) {
    super(props);

    const selectedPatterns = {};
    props.allPatterns.forEach(pattern => {
      selectedPatterns[pattern.name] = true
    });

    this.state = selectedPatterns;

    this.togglePatternSelection = this.togglePatternSelection.bind(this);
  }

  togglePatternSelection(patternName) {
    const update = {};
    update[patternName] = !this.state[patternName];
    const nextState = Object.assign({}, this.state, update);
    this.setState(nextState);
    const newSelectedPatterns = Object.keys(nextState)
      .filter(pattern => nextState[pattern]);
    this.props.onPatternChange(newSelectedPatterns);
  }

  render() {
    const { allPatterns } = this.props;

    const patternsByType = {};
    patternsByType[PATTERN_TYPES.CREATIONAL] = allPatterns
      .filter(pattern => pattern.type === PATTERN_TYPES.CREATIONAL);
    patternsByType[PATTERN_TYPES.STRUCTURAL] = allPatterns
      .filter(pattern => pattern.type === PATTERN_TYPES.STRUCTURAL);
    patternsByType[PATTERN_TYPES.BEHAVIORAL] = allPatterns
      .filter(pattern => pattern.type === PATTERN_TYPES.BEHAVIORAL);

    return (
      <div className='pattern-selector'>
        <p className='pattern-selector-caption'>Select the patterns you want to compare.</p>
        <div className='pattern-selector-options'>

          {
            allPatterns.map(pattern => {
              const patternTypeClass = `${pattern.type.toLowerCase().split(' ').join('-')}-patterns`;
              return (
                <PatternOption
                  key={pattern.name}
                  className={`${this.state[pattern.name] ? 'selected' : 'deselected'} ${patternTypeClass}`}
                  pattern={pattern}
                  onClick={this.togglePatternSelection}
                />
              );
            })
          }
          
        </div>

      </div>
    )
  }
}
