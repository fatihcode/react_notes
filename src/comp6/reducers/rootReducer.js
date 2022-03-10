import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import userReducer from './userReducer'
import jobReducer from './jobReducer'
import productReducer from './productReducer'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import logger from 'redux-logger'

const allEnhancers = compose(
    applyMiddleware(thunk, promise, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const rootReducer = combineReducers({ userReducer, jobReducer, productReducer })

const myStore = createStore(rootReducer,
    { productReducer: "Old Product", userReducer: 'Ahmet', jobReducer: ["Dev", "Op"] },
    allEnhancers
)

export default myStore



// const myStore = createStore(rootReducer,
//     { productReducer, userReducer: 'Ahmet', jobReducer: ["Dev", "Op"] },
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

// export default myStore