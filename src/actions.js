import C from './constants'


export const queryDocument = (collection, docid) => dispatch =>
    (
        fetch("http://dts-api.dev.9rum.cc/v1/collection/" + collection + "/document/" + docid + "/analyze.json?aggr=true")
            .then(response => response.json())
            .then(json => dispatch(resultDocument(JSON.stringify(json))))
    )

export const resultDocument = (json) =>
    ({
        type: C.VIEW_DOCUMENT,
        json
    })

/*
export const queryCollection = () =>
    ({
        type: C.QUERY_COLLECTION
    })

export const resultCollection = (json) =>
    ({
        type: C.VIEW_COLLECTION,
        json
    })
    */