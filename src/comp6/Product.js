import React from 'react'
import { connect } from 'react-redux'
import {updateProduct} from './actions/productAction'

export const Product = (props) => {
  return (
    <div>

      <h3>Product Comp</h3>
      <h4>Products: {props.productReducer}</h4>

      <button>Update Product</button>

    </div>
  )
}

const mapStateToProps = (state) => { return state }

const mapDispatchToProps = {updateProduct}

export default connect(mapStateToProps, mapDispatchToProps)(Product)