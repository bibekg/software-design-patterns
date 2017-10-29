import React from 'react';
import './ComparisonColumns.scss';

export default function ComparisonColumns(props) {
  const { patterns } = props;
  const generateListForArray = (arr) => (
    arr.length === 0 ? null : <ul>{arr.map(i => <li key={i}>{i}</li>)}</ul>
  );
  return (
    <div className='comparison-columns'>
      <div className='patterns-row patterns-names'>
        {
          patterns.map(pattern => (
            <div
              className={`pattern-column pattern-name ${pattern.type.toLowerCase()}`}
              key={pattern.name}
            >
              <a href={pattern.link}>
                {pattern.name}
              </a>
            </div>
          ))
        }
      </div>

      <div className='patterns-row patterns-type'>
        {
          patterns.map(pattern => (
            <div className='pattern-column pattern-type' key={pattern.name}>
              {pattern.type}
            </div>
          ))
        }
      </div>

      <div className='patterns-row patterns-definition'>
        {
          patterns.map(pattern => (
            <div className='pattern-column' key={pattern.name}>
              <p>{pattern.definition}</p>
            </div>
          ))
        }
      </div>

      <div className='patterns-row patterns-diagram'>
        {
          patterns.map(pattern => (
            <div className='pattern-column' key={pattern.name}>
              <img src={pattern.diagram} alt={`${pattern.name} diagram`}/>
            </div>
          ))
        }
      </div>

      <div className='patterns-row patterns-notes'>
        {
          patterns.map(pattern => (
            <div className='pattern-column' key={pattern.name}>
              { generateListForArray(pattern.notes) }
            </div>
          ))
        }
      </div>

      <div className='patterns-row patterns-code-sample'>
        {
          patterns.map(pattern => (
            <div className='pattern-column' key={pattern.name}>
              <img src={pattern.codeSample} alt={`No code sample for ${pattern.name} yet. Coming soon!`}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}
