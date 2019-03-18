import React from 'react';
import './_Buttons.scss';

const button = (props) => (
    <button 
    disabled={props.disabled}
    className="Button btn btn-success"
   onClick={props.clicked} >
    {props.children}</button>
);

export default button;