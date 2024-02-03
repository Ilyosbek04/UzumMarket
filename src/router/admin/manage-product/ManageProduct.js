import React from 'react'
import {PRODUCTS} from "../../../static"
import Products from "../../../components/products/Products"

function ManageProduct() {
  return (
    <div>
      <h2>ManageProduct</h2>
      <Products admin={true} data={PRODUCTS}/>
    </div>
  )
}

export default ManageProduct