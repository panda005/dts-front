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
