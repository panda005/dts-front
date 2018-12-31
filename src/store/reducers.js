import C from '../constants'
import {resultDocument, resultCollection} from '../actions'


export const reducer_query =  (state = "", action) => {
    switch(action.type) {
        case C.QUERY_DOCUMENT:
             fetch("http://dts-api.dev.9rum.cc/v1/collection/" + action.collection + "/document/" + action.docid + "/analyze.json?aggr=true")
                .then(response => response.json())
                .then(json => action.store.dispatch(resultDocument(JSON.stringify(json))))
            return {
                "collection" : action.collection,
                "docid" : action.docid
            }
        default :
            return state
    }
}

export const reducer_view = (state = {}, action) => {
    switch(action.type) {
        case C.VIEW_DOCUMENT:
            return {
                json: action.json
            }
        default :
            return state
    }
}

export const reducer_query_collection =  (state = "", action) => {
    switch(action.type) {
        case C.QUERY_COLLECTION:
            fetch("http://dts-api.dev.9rum.cc/v1/collections.json")
                .then(response => response.json())
                .then(json => action.store.dispatch(resultCollection(JSON.stringify(json))))
        default :
            return state
    }
}

export const reducer_view_collection = (state = {}, action) => {
    switch(action.type) {
        case C.VIEW_COLLECTION:
            return {
                json: action.json
            }
        default :
            return state
    }
}

