import React from 'react'
import Header from './Nav'
import Sidebar from '../Containers/Sidebar'
const Orders = () => {
  return (
    <>
    <Header />
  
    <div className="container-fluid">
<div className="row">
 <Sidebar/>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">Orders</h1>
      </div>
      </main>
    </div>
    </div>
  </>
  )
}

export default Orders