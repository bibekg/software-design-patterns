import React from 'react';

export default function ComparisonColumns(props) {
  const { patterns } = props;
  const generateListForArray = (arr) => (
    arr.length === 0 ? null : <ul>{arr.map(i => <li key={i}>{i}</li>)}</ul>
  );
  return (
    <div className='comparison-columns'>
      <div className='patterns-row patterns-names'>
        <h2 className='row-name'>Name</h2>
        {
          patterns.map(pattern => (
            <div className='pattern-column' key={pattern.name}>
              <h1><a href={pattern.link}>{pattern.name}</a></h1>
            </div>
          ))
        }
      </div>

      <div className='patterns-row patterns-type'>
        <h2 className='row-name'>Type</h2>
        {
          patterns.map(pattern => (
            <div className='pattern-column' key={pattern.name}>
              <h3>{pattern.type}</h3>
            </div>
          ))
        }
      </div>

      <div className='patterns-row patterns-definition'>
        <h2 className='row-name'>Definition</h2>
        {
          patterns.map(pattern => (
            <div className='pattern-column' key={pattern.name}>
              <p>{pattern.definition}</p>
            </div>
          ))
        }
      </div>

      <div className='patterns-row patterns-diagram'>
        <h2 className='row-name'>UML Class Diagram</h2>
        {
          patterns.map(pattern => (
            <div className='pattern-column' key={pattern.name}>
              <img src={pattern.diagram} alt={`${pattern.name} diagram`}/>
            </div>
          ))
        }
      </div>

      <div className='patterns-row patterns-pros'>
        <h2 className='row-name'>Pros</h2>
        {
          patterns.map(pattern => (
            <div className='pattern-column' key={pattern.name}>
              { generateListForArray(pattern.pros) }
            </div>
          ))
        }
      </div>

      <div className='patterns-row patterns-cons'>
        <h2 className='row-name'>Cons</h2>
        {
          patterns.map(pattern => (
            <div className='pattern-column' key={pattern.name}>
              { generateListForArray(pattern.cons) }
            </div>
          ))
        }
      </div>

      <div className='patterns-row patterns-notes'>
        <h2 className='row-name'>Notes</h2>
        {
          patterns.map(pattern => (
            <div className='pattern-column' key={pattern.name}>
              { generateListForArray(pattern.notes) }
            </div>
          ))
        }
      </div>
    </div>
  )
}
