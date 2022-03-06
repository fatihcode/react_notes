import React from 'react'
import { Provider } from 'react-redux';
import myStore from './reducers/rootReducer'
import User from './User';
import Product from './Product';
import Job from './Job';


//------------------------------------------

export default function Ders6() {

  return (
    <div>
      <Provider store={myStore}>

        <h2>[Ders 6] - Redux</h2>

        <Product />
        <hr />
        <Job />
        <hr />
        <User age="20" text="Veri proptan" />

      </Provider>
    </div>
  )
}