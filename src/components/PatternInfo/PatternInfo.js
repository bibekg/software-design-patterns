import React from 'react';
import './PatternInfo.css';

export default function PatternInfo(props) {
  const { pattern } = props;
  return (
    <div className='pattern-info'>
      <h1>{ pattern.name }</h1>
      <h4>{ pattern.type }</h4>
      <p>{ pattern.definition }</p>
      <img src={pattern.diagram} alt={`${pattern.name} diagram`} />
      <h2>Pros</h2>
      <p>{ pattern.pros }</p>
      <h2>Cons</h2>
      <p>{ pattern.cons }</p>
    </div>
  );
}
