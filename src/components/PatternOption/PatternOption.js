import React from 'react';
import './PatternOption.scss';

export default function PatternOption(props) {
  const { className, pattern, onClick } = props;

  const onDivClick = () => { onClick(pattern.name); }

  return (
    <div className={`pattern-option ${className}`} onClick={onDivClick}>
      {pattern.name}
    </div>
  )
}
