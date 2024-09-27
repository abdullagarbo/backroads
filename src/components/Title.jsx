import React from 'react';

function Title({ prefix, sufix }) {
  return (
    <div className='section-title'>
      <h2>
        {prefix} <span>{sufix}</span>
      </h2>
    </div>
  );
}

export default Title;
