import React from 'react'
import "./Admin.css"
import { NavLink, Route, Routes } from 'react-router-dom'
import CreateProduct from './create-product/CreateProduct'
import ManageProduct from './manage-product/ManageProduct'
function Admin() {
  return (
    <div className='admin'>
      <div className="admin__sidebar">
        <NavLink to={"/"}>
        <button>orqaga</button>
        </NavLink>
        <h2>Admin - Private Route</h2>
        <h3>Authentication</h3>
        <div className="admin_links">
          <NavLink to={"create-product"}>Create Product</NavLink>
          <NavLink to={"manage-product"}>Manage Product</NavLink>
        </div>
      </div>
      <div className="admin__content">
        <Routes>
          <Route path='create-product' element={<CreateProduct/>} />
          <Route path='manage-product' element={<ManageProduct/>} />

        </Routes>
      </div>
    </div>
  )
}

export default Admin