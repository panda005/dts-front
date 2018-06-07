import React from 'react';
import Field from "./Field"
import "./Document.css";

const Document = ({fields}) => {

    const elems = fields.map((f, i) => {
        if (f) {
            const {inputFieldName, input, type, analyzer} = f;
            return (<Field key={i} name={inputFieldName} value={input} analyzer={analyzer} type={type} />)
        }
    });

    return (
        <ul className="FieldList">
            {elems}
        </ul>
    );
};

export default Document;