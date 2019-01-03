import C from '../constants'

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

/*
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
*/
