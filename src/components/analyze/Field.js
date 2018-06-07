import React from 'react';
import './Field.css'

const Field = ({name, value, analyzer, type}) => (
    <li className="Field">
        <p><b>{name}</b> {value} {type} {analyzer}</p>
    </li>
);

export default Field;