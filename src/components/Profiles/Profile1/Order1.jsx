import React from 'react'

function Order1() {
  return (
    <div>
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">


<div className="w-75 bg-white rounded p-3">
  <div className="d-flex justify-content-between mb-3">
   
  </div>
      
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Customer Name</th>
            <th>Customer ID</th>
            <th>Customer Phone no</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>pizza</td>
              <td>1200</td>
              <td>2</td>
              <td>d.sapmath</td>
              <td>29286</td>
              <td>0767396978</td>
              <td>
              <button className="btn btn-success">Accept</button>
              <button className="btn btn-danger">Reject</button>
              </td>
            </tr>
          
        </tbody>
      </table>
    </div>
    </div>
    </div>
  )
}

export default Order1