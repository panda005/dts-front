import {connect} from 'react-redux'
import {queryDocument} from '../actions'
import DocumentView from './ui/DocumentView'
import QueryForm from './ui/QueryForm'


export const Query = connect(
    state =>
        (
            {
                collection: state.collection,
                docid: state.docid
            }
        ),
    dispatch =>
        ({
            OnDocId(collection, docid) {
                dispatch(queryDocument(collection, docid))
                //queryDocument(collection, docid)(dispatch)
            }
        })
)(QueryForm)


export const View = connect(
    state =>
        (
            {
                json: state.reducer_view.json
                //...state.reducer_view
            }
        ),
    /*
    dispatch =>
        ({
                OnChanged() {
                }
            })
            */
    null
)(DocumentView)