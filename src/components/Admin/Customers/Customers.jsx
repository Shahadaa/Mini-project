import React from 'react'
import './Customers.css'
function Customers() {
  return (
    <div>
        <table className="table-fixed">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>  jones </td>
      <td>jone@gmail.com</td>
      <td><button className='block-button'>Block</button></td>
    </tr>
    <tr>
      <td>Nisha pearl</td>
      <td>Nisha@gmail.com</td>
      <td><button className='block-button'>Block</button></td>
    </tr>
    <tr>
      <td>Sharoon mohan</td>
      <td>Sharoon@gmail.com</td>
      <td><button className='block-button'>Block</button></td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Customers