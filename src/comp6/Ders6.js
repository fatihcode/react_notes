import React from 'react'

import { createStore, combineReducers } from 'redux'

function reducer(state,action) { 
  console.log(state,action);

  if (action.type=='changeTheState') {   
    return action.payload
  }
  return 'Old State'
}

const store = createStore(reducer)

console.log(store.getState());

const action = {
  type: 'changeTheState',
  payload: { newState: 'New State' }
}

store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch(action)

//------------------------------------------

function userReducer(state="",action) {
  return state
}

function jobReducer(state=[],action) {
  return state
}

const rootReducer=combineReducers(
  {userReducer,jobReducer}
)

const myStore = createStore(rootReducer,
  {userReducer:'Ahmet',jobReducer:["Dev","Op"]})

myStore.subscribe(()=>{
  console.log(myStore.getState());
})

console.log(myStore.getState());

//------------------------------------------

export default function Ders6() {

  return (
    <div>
      <h2>[Ders 6] - Redux</h2>
     

    </div>
  )
}

