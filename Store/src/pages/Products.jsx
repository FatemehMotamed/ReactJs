import React from 'react'

import ProductList from '../components/ProductList'
import SideBar from '../components/SideBar'
import Search from '../components/Search'


function Products() {
  return (
        <>
          <Search />
          <div style={{display:"flex"}}>
              <ProductList />
              <SideBar />
          </div>
        </>
      
  )
}

export default Products