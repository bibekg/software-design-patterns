import React from 'react';
import './ComparisonColumns.scss';
import CodeDisplay from '../CodeDisplay';

export default function ComparisonColumns(props) {
  const { patterns } = props;
  const generateListForArray = (arr) => {

    const helper = (arr, depth) => {
      if (arr.length === 0) { return null; }

      return (
        <ul key={depth}>
          {
            arr.map(arrItem => (
              Array.isArray(arrItem) ?
                helper(arrItem, depth + 1) :
                <li key={arrItem}>{arrItem}</li>
            ))
          }
        </ul>
      )
    }

    return helper(arr, 0)

  };

  return (
    <div className='comparison-columns'>
      <div className='patterns-row patterns-names'>
        {
          patterns.map(pattern => (
            <div
              className={`pattern-column pattern-name ${pattern.type.toLowerCase()}`}
              key={pattern.name}
            >
              <a href={pattern.link} target='_blank'>
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
              {
                pattern.diagram ?
                  <img src={pattern.diagram} alt={`${pattern.name} diagram`}/> :
                  <p>{`No diagram available for ${pattern.name}`}</p>
              }

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
              {
                pattern.codeSample &&
                  <CodeDisplay fileUrl={pattern.codeSample} language='java' />
              }

            </div>
          ))
        }
      </div>
    </div>
  )
}
