import React from 'react';
import { Component } from 'react'
import PropTypes from 'prop-types'
import {queryCollection} from '../../actions'

export default class QueryForm extends Component  {

    componentDidMount() {
        console.log("##componentDidMount")


        //this.context.store.dispatch(queryCollection())
    }
    render() {
        const { collection, docid, OnDocId=f=>f } = this.props
        let _collection, _docid

        const submit = e => {
            e.preventDefault()
            OnDocId(_collection.value, _docid.value)
            _collection.value = collection
            _docid.value = docid
            _collection.focus()
        }

        const {store} = this.context
        console.log(store)

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
}

QueryForm.propTypes = {
    OnDocId: PropTypes.func
}