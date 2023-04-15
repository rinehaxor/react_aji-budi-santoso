import React from 'react';

function Button(props) {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.label} {props.children}
    </button>
  );
}

export default Button;
