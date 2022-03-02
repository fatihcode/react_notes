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
      <h2>[Ders 6] - Redux</h2>

      <Provider store={myStore}>
        <User age="20" text="Veri proptan" />
        <hr />
        <Product/>
        <hr />
        <Job/>
      </Provider>
    </div>
  )
}

