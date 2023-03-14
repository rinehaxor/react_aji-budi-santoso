import React from 'react';

function Button(props) {
  return (
    <button onClick={props.onClick} className="btn btn-primary w-100 mb-5">
      {props.label}
    </button>
  );
}

export default Button;
