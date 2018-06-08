import C from './constants'


export const queryDocument = (collection, docid, disp) =>
    ({
    type: C.QUERY_DOCUMENT,
        collection,
        docid,
        disp
})


export const resultDocument = (json) =>
    ({
        type: C.VIEW_DOCUMENT,
        json
    })
