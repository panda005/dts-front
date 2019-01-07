import {applyMiddleware, combineReducers, createStore} from 'redux'
import {reducer_view} from './reducers'
import thunk from 'redux-thunk'

const logger = store => next => action => {
    let result
    console.groupCollapsed('디스패칭', action.type)
    console.log('이전 상태', store.getState())
    console.log('액션', action)
    result = next(action)
    console.log('다음 상태', store.getState())
    console.groupEnd()
    return result
}

// const dispatchAdder = store => next => action => {
//     action.store = store
//     return next(action)
// }


const storeFactory = (initialState = {}) =>
    applyMiddleware(logger, /*dispatchAdder,*/ thunk)(createStore)(
        combineReducers({reducer_view}),
        initialState
    )

export default storeFactory
