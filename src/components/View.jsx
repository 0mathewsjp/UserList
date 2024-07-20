import React, { useState } from 'react'
import Navbar from './Navbar'

const View = () => {
const [data,changeData]=useState(
    [
                {"id": 1,"name": "John Doe","username": "jdoe","email": "jdoe@example.com","phone": "555-1234","website": "johndoe.com"},
                {"id": 2,"name": "Jane Smith","username": "jsmith","email": "jsmith@example.com","phone": "555-5678","website": "janesmith.com"},
                {"id": 3,"name": "Alice Johnson","username": "ajohnson","email": "ajohnson@example.com","phone": "555-8765","website": "alicejohnson.com"},
                {"id": 4,"name": "Bob Brown","username": "bbrown","email": "bbrown@example.com","phone": "555-4321","website": "bobbrown.com"},
                {"id": 5,"name": "Carol White","username": "cwhite","email": "cwhite@example.com","phone": "555-2468","website": "carolwhite.com"},
                {"id": 6,"name": "David Green","username": "dgreen","email": "dgreen@example.com","phone": "555-1357","website": "davidgreen.com"},
                {"id": 7,"name": "Eve Black","username": "eblack","email": "eblack@example.com","phone": "555-9876","website": "eveblack.com"},
                {"id": 8,"name": "Frank Blue","username": "fblue","email": "fblue@example.com","phone": "555-6543","website": "frankblue.com"},
                {"id": 9,"name": "Grace Red","username": "gred","email": "gred@example.com","phone": "555-3210","website": "gracered.com"},
                {"id": 10,"name": "Hank Yellow","username": "hyellow","email": "hyellow@example.com","phone": "555-7890","website": "hankyellow.com"}
    ]
)
    
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
  <thead>
    <tr>
    <th scope="col"><b>Sl No</b></th>
    <th scope="col"><b>Name</b></th>
    <th scope="col"><b>Username</b></th>
    <th scope="col"><b>Email</b></th>
    <th scope="col"><b>Phone NO</b></th>
    <th scope="col"><b>Website</b></th>
    </tr>
  </thead>
  <tbody>
   {
    data.map(
        (value, index) => {
            return <tr>
            <th scope="row">{value.id}</th>
            <td>{value.name}</td>
            <td>{value.username}</td>
            <td>{value.email}</td>
            <td>{value.phone}</td>
            <td>{value.website}</td>
        </tr>
 } )
   }
  </tbody>
</table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default View
