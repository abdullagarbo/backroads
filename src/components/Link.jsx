import React from 'react';

function Link({ href, classname, target, rel, children }) {
  return (
    <li>
      <a href={href} className={classname} target={target} rel={rel}>
        {children}
      </a>
    </li>
  );
}

export default Link;
