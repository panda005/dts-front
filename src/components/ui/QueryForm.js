import React from 'react';
//import DocumentView from "./DocumentView";
//import { Component } from 'react'
import PropTypes from 'prop-types'




const QueryForm = ( { collection, docid, OnDocId=f=>f } ) => {

    let _collection, _docid

    const submit = e => {
        e.preventDefault()
        OnDocId(_collection.value, _docid.value)
        _collection.value = collection
        _docid.value = docid
        _collection.focus()
    }

    return (
        <form className="doc-id" onSubmit={submit}>
            <input ref={input => _collection = input}
                   type="text" value={collection} placeholder="컬렉션 명" required/>
            <input ref={input => _docid = input}
                   type="text" value={docid} placeholder="document id" required/>
            <button>Query</button>
        </form>
    )

}

QueryForm.propTypes = {
    OnDocId: PropTypes.func
}

export default QueryForm
