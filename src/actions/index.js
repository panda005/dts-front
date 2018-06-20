export const SELECT_COLLECTION = "SELECT_COLLECTION";

export function setCollection(coll) {
    return {
        type: SELECT_COLLECTION,
        selected: coll
    }
}