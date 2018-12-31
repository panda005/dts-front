import C from './constants'


export const queryDocument = (collection, docid) =>
    ({
        type: C.QUERY_DOCUMENT,
        collection,
        docid
    })


export const resultDocument = (json) =>
    ({
        type: C.VIEW_DOCUMENT,
        json
    })

export const queryCollection = () =>
    ({
        type: C.QUERY_COLLECTION
    })

export const resultCollection = (json) =>
    ({
        type: C.VIEW_COLLECTION,
        json
    })