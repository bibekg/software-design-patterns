import React from 'react';

export default function ComparisonRow(props) {

  const { className, rowName, comparisonObjects } = props;
  return (
    <div className={`comparison-row ${className}`}>
      <h2>{rowName}</h2>
      {
        comparisonObjects.map(obj => ())
      }
    </div>
  )
}
