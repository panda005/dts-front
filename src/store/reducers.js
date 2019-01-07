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

