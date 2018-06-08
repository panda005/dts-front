import C from '../constants'
import {resultDocument} from '../actions'

export const reducer_query =  (state = "", action) => {
    switch(action.type) {
        case C.QUERY_DOCUMENT:
             fetch("http://dts-api.dev.9rum.cc/v1/collection/" + action.collection + "/document/" + action.docid + "/analyze.json?aggr=true")
                .then(response => response.json())
                .then(json => action.disp(resultDocument(JSON.stringify(json))))
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




