import React from 'react'
import './Orders.css'
function Orders() {
  return (
    <div>
        <table className="table-fixed">
  <thead>
    <tr>
      <th>Title</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> Ferrari  </td>
      <td>$786543921</td>
      <td>1</td>
      <td><button className='ViewDetails-button'>View Details</button></td>

    </tr>
    <tr>
      <td>Lamborghini Huracan</td>
      <td>$259457890</td>
      <td>1</td>
      <td><button className='ViewDetails-button'>View Details</button></td>
    </tr>
    <tr>
      <td>Rolls Roys</td>
      <td>$859459890</td>
      <td>1</td>
      <td><button className='ViewDetails-button'>View Details</button></td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Orders