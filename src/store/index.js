/*

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import storeFactory from './store'

const store = storeFactory()

window.React = React
window.store = store

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
*/

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer_query, reducer_view } from './reducers'


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

/*
const saver = store => next => action => {
    let result = next(action)
    localStorage['redux-store'] = JSON.stringify(store.getState())
    return result
}

const storeFactory = (initialState=stateData) =>
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({colors, sort}),
        (localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            stateData
    )

*/

const storeFactory = (initialState={}) =>
    applyMiddleware(logger)(createStore)(
        combineReducers({reducer_query, reducer_view}),
            {}
    )

export default storeFactory
