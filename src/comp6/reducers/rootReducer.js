import { createStore, combineReducers } from 'redux'
import userReducer from './userReducer'
import jobReducer from './jobReducer'
import productReducer from './productReducer'

const rootReducer = combineReducers({ userReducer, jobReducer, productReducer })

const myStore = createStore(rootReducer,
    { productReducer, userReducer: 'Ahmet', jobReducer: ["Dev", "Op"] },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default myStore